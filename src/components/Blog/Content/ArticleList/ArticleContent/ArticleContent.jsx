import React from 'react';
import moment from 'moment';
import { Input, Button, message } from 'antd';
import style from './ArticleContent.less';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';


class ArticleContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            userName: '',
            email: '',
            show: false
        };
    }

    componentDidMount() {
        const {handleGetArticle, handleGetComment} = this.props;
        const id = this.props.location.query.id;
        handleGetArticle(id);
        handleGetComment(id)
    }

    // showhtml = (record) => {
    //     let html = {__html: record};
    //     return <div dangerouslySetInnerHTML={html}></div>;
    // };

    onChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    };

    onChangeUserName = (e) => {
        this.setState({
            userName: e.target.value
        })
    };

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    submitComment = () => {
        const { comment } = this.state;
        const { handleSubmitComment } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        const visitor = JSON.parse(localStorage.getItem('visitor'));
        if(!visitor) {
            message.warning('请输入您的昵称和邮箱！');
            this.setState({
                show: true
            });
            return false;
        } else if (comment.length < 8) {
            message.warning('留言长度不能小于8！');
            return false;
        } else {
            const data = {
                articleId: this.props.location.query.id,
                replyId: '',
                toUserName: this.isAdmin() ? user.userName : visitor.userName,
                email: this.isAdmin() ? '1075843579@qq.com' : visitor.email,
                isAdmin: this.isAdmin(),
                content: comment,
                state: false,
            };
            handleSubmitComment(data);
            this.setState({
                comment: ''
            })
        }
    };

    isAdmin = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const isAdmin = (user !== null && user.userName === 'Rashomon') ? true : false;
        return isAdmin;
    };

    submitUserInfo = () => {
        const { userName, email} = this.state;
        const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (!(reg.test(email))) {
            message.warning('请输入正确的邮箱格式')
        } if(userName === '' || userName.length < 3) {
            message.warning('昵称不能为空或长度小于3')
        } else if((reg.test(email))&& userName.length > 3 ) {
            const data={
                userName: userName,
                email: email,
            };
            localStorage.setItem('visitor', JSON.stringify(data));
            this.setState({
                show: false
            })
        }

    };

    renderSubmit = () => {
        return (
            <div className={style.submitBox}>
                <Input
                    size="large"
                    placeholder="提交留言"
                    value={this.state.comment}
                    style={{width: '85%', marginRight: 20 }}
                    onChange={this.onChange}
                    onPressEnter={this.submitComment}
                />
                <Button
                    type='primary'
                    size="large"
                    onClick={this.submitComment}
                >
                    提交
                </Button>
            </div>
        )
    };

    renderVisitor = () => {
       return (
           <div className={style.visitorBox}>
               <Input
                   size="large"
                   placeholder="您的昵称"
                   value={this.state.userName}
                   style={{width: '40%', marginRight: 20 }}
                   onChange={this.onChangeUserName}
               />
               <Input
                   size="large"
                   placeholder="您的邮箱"
                   value={this.state.email}
                   style={{width: '40%', marginRight: 20 }}
                   onChange={this.onChangeEmail}
               />
               <Button
                   type='primary'
                   size="large"
                   onClick={this.submitUserInfo}
               >
                   提交
               </Button>
           </div>
       )
    };

    render() {
        const { articleContent } = this.props;
        const { show } = this.state;
        return (
            <div className={style.tags}>
                <div className={style.article}>
                    <p className={style.title}>
                        {articleContent.title}
                    </p>
                    <div>
                        By：<span>魑魅魍魉</span>
                        &emsp;
                        日期：<span>{moment(articleContent.date).format('YYYY-MM-DD HH:mm')}</span>
                        <hr/>
                    </div>
                    <ReactQuill
                        readOnly
                        theme='bubble'
                        value={articleContent.content}
                    >
                    </ReactQuill>
                </div>
                <div className={style.comment}>
                    {show ? this.renderVisitor() : null}
                    {!show ? this.renderSubmit() : null}
                </div>
            </div>
        )
    }
}

export default ArticleContent;
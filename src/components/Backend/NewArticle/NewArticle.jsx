import React from 'react';
import { Input, Button, Select, message, DatePicker } from 'antd'
import moment from 'moment';
import style from './NewArticle.less';
import ReactQuill from 'react-quill';
import {modules,formats} from '../../../config/config';
import 'react-quill/dist/quill.snow.css';

const { Option }= Select;

class NewArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tags: [],
            date: '',
            editorHtml: '',
        }
    }

    componentDidMount(){
        const { handleGetTags } = this.props;
        handleGetTags();
    }

    getTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    handleSelect = (value) => {
        console.log(value);
        this.setState({
            tags: value
        })
    };

    handleTime = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        this.setState({
            date: dateString
        })
    };

    handleContent = (html) => {
        console.log(html);
        this.setState({editorHtml: html});
    };

    saveArticle = () => {
        const { title, tags, date, editorHtml } = this.state;
        const { handleSubmitArticle } = this.props;
        const auth = JSON.parse(localStorage.getItem('auth'));
        const data={
            title: title,
            tags: tags,
            date: date,
            content: editorHtml,
            draft: true
        };
        if(auth){
            handleSubmitArticle(data)
        } else {
            message.warning('抱歉，您没有权限！');
        }
    };

    submitArticle = () => {
        const { title, tags, date, editorHtml } = this.state;
        const { handleSubmitArticle } = this.props;
        const auth = JSON.parse(localStorage.getItem('auth'));
        const data={
            title: title,
            tags: tags,
            date: date,
            content: editorHtml,
            draft: false
        };
        if(auth){
            handleSubmitArticle(data)
        } else {
            message.warning('抱歉，您没有权限！');
        }
    };

    render() {
        const { tags } = this.props;
        let children = tags.map((item)=>{
            return <Option key={item._id}>{item.content}</Option>
        });
        return (
            <div className={style.article}>
                <div className={style.box}>
                    <span>文章标题：</span>
                    <Input
                        placeholder="请输入标题"
                        style={{ width: '80%' }}
                        onChange={this.getTitle}
                    />
                </div>
                <div className={style.box}>
                    <span>文章标签：</span>
                    <Select
                        mode="multiple"
                        style={{ width: '80%' }}
                        placeholder="请选择标签"
                        onChange={this.handleSelect}
                    >
                        {children}
                    </Select>
                </div>
                <div className={style.box}>
                    <span>发布时间：</span>
                    <DatePicker
                        showTime
                        format="YYYY-MM-DD HH:mm"
                        placeholder="Select Time"
                        onChange={this.handleTime}
                    />
                </div>
                <div className={style.articleBox}>
                    <p>文章详情：</p>
                    <ReactQuill
                        theme='snow'
                        onChange={this.handleContent}
                        value={this.state.editorHtml}
                        modules={modules}
                        formats={formats}
                        style={{ height:300}}
                        placeholder='请输入文章内容'
                    />
                </div>
                <div className={style.btn}>
                    <Button
                        type="primary"
                        style={{ marginRight: 20 }}
                        onClick={this.saveArticle}
                    >
                        保存草稿
                    </Button>
                    <Button
                        type="primary"
                        onClick={this.submitArticle}
                    >
                        提交文章
                    </Button>
                </div>
            </div>

        )
    }
}

export default NewArticle;
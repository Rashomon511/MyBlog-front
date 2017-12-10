import React from 'react';
import moment from 'moment';
import style from './ArticleContent.less';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

class ArticleContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const {handleGetArticle} = this.props;
        const id = this.props.location.query.id;
        handleGetArticle(id);
    }

    // showhtml = (record) => {
    //     let html = {__html: record};
    //     return <div dangerouslySetInnerHTML={html}></div>;
    // };

    render() {
        const {articleContent} = this.props;
        return (
            <div className={style.tags}>
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
        )
    }
}

export default ArticleContent;
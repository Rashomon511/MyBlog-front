import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Spin, Pagination } from 'antd';
import style from './Article.less';
import {Tag} from 'antd'


class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static contextTypes = {
        router: PropTypes.object
    };

    goTagList = (e) => {
        const self=e.currentTarget;
        const { allTags } = this.props;
        let content=allTags.filter((item)=>{
            return item._id === self.id
        });
        return this.context.router.push('/main/tagList/?id='+self.id+'&name='+content[0].content);
    };

    goArticle = (id) => {
        this.context.router.push('/main/showArticle?id='+id)
    };

    renderTag = (data) => {
        const { allTags } = this.props;
        const tags= allTags.filter((i)=>{
            return data.indexOf(i.content) !== -1
        });
        const tag=tags.map((item,index)=>{
           return (
               <Tag
                   key={index}
                   color="#2db7f5"
                   id={item._id}
                   className={style.tag}
                   onClick={this.goTagList}
               >
                   {item.content}
               </Tag>
           )
        });
        return tag
    };

    renderArticle = () => {
        const { article } = this.props;
        const allArticle=article.data.map((item,index)=>{
            return (
                <div className={style.wrap} key={index}>
                    <div className={style.article}>
                        <h2 className={style.header}>{item.title}</h2>
                        <div className={style.content}>
                            <p className={style.user}>
                                By：<span>魑魅魍魉</span>
                                <span>&emsp;</span>
                                日期：<span>{moment(item.date).format('YYYY-MM-DD HH:mm')}</span>
                            </p>
                            <div className={style.articleContent}>
                                {item.abstract}
                            </div>
                        </div>
                        <div className={style.more}>
                            <span
                                className={style.read}
                                onClick={()=>this.goArticle(item._id)}
                            >
                                阅读更多
                            </span>
                        </div>
                    </div>
                    <div className={style.articleInfo}>
                        {this.renderTag(item.tags)}
                    </div>
                </div>
            )
        });
        return allArticle;
    };

    pageChange =(page) => {
        const { handleRequestArticle } = this.props;
        handleRequestArticle({page:page,draft:false})
    };

    render() {
        const { loading, article } = this.props;
        if(loading){
            return (
                <div>
                    {this.renderArticle()}
                    <div className={style.page}>
                        <Pagination
                            onChange={this.pageChange}
                            pageSize={5}
                            total={article.total}
                        />
                    </div>
                </div>
            )
        }else {
            return (
                <div className={style.spin}>
                    <Spin size="large" />
                </div>
            )
        }

    }
}

export default Article;
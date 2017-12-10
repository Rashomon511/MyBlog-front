import React from 'react';
import style from './ArticleList.less';

import Article from './Article/Article';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        const { handleRequestArticle, handleGetTags} = this.props;
        handleGetTags();
        handleRequestArticle({page:1, draft: false });
    }

    render() {
        const { article, loading, handleRequestArticle, allTags } = this.props;
        return (
            <div className={style.articleList}>
                <Article
                    article={article}
                    loading={loading}
                    allTags={allTags}
                    handleRequestArticle={handleRequestArticle}
                />
            </div>
        )
    }
}

export default ArticleList;
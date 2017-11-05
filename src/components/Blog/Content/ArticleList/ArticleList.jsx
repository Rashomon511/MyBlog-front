import React from 'react';
import style from './ArticleList.less';

import Article from './Article/Article';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.articleList}>
                    <Article/>
                    <Article/>
            </div>
        )
    }
}

export default ArticleList;
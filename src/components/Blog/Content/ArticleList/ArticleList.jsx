import React from 'react';
import style from './ArticleList.less';
import Footer from '../Footer/Footer';
import Article from './Article/Article';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.articleWrap}>
                    <div className={style.articleList}>
                        <Article/>
                        <Article/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ArticleList;
import React from 'react';
import style from './ArticleList.less';
import Footer from '../Footer/Footer';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.articleList}>dddd</div>
                <Footer/>
            </div>
        )
    }
}

export default ArticleList;
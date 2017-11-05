import React from 'react';
import style from './ArticleContent.less';

class ArticleContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.tags}>
                <p className={style.title}>content</p>
                <hr/>
                <span>content</span>
            </div>
        )
    }
}

export default ArticleContent;
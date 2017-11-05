import React from 'react';
import PropTypes from 'prop-types';
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

    goTagList = () => {
        this.context.router.push('/main/tagList');
    };

    goArticle = () => {
        this.context.router.push('/main/showArticle')
    };

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.article}>
                    <h2 className={style.header}>1122</h2>
                    <div className={style.content}>
                        <p className={style.user}><span>ddddd</span></p>
                        <div className={style.articleContent}>
                            1111sdan抗健康牛角扣看见看见你刻录机才能看见了1看见你空间框架就撒开了就1靠近你你空间里但是可怜见金利科技2离开济南可怜见立刻就就成了看了看见你考虑看Salk济南济南了看见你看手机才能看见啦是1进口牛奶可乐就看见了离开洒家近年来看见你空间是农村的卡拉年即将离开了可能考虑到处拉客就三菱电机v1jknkjl出口处啦睡觉了看到v就今年就离开家烧录卡的阿历克斯那家立刻就能大厦底层初级会计看见你看了速度你记错了卡就1莫妮卡的撒擦你离开立刻进场能力考试了看看伤口处买了可是看来
                        </div>
                    </div>
                    <div className={style.more}>
                        <span className={style.read} onClick={this.goArticle}>阅读更多</span>
                    </div>
                </div>
                <div className={style.articleInfo}>
                    <Tag color="#2db7f5" className={style.tag} onClick={this.goTagList}>#2db7f5</Tag>
                </div>
            </div>
        )
    }
}

export default Article;
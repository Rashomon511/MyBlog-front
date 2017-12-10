import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Timeline } from 'antd';
import style from './TagList.less';

class TagList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount(){
        const id = this.props.location.query.id;
        const { handleGetArticle } = this.props;
        handleGetArticle({id:id})
    }

    goArticle = (id) => {
        this.context.router.push('/main/showArticle?id='+id)
    };

    renderList = () => {
        const { articleList } = this.props;
        const timeLine= articleList.map((item,index)=>{
            return (
                    <Timeline.Item
                        key={index}
                        onClick={()=>this.goArticle(item._id)}
                    >
                        <span>{item.title}</span>
                        <span>&emsp;&emsp;</span>
                        <span>{moment(item.date).format('YYYY-MM-DD HH:mm')}</span>
                    </Timeline.Item>
                )
        });
        return timeLine;
    };

    renderLine = () => {
        const { articleList } = this.props;
        if(articleList.length === 0){
            return (
                <div>
                    该标签下没有文章！
                </div>
            )
        } else {
            return (
                    <Timeline>
                        {this.renderList()}
                    </Timeline>
                )
        }
    };

    render() {
        const name = this.props.location.query.name;
        return (
            <div className={style.tags}>
                <p className={style.title}>Tags</p>
                <hr/>
                <span>{name}</span>
                {this.renderLine()}
            </div>
        )
    }
}

export default TagList;
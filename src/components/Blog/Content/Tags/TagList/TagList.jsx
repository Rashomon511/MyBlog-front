import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Timeline, Spin, Pagination } from 'antd';
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
        handleGetArticle({page:1,id:id})
    }

    goArticle = (id) => {
        this.context.router.push('/main/showArticle?id='+id)
    };

    renderList = () => {
        const { articleList } = this.props;
        const timeLine= articleList.list.map((item,index)=>{
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
        if(articleList.list.length === 0){
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

    pageChange =(page) => {
        const { handleGetArticle } = this.props;
        const id = this.props.location.query.id;
        handleGetArticle({page:page,id:id})
    };

    renderPage = () => {
      const { articleList } = this.props;
      if(articleList.total<=10){
          return ''
      } else {
          return (
              <Pagination
                  simple
                  onChange={this.pageChange}
                  pageSize={10}
                  defaultCurrent={1}
                  total={articleList.total}
              />
          )
      }
    };

    render() {
        const name = this.props.location.query.name;
        const { loading } = this.props;
        return (
            <div className={style.tags}>
                <p className={style.title}>{name}</p>
                <hr/>
                <div className={style.listWrap}>
                    {loading ? this.renderLine():<Spin />}
                    {this.renderPage()}
                </div>
            </div>
        )
    }
}

export default TagList;
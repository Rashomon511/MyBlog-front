import React from 'react';
import moment from 'moment';
import style from './ArticleManage.less';
import {Table, Button } from 'antd';


class ArticleManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        const { handleRequestArticle } = this.props;
        handleRequestArticle()
    }

    Editor = (e) => {
        console.log(e)
    };

    Delete = (e) => {
        const { handleDeleteArticle } = this.props;
        handleDeleteArticle(e.id);
    };

    render() {
        const {article} = this.props;
        const columns = [{
            title: '文章名称',
            dataIndex: 'title',
            key: 'title',
        }, {
            title: '创建时间',
            dataIndex: 'date',
            render: record=><span>{moment(record).format('YYYY-MM-DD HH:mm')}</span>
        }, {
            title: '是否草稿',
            dataIndex: 'draft',
            render: record=><span>{record === true ? '是' : '否'}</span>
        }, {
            title: '操作',
            render: (text, record) => (
                <div>
                    <Button
                        size="small"
                        type='primary'
                        onClick={()=>this.Editor(record)}
                    >
                        编辑
                    </Button>
                    <Button
                        size="small"
                        type="danger"
                        style={{ marginLeft: 20 }}
                        onClick={()=>this.Delete(record)}
                    >
                        删除
                    </Button>
                </div>
            ),
        }];
        console.log(article);

        const data=article.map((item,index)=>{
            return {
                key:index,
                id: item._id,
                title: item.title,
                date: item.date,
                draft: item.draft
            }
        });
        return (
            <div>
                <Table
                    pagination={false}
                    bordered
                    columns={columns}
                    dataSource={data}
                />
            </div>
        )
    }
}

export default ArticleManage;
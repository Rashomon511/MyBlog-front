import React from 'react';
import style from './ArticleManage.less';
import {Table, Button } from 'antd';

const columns = [{
    title: '文章名称',
    dataIndex: 'title',
    key: 'title',
}, {
    title: '创建时间',
    dataIndex: 'date',
    key: 'date',
}, {
    title: '是否草稿',
    dataIndex: 'state',
    key: 'state',
}, {
    title: '操作',
    render: (text, record) => (
        <div>
            <Button size="small" type='primary'>编辑</Button>
            <Button size="small" type="danger" style={{ marginLeft: 20 }}>删除</Button>
        </div>
    ),
}];
class ArticleManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        const { handleRequestArticle } = this.props;
        handleRequestArticle()
    }

    render() {
        const {article} = this.props;
        console.log(article);

        const data=article.map((item,index)=>{
            return {
                key:index,
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
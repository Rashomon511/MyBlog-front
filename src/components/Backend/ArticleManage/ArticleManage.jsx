import React from 'react';
import style from './ArticleManage.less';
import {Table, Button } from 'antd';

class ArticleManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const columns = [{
            title: '文章名称',
            dataIndex: 'title',
            key: 'title',
        }, {
            title: '创建时间',
            dataIndex: 'time',
            key: 'time',
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

        const data = [{
            key: '1',
            title: 'John Brown',
            time: "4:00",
            state: '是',
        }, {
            key: '2',
            title: 'John Brown',
            time: '3:00',
            state: '是',
        }, {
            key: '3',
            title: 'John Brown',
            time: '12:00',
            state: '否',
        }];
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
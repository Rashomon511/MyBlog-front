import React from 'react';
import PropType from 'prop-types';
import style from './ArticleManage.less';
import {Table, Icon,Pagination} from 'antd';

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
            key: 'action',
            render: (text, record) => (
                <span>
      <a href="#">编辑 {record.name}</a>
      <span className="ant-divider"/>
      <a href="#">删除</a>
      <span className="ant-divider"/>
    </span>
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
                <Table pagination={false} columns={columns} dataSource={data}/>
                <Pagination defaultCurrent={1} total={50}/>
            </div>
        )
    }
}

export default ArticleManage;
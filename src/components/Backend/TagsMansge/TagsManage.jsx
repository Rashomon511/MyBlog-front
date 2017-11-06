import React from 'react';
import PropType from 'prop-types';
import style from './TagsManage.less';
import {Table,Icon,Pagination} from 'antd';

class TagsManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const columns = [{
            title: '编号',
            dataIndex: 'index',
            key: 'index',
        }, {
            title: '标签',
            dataIndex: 'tag',
            key: 'tag',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
      <a href="#">删除</a>
    </span>
            ),
        }];

        const data = [{
            key: '1',
            index: 1,
            tag: 'js',
        }, {
            key: '2',
            index: 2,
            tag: 'html',
        }, {
            key: '3',
            index: 3,
            tag: 'css',
        }];

        return (
            <div>
                <Table pagination={false} columns={columns} dataSource={data} />
                <Pagination defaultCurrent={1} total={50} />
            </div>
        )
    }
}

export default TagsManage;
import React from 'react';
import style from './MsgManage.less';
import {Table} from 'antd';

class MsgManage extends React.Component {
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
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        }, {
                title: '内容',
                dataIndex: 'content',
                key: 'content',
            },{
            title: '审核状态',
            dataIndex: 'state',
            key: 'state',
        }, {
            title: '操作',
            render: () => (
                <div>
                    <a href="#">查看</a>
                    <span className="ant-divider"/>
                    <a href="#">通过</a>
                    <span className="ant-divider"/>
                    <a href="#">删除</a>
                </div>
            ),
        }];

        const data = [{
            key: '1',
            index:'1',
            name: 'John Brown',
            email: '1612676@qq.com',
            content:'了你空间',
            state: '未通过审核',
        }, {
            key: '2',
            index:'2',
            name: 'John Brown',
            email: '1612676@qq.com',
            content:'了你空间',
            state: '未通过审核',
        }, {
            key: '3',
            index:'3',
            name: 'John Brown',
            email: '1612676@qq.com',
            content:'了你空间',
            state: '未通过审核',
        }];
        return (
            <div>
                <Table
                    pagination={true}
                    bordered
                    columns={columns}
                    dataSource={data}
                />
            </div>
        )
    }
}

export default MsgManage;
import React from 'react';
import PropType from 'prop-types';
import { Input, Button } from 'antd';
import style from './TagsManage.less';
import {Table} from 'antd';

class TagsManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: '',
        };
    }

    DeleteTag = () => {
        console.log(111)
    };

    Tags = (e) =>{
        console.log(e.target.value);
        this.setState({
            tag: e.target.value
        })
    };

    createTag = () => {
        const { tag } = this.state;
        console.log(tag)
    }

    render() {
        const columns = [{
            title: '编号',
            width: '20%',
            dataIndex: 'index',
            className: 'columns',
            key: 'index',
        }, {
            title: '标签',
            dataIndex: 'tag',
            key: 'tag',
        }, {
            title: '操作',
            render: () => (<Button size='small' type="primary" onClick={this.DeleteTag}>删除</Button>),
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
                <div className={style.newTag}>
                    <span>新建标签：</span>
                    <Input placeholder="请输入新标签" style={{ width: '40%' }} onChange={this.Tags}/>
                    <Button type="primary" style={{ marginLeft: 20 }} onClick={this.createTag}>确定</Button>
                </div>
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

export default TagsManage;
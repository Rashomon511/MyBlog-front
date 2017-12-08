import React from 'react';
import { Input, Button, message, Modal } from 'antd';
import style from './TagsManage.less';
import {Table} from 'antd';

class TagsManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: '',
            visible: false,
            id: ''
        };
    }

    componentDidMount(){
        const { handleGetTags } = this.props;
        handleGetTags();
    }

    DeleteTag = (e) => {
        this.setState({
            id: e.id,
            visible: true,
        });
    };

    Tags = (e) =>{
        this.setState({
            tag: e.target.value
        })
    };

    createTag = () => {
        const { tag } = this.state;
        const auth = JSON.parse(localStorage.getItem('auth'));
        const { handleCreateTag } = this.props;
        if(tag!== ''){
            if(auth){
                handleCreateTag({content: tag});
                this.setState({
                    tag: ''
                });
            } else {
                this.error()
            }
        }else{
            message.warning('内容不能为空！');
        }

    };

    error = () => {
        message.warning('抱歉，您没有权限！');
    };

    handleCancel = () => {
        this.setState({
            visible: false
        })
    };

    handleOk = () => {
        const { handleDeleteTags } = this.props;
        const { id } = this.state;
        const auth = JSON.parse(localStorage.getItem('auth'));
        if(auth){
            handleDeleteTags({ id: id })
        } else {
            this.error()
        }
        this.setState({
            visible: false
        })
    };

    render() {
        const { loading, tags } = this.props;
        const { visible } = this.state;
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
            render: (record) => (
                <Button size='small' type="primary" onClick={()=>this.DeleteTag(record)}>删除</Button>
            ),
        }];

        const data = tags.map((item, index)=>{
            return {
                key: index,
                index: index+1,
                id: item._id,
                tag: item.content
            }
        })

        return (
            <div>
                <div className={style.newTag}>
                    <span>新建标签：</span>
                    <Input
                        placeholder="请输入新标签"
                        style={{ width: '40%' }}
                        onChange={this.Tags}
                        value={this.state.tag}
                    />
                    <Button
                        type="primary"
                        style={{ marginLeft: 20 }}
                        onClick={this.createTag}
                    >
                        确定
                    </Button>
                </div>
                <Table
                    pagination
                    bordered
                    loading={loading}
                    columns={columns}
                    dataSource={data}
                />
                <Modal
                    visible={visible}
                    title="提示"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
                        <Button key="submit" type="primary" size="large" onClick={this.handleOk}>
                            确认
                        </Button>,
                    ]}
                >
                    您将要删除该标签
                </Modal>
            </div>
        )
    }
}

export default TagsManage;
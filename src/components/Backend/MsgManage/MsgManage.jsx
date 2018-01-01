import React from 'react';
import {Table, Button, Modal, message} from 'antd';

class MsgManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewVisible: false,
            deleteVisible: false,
            changeVisible: false,
            status: '',
            content: '',
            id: '',
        };
    }

    componentDidMount () {
        const { handleGetComment } = this.props;
        handleGetComment({page: 1})
    }

    View = (e) => {
        this.setState({
            content: e.content,
            viewVisible: true,
        })
    };

    change = (e) => {
        this.setState({
            changeVisible: true,
            id: e.id,
            status: !e.state,
        })
    };

    Delete = (e) => {
      this.setState({
          deleteVisible: true,
          id: e.id,
      })
    };

    handleChange = (pagination) => {
        const { handleGetComment } = this.props;
        handleGetComment({page:pagination.current})
    };

    renderButton = (e) => {
        if(e.state){
            return (
                <Button
                    size="small"
                    type="danger"
                    style={{ marginLeft: 20 }}
                    onClick={()=>this.change(e)}
                >
                    拒绝
                </Button>
            )
        } else {
            return (
                <Button
                    size="small"
                    type='primary'
                    style={{ marginLeft: 20 }}
                    onClick={()=>this.change(e)}
                >
                    通过
                </Button>
            )
        }
    };

    handleOk = () => {
        this.setState({
            viewVisible: false
        })
    };

    handleChangeState = () => {
        const { handleChangeState } = this.props;
        const { id,status } = this.state;
        const auth = JSON.parse(localStorage.getItem('auth'));
        if(auth){
            const data = {
                id: id,
                state: status
            };
            handleChangeState(data);
            this.handleCancel();
        } else {
            message.warning('抱歉，您没有权限！');
            this.handleCancel();
        }
    };

    handleDelete = () => {
        const { handleDeleteComment } = this.props;
        const { id } = this.state;
        const auth = JSON.parse(localStorage.getItem('auth'));
        if(auth){
            handleDeleteComment(id);
            this.handleCancel();
        } else {
            message.warning('抱歉，您没有权限！');
            this.handleCancel();
        }
    };

    handleCancel = () => {
        this.setState({
            deleteVisible: false,
            changeVisible: false,
        })
    };
    render() {
        const { comment, loading } = this.props;
        const { viewVisible, deleteVisible, changeVisible, content, status } = this.state;
        const columns = [{
            title: '编号',
            dataIndex: 'index',
            key: 'index',
        }, {
            title: '名称',
            dataIndex: 'userName',
            key: 'userName',
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
            render: record=><span>{record === true ? '审核通过' : '审核未通过'}</span>
        }, {
            title: '操作',
            render: (text, record) => (
                <div>
                    <Button
                        size="small"
                        type='primary'
                        onClick={()=>this.View(record)}
                    >
                        查看
                    </Button>
                    {this.renderButton(record)}
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
        let data=[];
        if(loading){
        data = comment.data.map((item,index)=>{
            return {
                key: index,
                index: index+1,
                id: item._id,
                userName: item.toUserName,
                email: item.email,
                content: item.content,
                state: item.state,
            }
        })
        }
        const paginationProps = {
            showSizeChanger: false,
            showQuickJumper: true,
            ...{ total: comment.total, pageSize: 10 },
        };
        return (
            <div>
                <Table
                    pagination={paginationProps}
                    bordered
                    loading={!loading}
                    columns={columns}
                    dataSource={data}
                    onChange={this.handleChange}
                />
                <Modal
                    visible={viewVisible}
                    title="查看"
                    onOk={this.handleOk}
                    onCancel={this.handleOk}
                    footer={[
                        <Button key="submit" type="primary" size="large" onClick={this.handleOk}>
                            确认
                        </Button>
                    ]}
                >
                    <span>{content}</span>
                </Modal>
                <Modal
                    visible={changeVisible}
                    title="提示"
                    onOk={this.handleCancel}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
                        <Button key="submit" type="primary" size="large" onClick={this.handleChangeState}>
                            确认
                        </Button>
                    ]}
                >
                    <span>{status ? '该留言将通过审核' : '拒绝该留言的通过'}</span>
                </Modal>
                <Modal
                    visible={deleteVisible}
                    title="提示"
                    onOk={this.handleCancel}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
                        <Button key="submit" type="primary" size="large" onClick={this.handleDelete}>
                            确认
                        </Button>
                    ]}
                >
                    您将要删除该留言！
                </Modal>
            </div>
        )
    }
}

export default MsgManage;
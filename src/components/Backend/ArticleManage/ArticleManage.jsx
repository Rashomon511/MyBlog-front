import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Table, Button, Modal, message } from 'antd';


class ArticleManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            id: ''
        };
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount(){
        const { handleRequestArticle } = this.props;
        handleRequestArticle({page:1, draft:''})
    }

    Editor = (e) => {
        return this.context.router.push('/home/editArticle/?id='+e.id);
    };

    Delete = (e) => {
        this.setState({
            visible: true,
            id: e.id
        })
    };

    handleCancel = () => {
        this.setState({
            visible: false
        })
    };

    handleOk = () => {
        const { handleDeleteArticle } = this.props;
        const { id } = this.state;
        const auth = JSON.parse(localStorage.getItem('auth'));
        if(auth){
            handleDeleteArticle(id);
            this.handleCancel();
        } else {
            message.warning('抱歉，您没有权限！');
            this.handleCancel();
        }
    };

    handleChange = (pagination) => {
        const { handleRequestArticle } = this.props;
        handleRequestArticle({page:pagination.current, draft: ''})
    };

    render() {
        const {article, loading} = this.props;
        const {visible} = this.state;
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
        let data=[];
        if(loading){
            data=article.data.map((item,index)=>{
                return {
                    key:index,
                    id: item._id,
                    title: item.title,
                    date: item.date,
                    draft: item.draft
                }
            });
        }

        const paginationProps = {
            showSizeChanger: false,
            showQuickJumper: true,
            ...{ total: article.total, pageSize: 10 },
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
                    visible={visible}
                    title="提示"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
                        <Button key="submit" type="primary" size="large" onClick={this.handleOk}>
                            确认
                        </Button>
                    ]}
                >
                    您将要删除该文章
                </Modal>
            </div>
        )
    }
}

export default ArticleManage;
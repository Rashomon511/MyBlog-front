import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Table, Button, Modal } from 'antd';


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
        handleRequestArticle()
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
        handleDeleteArticle(id);
        this.setState({
            visible: false
        })
    };

    render() {
        const {article} = this.props;
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
                    您将要删除该文章
                </Modal>
            </div>
        )
    }
}

export default ArticleManage;
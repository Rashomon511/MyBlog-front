import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Layout, Menu, Icon, Dropdown, Avatar} from 'antd';

const {Header, Sider, Content, Footer} = Layout;
import style from './Home.less'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        }
    }

    static propTypes = {};

    static contextTypes = {
        router: PropTypes.object
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    Click = (clicked) => {
        switch (clicked.key) {
            case '1' :
                this.context.router.push('/home/newArticle');
                break;
            case '2' :
                this.context.router.push('/home/articleMge');
                break;
            case '3' :
                this.context.router.push('/home/msgManage');
                break;
            case '4' :
                this.context.router.push('/home/TagsMge');
                break;
            case '5' :
                this.context.router.push('/home/resume');
                break;
            default:
                return this.context.router.push('/home');
        }
    };

    onMenuClick = () => {
        console.log(22)
    };

    render() {
        const menu = (
            <Menu className={style.menu} selectedKeys={[]} onClick={this.onMenuClick}>
                <Menu.Item><Icon type="user"/>回到首页</Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="logout"><Icon type="logout"/>退出登录</Menu.Item>
            </Menu>
        );
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className={style.logo}>
                        <img src='../../src/assets/logo.jpg'/>
                        <span className={style.title}>魑魅魍魉</span>
                    </div>
                    <div className={style.menu}>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.Click}>
                            <Menu.Item key="1">
                                <Icon type="edit"/>
                                <span>新建文章</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="book"/>
                                <span>文章管理</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="message"/>
                                <span>留言管理</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="tag"/>
                                <span>标签管理</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="user"/>
                                <span>我的简历</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className={style.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <div className={style.right}>
                            <Dropdown overlay={menu}>
                                <span className={style.action}>
                                <Avatar size="samll" className={style.avatar} src='../../src/assets/logo.jpg'/>
                                <span>Roshomon</span>
                  </span>
                            </Dropdown>
                        </div>
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        {this.props.children}
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        ©2017 Created by Roshomon
                    </Footer>
                </Layout>

            </Layout>
        );
    }
}

export default Home;
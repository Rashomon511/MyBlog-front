import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, Button} from 'antd';
import Cookies from 'js-cookie'
import style from './Login.less'

const FormItem = Form.Item;

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }

    static contextTypes = {
        router: PropTypes.object
    };

    // 登陆完成获取token,并存储token,跳转页面
    componentWillReceiveProps(nextProps){
        if(nextProps.loginState === true){
            Cookies.set('token',nextProps.token);
            this.context.router.push('/home')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { handleLogin } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                handleLogin(values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className={style.loginForm}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }}  />} placeholder="visitor" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="888888" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className={style.loginFormButton}>
                            登陆
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;
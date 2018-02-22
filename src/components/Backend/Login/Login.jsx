import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, Button} from 'antd';
import style from './Login.less';

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
    // componentWillReceiveProps(nextProps){
    //     const { handleLoginState } = this.props;
    //     if(nextProps.loginState === true){
    //         Cookies.set('token',nextProps.token);
    //         this.context.router.push('/home');
    //         handleLoginState(false);
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        const { handleLogin } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                localStorage.setItem('user',JSON.stringify(values));
                handleLogin(values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form className={style.loginForm}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ fontSize: 13 }}  />}
                                placeholder="游客账号：visitor"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                                type="password" placeholder="游客密码：123456"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" onClick={this.handleSubmit} className={style.loginFormButton}>
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
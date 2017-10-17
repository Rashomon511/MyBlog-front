
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    static contextTypes = {
        router: PropTypes.object
    };
    register=()=>{
        this.context.router.push('/register')
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {handleSaveLoginInfo}=this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                handleSaveLoginInfo(values);
                this.context.router.push("/addTally");
            }
        });
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入您的用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入您的密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="密码" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <a href="" onClick={this.register}>没有账号！前去注册</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登陆
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
const Login = Form.create()(NormalLoginForm);
export default Login;
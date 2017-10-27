import React from 'react';
import PropTypes from 'prop-types';
import {Form, Icon, Input, Button} from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }

    static contextTypes = {
        router: PropTypes.object
    };



    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(222)
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {isDisabled} = this.state;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };



        return (
            <div className="account-wrap">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem {...formItemLayout}>
                        {getFieldDecorator('userName', {
                            rules: [{
                                required: true,
                            }],
                        })(
                            <Input placeholder="请输入用户名！"  prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                   style={{width: '100%'}} onChange={this.onChang}/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true,}],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                   placeholder="请输入密码！" style={{width: '100%'}} onChange={this.onChang}/>
                        )}
                    </FormItem>
                    <FormItem>
                        <div>
                            <Button type="primary" htmlType="submit" className="login-form-button"
                                    disabled={isDisabled}>
                                登录
                            </Button>
                        </div>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;
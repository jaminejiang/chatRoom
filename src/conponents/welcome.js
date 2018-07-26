import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './welcome.css';

const FormItem = Form.Item;

class Welcome extends Component{

    onClickWel(){
        let name = this.props.form.getFieldValue('userName');
        let pwd = this.props.form.getFieldValue('password');
        this.props.onClickWelcome(name, pwd, this.props.history);
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        return(
            <div className="wrapper">
            <Form className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}  
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(

                        <Checkbox>记住我</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <div>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.onClickWel.bind(this)}>
                            登录
                        </Button>
                        Or <a href="">马上注册!</a>
                    </div>
                    <div>{this.props.msg}</div>
                </FormItem>

            </Form>
            </div>
        )
    }
}

Welcome = Form.create({})(Welcome);

export default Welcome;
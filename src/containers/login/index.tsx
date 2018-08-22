import {Col,Row} from 'antd';
import * as React from 'react';

export default class Login extends React.PureComponent{
    public render(){
        return(
            <div>
                <Row>
                    <Col>
                        <Row type="flex">
                            <Col>
                                <p>账号密码登录</p>
                            </Col>
                            <Col><a>注册新用户</a></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
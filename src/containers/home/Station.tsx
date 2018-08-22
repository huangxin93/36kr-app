import {Col,Icon,Row} from 'antd'
import * as React from 'react';
import Title from './Title'

export default class Station extends React.PureComponent{
    public render(){
        return(
            <div className="kdzs-station">
                <Title title="36氪App" />
                <div>
                    <Row type="flex">
                        <Col span={8} className="t-center">
                            <Icon className="kdzs-station-icon" type="flag" />
                            <p className="clear-margin">最新最热</p>
                            <p className="clear-margin">最新最热</p>
                        </Col>
                        <Col span={8} className="t-center">
                            <Icon className="kdzs-station-icon" type="copy" />
                            <p className="clear-margin">最新最热</p>
                            <p className="clear-margin">最新最热</p>
                        </Col>
                        <Col span={8} className="t-center">
                            <Icon className="kdzs-station-icon" type="video-camera" />
                            <p className="clear-margin">最新最热</p>
                            <p className="clear-margin">最新最热</p>
                        </Col>
                        
                    </Row>
                </div>
                <div className="mt_40 t-center">
                    <img src="https://pic.36krcnd.com/201711/27085325/5oqfcsuefx3qcwdx.png" alt="36氪App" />
                </div>
            </div>
        )
    }
}
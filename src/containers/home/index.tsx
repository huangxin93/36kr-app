import {Col,Row} from 'antd';
import * as React from 'react';
import GYHeader from '../../components/Header';
import Article from './Article';
import Banner from './Banner';
import HotArticle from './HotArticle';
import HotFoucs from './HotFoucs';
import HotTag from './HotTag';
import './index.css';
import Intelligence from './Intelligence';
import Recommend from './Recommend';
import Speech from './Speech';
import Station from './Station';
class Home extends React.Component{
    public render(){
        return(
            <div>
                <GYHeader />
                <div className="pageWarp">
                    <Row type="flex" justify="space-between" align="top" >
                        <Col span={18} style={{padding:'10px 40px'}}>
                            <Row>
                                <Banner />
                            </Row>
                            <Row className="mt_20">
                                <Recommend />
                            </Row>
                            <Row className="mt_20">
                                <Article />
                            </Row>
                        </Col>
                        <Col span={6} style={{padding:'10px 0px'}}>
                            <Row><Intelligence /></Row>
                            <Row><HotArticle /></Row>
                            <Row className="mt_40"><Speech /></Row>
                            <Row className="mt_60"><Station /></Row>
                            <Row className="mt_60"><HotTag /></Row>
                            <Row className="mt_60"><HotFoucs /></Row>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}


export default Home;
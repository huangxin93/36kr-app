
import {Button,Col,Row} from 'antd';
import * as React from 'react';
import {Intelligence as News} from '../../components/News'
import Title from './Title';
export default class Intelligence extends React.PureComponent{
    public render(){
        const content = [
            {
                date:'4fenz',
                noline:true,
                title:'title',
                type:'itg'
               
            },{
                date:'4fenz',
                noline:true,
                title:'title',
                type:'itg'
               
            },{
                date:'4fenz',
                noline:true,
                title:'title',
                type:'itg'
               
            },{
                date:'4fenz',
                noline:true,
                title:'title',
                type:'itg'
               
            }
        ]
        return(
            <div className="home-intelligence">
                <Title title="7×24h 快讯" />
                {
                    content.map((item,index)=>{
                        return <News key={index} {...item} />
                    })
                }
                <Row>
                    <Col span={12} offset={6}><Button className="w_100">浏览更多</Button></Col>
                </Row>
            </div>
        )
    }
}
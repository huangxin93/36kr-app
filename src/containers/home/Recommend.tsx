import {Col,Row} from 'antd';
import * as React from 'react';
import {Recommend as News} from '../../components/News';
import IMG from '../../types/asset';
class Recommend extends React.PureComponent{
    public render(){
        const recommend = [
            {
                height:145,
                image:IMG.home_recommend,
                title:'title',
                width:'100%'
            },
            {
                height:145,
                image:IMG.home_recommend,
                title:'title',
                width:'100%'
            },
            {
                height:145,
                image:IMG.home_recommend,
                title:'title',
                width:'100%'
            }
        ]
        return(
            <div>
                <Row gutter={16}>
                    {
                        recommend.map((item,index)=>{
                            return <Col key={index} span={8}>
                                        <News {...item} />
                                    </Col>
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default Recommend

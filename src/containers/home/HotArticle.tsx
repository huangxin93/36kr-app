
import * as React from 'react';
import {HotArticle as Art} from '../../components/News'
import IMG from '../../types/asset';
import Title from './Title';

export default class HotArticle extends React.PureComponent{
    public render(){
        const news = [
            {
                height:180,
                hot:1,
                image:IMG.home_recommend,
                title:'title',
                type:'primary',
                width:'100%',

            },
            {
                height:180,
                hot:2,
                image:IMG.home_recommend,
                title:'title',
                type:'primary',
                width:'100%',
            },
            {
                date:'21111',
                height:180,
                hot:3,
                image:IMG.home_recommend,
                title:'title',
                width:'100%',
            },
            {
                date:'21111',
                height:180,
                hot:4,
                image:IMG.home_recommend,
                title:'title',
                width:'100%',
            },{
                date:'21111',
                height:180,
                hot:5,
                image:IMG.home_recommend,
                title:'title',
                width:'100%',
            },{
                date:'21111',
                height:180,
                hot:6,
                image:IMG.home_recommend,
                title:'title',
                width:'100%',
            },{
                date:'21111',
                height:180,
                hot:7,
                image:IMG.home_recommend,
                title:'title',
                width:'100%',
            },{
                date:'21111',
                height:180,
                hot:8,
                image:IMG.home_recommend,
                title:'title',
                width:'100%',
            },{
                date:'21111',
                height:180,
                hot:9,
                image:IMG.home_recommend,
                title:'title',
                width:'100%',
            }
        ]
        return(
            <div>
                <Title title="热门文章" />
                {
                    news.map((item,index)=>{
                    return <Art key={index} {...item} />
                    })
                }
            </div>
        )
    }
}
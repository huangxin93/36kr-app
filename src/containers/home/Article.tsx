import {Anchor,Button,Col,Row} from 'antd';
import * as React from 'react';
import {Article as Art,Monographic as Mon} from '../../components/News'
import IMG from '../../types/asset'
export default class Article extends React.PureComponent{
    public state = {
        seo_active:0
    }
    public render(){
        const news = [
            {
                
                content:'content',
                date:'111',
                description:'description',
                image:IMG.home_detail,
                mark:'大公司',
                name:'name',
                tags:[1,2],
                title:'title',
                type:'atc'
                
            },
            {
                
                content:'content',
                date:'111',
                description:'description',
                image:IMG.home_detail,
                mark:'大公司',
                name:'name',
                tags:[1,2],
                title:'title',
                type:'atc'
            },{
                
                content:'content',
                date:'111',
                description:'description',
                image:IMG.home_detail,
                mark:'大公司',
                name:'name',
                tags:[1,2],
                title:'title',
                type:'atc'
            },{
                
                content:'content',
                date:'111',
                description:'description',
                image:IMG.home_detail,
                mark:'大公司',
                name:'name',
                tags:[1,2],
                title:'title',
                type:'atc'
            },{
                
                content:'content',
                date:'111',
                description:'description',
                image:IMG.home_detail,
                mark:'大公司',
                name:'name',
                tags:[1,2],
                title:'title',
                type:'atc'
            },{
                
                content:'content',
                date:'111',
                description:'description',
                image:IMG.home_detail,
                mark:'大公司',
                name:'name',
                tags:[1,2],
                title:'title',
                type:'atc'
            },{
                
                content:'content',
                date:'111',
                description:'description',
                image:IMG.home_detail,
                mark:'大公司',
                name:'name',
                tags:[1,2],
                title:'title',
                type:'atc'
            },{
                
                content:'content',
                date:'111',
                description:'description',
                image:IMG.home_detail,
                mark:'科技',
                name:'name',
                tags:[1,2],
                title:'title',
                type:'atc'
            }
        ]
        const mon = {
            description:'一提起数据分析，总会联想到一些密密麻麻的数字表格，或是高级的数据建模手法，再或是华丽的数据报表，如何让数据“开口说话”成了关键。',
            image:IMG.home_detail,
            mark:'科技',
            noline:true,
            title:'面对密密麻麻的数字表格，如何才能分析到精髓？',
            type:'mgc'
            
        }
        const classes = ['最新文章','大公司','消费','娱乐','前沿技术','汽车交通','区块链','技能Get']
        return(
            <div className="kdzs-article-list">
                <Anchor affix={true}>
                   <ul className="kdzs-article-list-ul">
                   {
                       classes.map((item,index)=>{
                           return <li key={index} onClick={this.changeClasses.bind(this,index)} className={this.state.seo_active===index ? 'active' : ''}>{item}</li>
                       })
                   }
                   </ul>
                </Anchor>
                {
                    news.map((item,index)=>{
                        return  <Art key={index} {...item} />
                    })
                }
                {
                    <Mon {...mon} />
                }
                <Row className="mt_50">
                    <Col span={6} offset={9} className="t-center"><Button className="w_80" size={'large'}>了解更多</Button></Col>
                </Row>
            </div>
        )
    }
    private changeClasses = (index:number) => {
        this.setState({
            seo_active:index
        })
    }
}
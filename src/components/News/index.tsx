import {Col,Icon,Row} from 'antd';
import * as React from 'react';
import Mark from '../Mark';
import './index.css';
interface IProps{
    image?:string,
    height?:any,
    width?:any,
    url?:string,
    title?:string,
    titleHeight?:any,
    type?:string,
    description?:string,
    name?:string,
    date?:string,
    tags?:any,
    mark?:any,
    noline?:boolean,
    hot?:number

}
const newsType = {
    1:'人工智能',
    2:'医疗'
}


// banner新闻
const Recommend = (props:IProps) => {
    const goto = () => {
        if(props.url){
            window.open(props.url);
        }
    }
    const {title,titleHeight=47,url,width=240,height=145,image} = props;
    const newStyle = {
        'cursor':url ? 'pointer':'default',
        'height':height,
        'width':width
    }
    const titleStyle = {
        'height':titleHeight,
        'lineHeight':titleHeight+"px"
    }
    return(
        <div className="kdzs-news-recod-item" style={newStyle} onClick={goto}>
            <img className="kdzs-news-recod-image" src={image}  />
            {
                title && <div className="kdzs-news-recod-title" style={titleStyle}>{title}</div>
            }
        </div>
    )
}

// 文章
const Article = (props:IProps) => {
    const goto = () => {
        if(props.url){
            window.open(props.url);
        }
    }
    const {description,name,noline,date,title,image,tags=[],height} = props;
    const newStyle={
        'borderBottom': noline ? 'none' : "1px solid #e6e8eb",
        'height':height
    }
    const tagName:string[] = []
    tags.forEach((tag:string) => {
        tagName.push(newsType[tag]);
    });
    return(
        <Row className="kdzs-news-detail" style={newStyle} onClick={goto}>
            <Col span={10} className="kdzs-news-detail-image-container">
                {
                    props.mark && <Mark mark={props.mark} />
                }
                <img className="kdzs-news-detail-image" src={image} />
            </Col>
            <Col span={14} className="kdzs-news-detail-content ml_20">
                <Row type="flex" className="kdzs-flex-column">
                    <Col>
                        <h3 className="kdzs-news-detail-link kdzs-news-detail-title">{title}</h3>
                        <p>{description}</p>
                    </Col>
                    <Col>
                        <div className="kdzs-news-detail-actions">
                            <div className="inline-block">
                                <span className="kdzs-news-detail-link">{name}</span><span>·</span><span>{date}</span>
                            </div>
                            <div className="inline-block ml_40" >
                                <Icon type="tag-o" className="inline-block mr_5"/>
                                {
                                    tagName.map((item:string,index:any)=>{
                                        return <span className="inline-block" key={index} ><span className="kdzs-news-detail-link" >{item}</span><span>{index+1 === tagName.length ? "" : "，"}</span></span>
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
                
                
            </Col>
        </Row>
    )
}

// 主题
const Monographic = (props:IProps) =>{
    const goto = () => {
        if(props.url){
            window.open(props.url);
        }
    }
    const {description,noline,title,url,height=230,image} = props;
    const newStyle = {
        'borderBottom': noline ? 'none' : "1px solid #e6e8eb",
        'cursor':url ? 'pointer':'default',
        'height':height
    }

    return(
       <Row className="kdzs-news-monogrphic" style={newStyle} onClick={goto}>
           <Col span={24} className="kdzs-news-monogrphic-col">
                <img src={image} />
                <div className="kdzs-news-monogrphic-cover"> {""} </div>
                <div className="kdzs-news-monogrphic-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                {
                    props.mark && <Mark mark={props.mark} />
                }
           </Col>
           
       </Row>
    )
}

// intelligence 快讯
const Intelligence = (props:IProps) =>{
    const goto = () => {
        if(props.url){
            window.open(props.url);
        }
    }
    const {date,noline,title,url,height=60} = props;
    const newStyle = {
        'borderBottom': noline ? 'none' : "1px solid #e6e8eb",
        'cursor':url ? 'pointer':'default',
        'height':height
    }

    return(
       <Row className="kdzs-news-intelligence" style={newStyle} onClick={goto}>
           <Col span={2}>
                <Icon className="kdzs-news-intelligence-icon" type="caret-right" /> 
           </Col>
           <Col span={22} className="kdzs-news-intelligence">
                <Row><Col span={24}>{title}</Col></Row>
                <Row className="kdzs-news-intelligence-bottom" type="flex" justify="space-between">
                    <Col>{date}</Col>
                    <Col className="share-container">分享至 <Icon className="share-icon icon-wechat" type="wechat" /><Icon className="share-icon icon-weibo" type="weibo-square" /></Col>
                </Row>
           </Col>
       </Row>
    )
}

interface IHot{
    hot?:number
}
// 热度标签
const Hot = (props:IHot) => {
    const className = `kdzs-news-hot hot_${props.hot}`
    return(
        <div className={className}>
            <b>{props.hot}</b>
        </div>
    )
}
interface IThumb{
    hot?:number,
    image?:string,
    height?:any,
    width?:any
}
const Thumb = (props:IThumb) => {
    return(
        <div className="kdzs-news-thumb">
            <img src={props.image} />
            <span>{props.hot}</span>
        </div>
    )
}
// 热门文章
const HotArticle = (props:IProps) => {
    const {hot,type} = props;
    const primary = {
        height:props.height || 180,
        image:props.image,
        title:props.title,
        width:props.width || 290
    }
    const thumb = {
        height:props.height,
        hot:props.hot,
        image:props.image,
        width:props.width
    } 
    const module:boolean = type === 'primary'  
    return(
        <div>
            {
               module ? 
                <div className="kdzs-news-hotArticle">
                    <Hot hot={hot} />
                    <Recommend {...primary} />
                </div>
               :    
                <div className="kdzs-news-hotArticle">
                    <Row type="flex">
                        <Col className="kdzs-news-hotArticle-left"><Thumb {...thumb} /></Col>
                        <Col className="kdzs-news-hotArticle-right">
                            <Row type="flex" className="kdzs-news-hotArticle-content">
                            <Col>{props.title}</Col>
                            <Col>{props.date}</Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            }
        </div>
    )
}
// export default class News extends React.PureComponent<IProps,object>{
//     public goto = () => {
//         if(this.props.url){
//             window.open(this.props.url);
//         }
//     }
//     public render(){
//         let module:object = <div>a</div>;
//         switch(this.props.type){
//             case "atc":
//                 module = <Detail {...this.props} />
//                 break;
//             case 'mgc':
//                 module = <Monographic {...this.props} />
//                 break;
//             case 'itg':
//                 module = <Intelligence {...this.props} />
//                 break;
//             default:
//                 module = <Main {...this.props} />
//                 break;
//         }
//         return(
//             <div>
//                 {module}
//             </div>
//         )
//     }
// }

export {Article,HotArticle,Monographic,Intelligence,Recommend}



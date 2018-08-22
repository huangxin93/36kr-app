import * as React from 'react';
import Title from './Title';


interface ITag{
    tag:string
}
const Tag = (props:ITag) => {
    return(
        <div className="kdzs-hot-tag">
            {props.tag}
        </div>
    )
}

export default class HotTag extends React.PureComponent{
    public render(){
        const tags = ['网约车新政第一天','比特币','比特币','比特币']
        return(
            <div>
                <Title title="热门标签" />
                {
                    tags.map((item,index)=>{
                        return <Tag key={index} tag={item} />
                    })
                }
                <Tag tag="比特币" />
            </div>
        )
    }
}
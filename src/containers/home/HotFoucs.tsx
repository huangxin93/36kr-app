import * as React from 'react';
import Title from './Title';


interface IFoucs{
    foucs:string
}
const Foucs = (props:IFoucs) => {
    return(
        <a className="kdzs-hot-foucs-item">
            {props.foucs}
        </a>
    )
}

export default class HotTag extends React.PureComponent{
    public render(){
        const tags = ['网约车新政第一天','比特币','比特币','比特币']
        return(
            <div className="kdzs-hot-foucs">
                <Title title="热门聚焦" />
                {
                    tags.map((item,index)=>{
                        return <Foucs key={index} foucs={item} />
                    })
                }
            </div>
        )
    }
}
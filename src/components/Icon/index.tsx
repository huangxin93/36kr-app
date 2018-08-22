import {Icon} from 'antd';
import * as React from 'react';
import './index.css';


interface IProps{
    type:string,
    text?:string
}
class KDIcon extends React.Component<IProps,object>{
    public render(){
        return(
        <div className="kdzs_icon" style={{textAlign:'center'}}>
           <Icon type={this.props.type} style={{fontSize:16}} />
           <div style={{fontSize:12}}>{this.props.text}</div>
        </div>
        )
    }
}
export default KDIcon;
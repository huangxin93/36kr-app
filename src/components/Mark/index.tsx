import * as React from 'react';
import './index.css';
interface IProps{
    mark?:any
}

const Mark = (props:IProps) => {
    return(
        <span className="inline-block kdzs-mark">
            {props.mark}
        </span>
    )
}

export default Mark
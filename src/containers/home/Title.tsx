

import * as React from 'react';
interface IProps{
    title:string
}

const Title = (props:IProps) => {
    return(
        <div className="kdzs-module-title">
            <h3>{props.title}</h3>
        </div>
    )
}

export default Title;
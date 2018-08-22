import * as React from 'react';
import './index.css'
interface ISpeech{
    name:string,
    portrait:string,
    speech:string
}
const Celebrity = (props:ISpeech) => {
    const portraitStyle = {
        backgroundImage:`url(${props.portrait})`
    }
    return(
        <div className="kdzs-celebrity">
            <div className="kdzs-celebrity-portrait" style={portraitStyle}>{""}</div>
            <div className="kdzs-celebrity-name">{props.name}</div>
            <p className="kdzs-celebrity-speech">{props.speech}</p>
        </div>
    )
}

export default Celebrity
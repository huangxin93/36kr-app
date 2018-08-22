import * as React from 'react';

interface IDrawer{
    placement?:string,
    style?:any
}
const Drawer = (props:IDrawer) => (Inner:any)=> {
    // const warpStyle = {
    //     'left':0,
    //     'position':'absolute',
    //     'top':0,
        
    // }
    return(
        <div className="" style = {{'left':0,'position':'absolute','top':0}}>
            <Inner />
        </div>
    )
}


export default Drawer;
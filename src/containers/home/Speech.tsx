import * as React from 'react';
import Celebrity from '../../components/Celebrity'
import Title from './Title';
export default class Speech extends React.PureComponent{
    public render(){
        const content = [
            {
                name:'沈向洋',
                portrait:'https://pic.36krcnd.com/201807/30073139/32vugpzcyc53vha2.png!heading',
                speech:'人工智能未来有三大方向：第一，人工智能感知技术发展将继续突飞猛进；第二，人工智能一定会颠覆所有的垂直行业；第三，世界将变成巨大的计算机。'
                
            },
            {
                name:'沈向洋',
                portrait:'https://pic.36krcnd.com/201807/30073139/32vugpzcyc53vha2.png!heading',
                speech:'人工智能未来有三大方向：第一，人工智能感知技术发展将继续突飞猛进；第二，人工智能一定会颠覆所有的垂直行业；第三，世界将变成巨大的计算机。'
                
            },{
                name:'沈向洋',
                portrait:'https://pic.36krcnd.com/201807/30073139/32vugpzcyc53vha2.png!heading',
                speech:'人工智能未来有三大方向：第一，人工智能感知技术发展将继续突飞猛进；第二，人工智能一定会颠覆所有的垂直行业；第三，世界将变成巨大的计算机。'
                
            }
        ]
        return(
            <div>
                <Title title="今日言论" />
                {
                    content.map((item,index)=>{
                        return <div key={index} className="mt_60"><Celebrity  {...item} /></div>
                    })
                }
            </div>
        )
    }
}
import {Carousel,Icon} from 'antd';
import * as React from 'react';
import {Recommend as News} from '../../components/News';
import IMG from '../../types/asset'
import './index.css';
class Banner extends React.Component{
    public prev = () => {
        // Carousel.goTo();
    }
    public render(){
        const banner = [
            {
                height:'100%',
                image:IMG.home_banner1,
                title:'title',
                width:'100%'
            },
            {
                height:'100%',
                image:IMG.home_banner1,
                title:'title',
                width:'100%'
            }
        ]
        return(
            <div className="home-banner-container">
                <Icon type="left" className="home-carousel-prev" onClick={this.prev} />
                <Carousel className="home-carousel" effect="fade">
                    {
                        banner.map((item,index)=>{
                            return <News key={index} {...item} />
                        })
                    }
                </Carousel>
                <Icon type="right" className="home-carousel-next" />
            </div>
        )    
    }
}

export default Banner;
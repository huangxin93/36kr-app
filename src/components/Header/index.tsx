import {Button,Col,Menu,Row} from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Dispatch } from 'redux';
import * as actions from '../../actions'
import IMG from '../../types/asset';
import {IStoreState} from '../../types/index';
import KDIcon from '../Icon';
import './header.css';
interface IProps{
    name?:string
}
class GYHeader extends React.Component<IProps,object>{
    public state = {
        active:'one'
    }
    public render(){
        return(
            <div className="kdzs-header">
                <Row className="pageWarp" type="flex" justify="space-between" align="middle" style={{background:'#fff'}}>
                    <Col span={18}>
                        <Row type="flex" justify="start" align="middle">
                            <Col>
                                <img src={IMG.logo} style={{width:60}} />
                            </Col>
                            <Col>
                                <Menu
                                    selectedKeys={[this.state.active]}
                                    mode="horizontal"
                                >
                                <Menu.Item key={"one"}><Link to="/">首页{this.props.name}</Link></Menu.Item>
                                <Menu.Item key={"two"}>开氪</Menu.Item>
                                <Menu.Item key={"three"}>7×24h 快讯</Menu.Item>
                                <Menu.Item key={"four"}>创业者服务</Menu.Item>
                                <Menu.Item key={"five"}>投资者服务</Menu.Item>
                                <Menu.Item key={"six"}>联系我们</Menu.Item>
                                </Menu>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6}>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col span={8}><Button type="default">寻求报道</Button></Col>
                            <Col span={4}><KDIcon type={"search"} text={"搜索"} /></Col>
                            <Col span={4}><KDIcon type="mobile" text="客户端" /></Col>
                            <Col span={4}><KDIcon type="login" text="登录" /></Col>
                            <Col span={4}><KDIcon type="user-add" text="注册" /></Col>
                        </Row>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
    return {
      enthusiasmLevel,
      name: languageName,
    }
  }

  export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(GYHeader);
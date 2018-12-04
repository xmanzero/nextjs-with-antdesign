import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import {Row, Col, Icon, Menu, Button, Popover}  from 'antd';
const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';

import {enquireScreen} from 'enquire-js';
class Navigation extends Component {
    constructor(props){
        super(props);
        this.state= {
            menuVisible:false,
            menuMode:'horizontal'
        };
        this.onMenuVisibleChange = this.onMenuVisibleChange.bind(this);
        this.handleShowMenu = this.handleShowMenu.bind(this);
    }

    componentDidMount(){
        enquireScreen((b)=>{
            this.setState({
                menuMode:b?'inline':'horizontal'
            })
        });
    }

    onMenuVisibleChange(visible){
        this.setState({menuVisible:!!visible});
    }

    handleShowMenu(){
        this.setState({
            menuVisible:true
        })
    }
    render() {
        const {menuMode, menuVisible} = this.state;
        const menu =(
            <Menu mode={menuMode} id='nav' key='nav'>
                <Menu.Item key='home'>
                    <a>Home</a>
                </Menu.Item>
                <Menu.Item key="docs">
                    <a>Docs</a>
                </Menu.Item>
                <Menu.Item key='components'>
                    <a>Components</a>
                </Menu.Item>
                {
                    menuMode === 'inline' && (
                        <Menu.Item key="preview">
                            <a target="_blank" href="http://preview.pro.ant.design/" rel="noopener noreferrer">
                                Preview
                            </a>
                        </Menu.Item>
                    )
                }
            </Menu>
        )
        return (
            <TweenOne component='header' animation={{ opacity: 0, type: 'from' }} >
                <div id='header' className='header'>
                    { menuMode==='inline'?(
                        <Popover
                            overlayClassName='popover-menu'
                            placement='bottomRight'
                            content={menu}
                            trigger='click'
                            visible={menuVisible}
                            arrowPointAtCenter
                            onVisibleChange={this.onMenuVisibleChange}
                        >
                        <Icon
                            className='nav-phone-icon'
                            type='menu'
                            onClick={this.handleShowMenu}
                        />
                        </Popover>
                    ):null

                    }
                    <Row>
                        <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
                            <div id="logo" to="/">
                            <img src={LOGO_URL} alt="logo" />
                            <span>ANT DESIGN PRO</span>
                            </div>
                        </Col>
                        <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
                            <div className="header-meta">
                                
                                <div id="preview">
                                    <a
                                    id="preview-button"
                                    target="_blank"
                                    href="http://preview.pro.ant.design"
                                    rel="noopener noreferrer"
                                    >
                                        <Button icon="eye-o">
                                        Preview
                                        </Button>
                                    </a>
                                </div>
                                {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
                            </div>
                        </Col>
                    </Row>
                </div>
            </TweenOne>
        );
    }
}

export default Navigation;
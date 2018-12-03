import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import {Menu, Icon} from 'antd';


const {Item, SubMenu} = Menu;

class Navigation extends Component {

    render() {
        return (
            <TweenOne component='header' animation={{ opacity: 0, type: 'from' }} className='header1 home-page-wrapper' id="Nav1_0">
                <div className={`home-page ${this.props.isMobile?'open':''}`}>
                    <TweenOne
                        animation={{
                        x: -30,
                        delay: 100,
                        type: 'from',
                        ease: 'easeOutQuad',
                        }}
                        className='header1-logo'
                    >
                        <img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" alt="img" />
                    </TweenOne>
                   
                     <TweenOne
                         className='header1-menu'
                        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}                
                     >
                        <Menu
                        mode={this.props.isMobile ? 'inline' : 'horizontal'}
                        defaultSelectedKeys={['0']}
                        theme={this.props.isMobile ? 'dark' : 'default'}
                        >
                            <Item key='1'>
                                <a>Home</a>
                            </Item>
                            <Item key='2'>
                                <a>Home</a>
                            </Item>
                            <Item key='3'>
                                <a>Home</a>
                            </Item>
                        </Menu>
                    </TweenOne>
                </div>
            </TweenOne>
        );
    }
}

export default Navigation;
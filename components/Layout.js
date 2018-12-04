import React, { Component } from 'react';
import '../static/less/antMotionStyle.less';
import Navigation from './Navigation';
import dynamic from 'next/dynamic';
import Banner from './Banner';
import Footer from './Footer';
const NavigationNoSSR = dynamic(import('./Navigation'), {ssr:false});
const BannerNoSSR = dynamic(import('./Banner'), {ssr:false})
class Layout extends Component {
    
    render() {
        const conDetect = !!this.props.isMobile;
        return (
            <div>
                <div className='template-wrapper'>
                    <Navigation isMobile={conDetect}/>
                    <BannerNoSSR isMobile={conDetect}/>
                    <Footer/>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
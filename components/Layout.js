import React, { Component } from 'react';
import '../static/less/antMotionStyle.less';

import dynamic from 'next/dynamic';
const NavigationNoSSR = dynamic(import('./Navigation'), {ssr:false});
class Layout extends Component {
    
    render() {
        const conDetect = !!this.props.isMobile;
        return (
            <div>
                <div className='template-wrapper'>
                    <NavigationNoSSR isMobile={conDetect}/>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
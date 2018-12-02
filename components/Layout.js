import React, { Component } from 'react';
import '../static/less/antMotionStyle.less';
import {enquireScreen} from 'enquire-js';
import Navigation from './Navigation';
let isMobile;
enquireScreen((b)=>{
    isMobile = !!b;
})
class Layout extends Component {
    constructor(props){
        super(props);
        this.state={
            isMobile
        }
    }

    componentDidMount(){
        enquireScreen((b)=>{
            this.setState({isMobile:!!b});
        })
    }
    render() {
        return (
            <div>
                <div className='template-wrapper'>
                    <Navigation isMobile={this.state.isMobile}/>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
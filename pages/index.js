import React, { Component } from 'react';
import Link from 'next/link'
import Head from '../components/Head';
import '../static/less/antMotionStyle.less';
import Layout from '../components/Layout';
import {enquireScreen} from 'enquire-js';

import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

let isMobile;
enquireScreen((b)=>{
    isMobile = !!b;
})


class Home extends Component {
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
      <div className='templates-wrapper'>
        <Head title='Home'></Head>
        <Layout isMobile={this.state.isMobile}>
           {/* <Demo/> */}
        </Layout>
      </div>
    );
  }
}


export default Home

import React from 'react';
import Router from 'next/router';
import { Button } from 'antd';
import { connect } from 'react-redux';
import styles from './style.scss';

class A extends React.Component<any, any> {
  backToMain = () => {
    Router.push('/main');
  }

  render() {
    return (
      <div className={styles.pageA}>
        <p>pageA</p>
        <Button onClick={this.backToMain}>回到首页</Button>
      </div>
    );
  }
}

export default connect(state => state)(A);

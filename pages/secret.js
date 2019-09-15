import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage'

import withAuth from '../components/hoc/withAuth';

// import { getSecretData, getSecretDataServer } from '../actions';

class Secret extends React.Component {

  static async getInitialProps({req}) {
    const superSecretValue =  await 'superSecretValue';

    return { superSecretValue };
  }

 
  render() {
    const { superSecretValue } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> I am Secret Page </h1>
          <p> Secret Content Here </p>
          <h2> {superSecretValue} </h2>
          
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth(Secret);
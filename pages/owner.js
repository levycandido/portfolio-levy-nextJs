import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/BasePage'
import withAuth from '../components/hoc/withAuth';

class Owner extends React.Component {
  render() {
    return (
      <BaseLayout>
      <BasePage {...this.props.auth}>
        <h1>I am Onwer Page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

const withSpecificAuth = withAuth('siteOwner')
export default withSpecificAuth(Owner);

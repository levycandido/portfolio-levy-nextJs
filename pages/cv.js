import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/BasePage'

class cv extends React.Component {
  render() {
    return (
      <BaseLayout>
      <BasePage {...this.props.auth}>
        <h1>I am CV Page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default cv;

import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'
import BasePage from '../components/shared/BasePage'

class Portfolio extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage className="about-page">
          <h1>I am About Blog</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withRouter(Portfolio);
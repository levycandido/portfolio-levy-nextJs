import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/basePage'


class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page" title="Developing...">
     
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;

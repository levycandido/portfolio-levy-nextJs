import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout'
import { withRouter } from 'next/router'
import axios from 'axios';
import BasePage from '../../components/shared/BasePage'


class Portfolios extends React.Component {

  static async getInitialProps(contex) {
    let post = {};
    const postId = contex.query.id;

    let userData = {};
    try {

      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      post = response.data;
    } catch (err) {
      console.error(err);
    }

    return { post };
  }


  render() {

    const { post } = this.props
    return (
      <BaseLayout {...this.props.auth}> 
        <BasePage>
          <h1>{post.title}</h1>
          <h2>{post.body}</h2>
          <p>{post.id}</p>
        </BasePage>
      </BaseLayout>

    )
  }
}

export default withRouter(Portfolios);

import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/BasePage'
import axios from 'axios';
import Link from 'next/link';
class Blogs extends React.Component {

  static async getInitialProps() {
    let posts = [];

    let userData = {};
    try {

      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    } catch (err) {
      console.error(err)
    }

    return { posts: posts.slice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map((post, index) => {
      return (
        <li key={index}>
          <Link as={`/portfolio/${post.id}`} href="/portfolio/[id]">
            <a >{post.title}</a>
          </Link>
        </li>
      )
    })
  }

  render() {

    const { posts } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
      <BasePage>
        <h1>I am About Page</h1>
        <ul>{this.renderPosts(posts)}</ul>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Blogs;

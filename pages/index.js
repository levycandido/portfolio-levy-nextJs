import React from 'react';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';

import axios from 'axios';


class Index extends SuperComponent  {

  static async getInitialProps() {
    console.error("GetInicialProps");
    let userData = {};
  try {

    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    userData = response.data;
    console.log(userData);
  } catch (err){
    console.error(err)
  }

    return{ initialData: [1,2,3], userData};
  }
  constructor(props) {
    super(props);
    this.state = { title: 'I am Index Page'}
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const {title} = this.state;
    const {userData, initialData} = this.props;
    return (
      <BaseLayout>
        <h1>I am Index Page from Class Component</h1>
        <h2>{userData.title}</h2>

      </BaseLayout>
    )
  }
}

export default Index;

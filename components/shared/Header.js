import React from 'react';
import Link from 'next/link';
import '../../styles/main.scss';
import {Link as NextLink} from '../../routes'

class Header extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <React.Fragment>
        <p>{title}</p>
        {this.props.children}
        <p className="azul">teste azul</p>
        <Link href="/">
          <a >Home</a>
        </Link>
        <Link href="/about">
          <a >about</a>
        </Link>
        <Link href="/portfolios">
          <a >Portfolios</a>
      </Link>
        <Link href="/blogs">
          <a >Blogs</a>
        </Link>
        <Link href="/cv">
          <a >CV</a>
         
        </Link>
        <NextLink route='/test/2'> teste 2</NextLink>
          <NextLink route='/test/5'> teste 5</NextLink>
        </React.Fragment>
    )
  }
}

export default Header;

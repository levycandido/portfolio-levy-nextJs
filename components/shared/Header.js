import React from 'react';

import Link from 'next/link';

import {Link as NextLink} from '../../routes'

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/">
          <a sytle={{'fontSize':'20px'}} >Home</a>
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
 
        </React.Fragment>
    )
  }
}

export default Header;

// import React from 'react';

// import Link from 'next/link';

// import {Link as NextLink} from '../../routes'

// class Header extends React.Component {
//   render() {
//     return (
//       <React.Fragment>

//         <Link href="/about">
//           <a >about</a>
//         </Link>
//         <Link href="/portfolios">
//           <a >Portfolios</a>
//       </Link>
//         <Link href="/blogs">
//           <a >Blogs</a>
//         </Link>
//         <Link href="/cv">
//           <a >CV</a>

//         </Link>

//         </React.Fragment>
//     )
//   }
// }

// export default Header;

import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  
} from 'reactstrap';

const BsNavLink = (props) => {
  const { route, title } = props;

  return (
    <Link href={route}>
      <a className="nav-link"> {title} </a>
    </Link>
  )
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="transparent" light expand="md">
          <NavbarBrand href="/">Levy Candido</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                 <BsNavLink  route="/" title="Home" />
              </NavItem>
              <NavItem>
                 <BsNavLink  route="/about" title="About" />
              </NavItem>
              <NavItem>
                 <BsNavLink  route="/portfolios" title="Portfolios" />
              </NavItem>
              <NavItem>
                 <BsNavLink  route="/blog" title="Blog" />
              </NavItem>
              <NavItem>
                 <BsNavLink  route="/cv" title="Cv" />
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
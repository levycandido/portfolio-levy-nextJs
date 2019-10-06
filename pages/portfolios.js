import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/basePage'
import { Row, Col, Button } from 'reactstrap';
import { getPortfolios, deletePortfolio } from '../actions';
import { Router } from '../routes'
import PortfolioCards from '../components/portfolios/PortfolioCards'
class Blogs extends React.Component {

  static async getInitialProps() {
    let portfolios = [];

    try {
      portfolios = await getPortfolios();
    } catch (err) {
      console.error(err);
    }

    return { portfolios };

  }
  navigateToEdit(portfolioId, e) {
    e.stopPropagation();
    Router.pushRoute(`/portfolio/${portfolioId}/edit`)
  }

  displayDeleteWarning(portfolioId, e) {
    e.stopPropagation();
    const isConfirm = confirm('Are you sure you want to delete this portfolio???');

    if (isConfirm) {
      this.deletePortfolio(portfolioId);
    }
  }

  deletePortfolio(portfolioId) {
    deletePortfolio(portfolioId)
      .then(() => {
        Router.pushRoute('/portfolios');
      })
      .catch(err => console.error(err));
  }
  renderPortfolios(portfolios) {
    const { isAuthenticated, isSiteOwner } = this.props.auth;

    return portfolios.map((portfolio, index) => {
      return (
        <Col key={index} md="4">
          <PortfolioCards portfolio={portfolio}>
          { isAuthenticated && isSiteOwner && 
                    <React.Fragment>
                      <Button onClick={(e) => this.navigateToEdit(portfolio._id, e)} color="warning">Edit</Button>{' '}
                      <Button onClick={(e) => this.displayDeleteWarning(portfolio._id, e)} color="danger">Delete</Button>
                    </React.Fragment>
                  }
          </PortfolioCards>
        
        </Col>
      )
    })
  }

  render() {

    const { portfolios } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-page" title="Portfolios">
          <Button
            color="success"
            className="create-port-btn"
            onClick={() => Router.pushRoute('/p')}>Create Portfolio</Button>
          <Row>{this.renderPortfolios(portfolios)}</Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Blogs;

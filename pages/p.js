import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/basePage'
import withAuth from '../components/hoc/withAuth';

import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import { Row, Col } from 'reactstrap';
import { createPortfolio } from '../actions'
import { Router } from '../routes'

const INITIAL_VALUES = {
    title: '',
    company: '',
    location: '',
    position: '',
    description: '', // Text Area
    startDate: '', // Date
    endDate: '' // Date
}


class p extends React.Component {

    constructor(props) {
        super();

        this.state = {
            error: undefined
        }

        this.savePortfolio = this.savePortfolio.bind(this);
    }

    savePortfolio(portfolioData, { setSubmitting }) {
        setSubmitting(true)
        createPortfolio(portfolioData)
            .then((portfolio) => {
                debugger;
                setSubmitting(false)

                this.setState({ error: undefined });
                Router.pushRoute('/portfolios');
            })
            .catch((err) => {
                setSubmitting(true)
                this.setState({ error: err.message });
            })
    }

    render() {
        const { error } = this.state;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-create-page" title="Create new Portfolio">
                    <Row>
                        <Col md="6">
                            <PortfolioCreateForm initialValue={INITIAL_VALUES} 
                                                 error={error} 
                                                 onSubmit={this.savePortfolio} />
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(p);

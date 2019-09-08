import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import { Button, Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';



class Index extends SuperComponent {

  constructor(props) {
    super(props);
    this.roles = ['Desenvolverdor', 'FullStack', 'Java', 'Angular', 'React'];
  }

  render() {

    return (
      <BaseLayout>
        <BaseLayout className="cover">
          <div className="main-section">
            <div className="background-image">
              <img src="/static/images/background-index.png" />
            </div>

            <Container>
              <Row>
                <Col md="6">
                  <div className="hero-section">
                    <div className={`flipper`}>
                      <div className="back">
                        <div className="hero-section-content">
                          <h2> Desenvolvedor Java Full Stack</h2>
                          <div className="hero-section-content-intro">
                            Veja meu portfolio e conheça um pouco da minha carreira.
                  </div>
                        </div>
                        <img className="image" src="/static/images/section-1.png" />
                        <div className="shadow-custom">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" className="hero-welcome-wrapper">
                  <div className="hero-welcome-text">
                    <h1>
                      Bem vindo Portfolio de Levy Candido.<br />
                      Informe-se e descubra alguns projetos que desenvolvi em minha carreira!
            </h1>
                  </div>

                  <Typed

                    loop
                    typeSpeed={50}
                    backSpeed={50}
                    strings={this.roles}
                    backDelay={100}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                    className="self-typed"
                  />

                  <div className="hero-welcome-bio">
                    <h1>
                      Veja os meus trabalhos
            </h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </BaseLayout>
      </BaseLayout>
    )
  }
}

export default Index;

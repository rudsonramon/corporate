import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader className="mb-5">
                  <h1 className="card-category">Consultoria estratégica</h1>
                  <CardTitle tag="h3">
                    Data Strategy: Consultoria, análise e transformação de dados operacionais.
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/coFounder.jpg")}
                      />
                      <h5 className="title">Rudson R.</h5>
                    </a>
                    <p className="description">CEO/Founder</p>
                  </div>
                  <div className="card-description">
                    Mais de 10 anos de experiência em TI, Gestão de projetos, automação de processos, desenvolvimento de software, automação de testes, migração de dados, etc.
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <a href="http://www.linkedin.com/in/rudson-rodrigues-32986915">
                      <Button className="btn-icon btn-round" color="linkedin">
                        <i className="fab fa-linkedin" />
                      </Button>
                    </a>
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/coFounder2.jpg")}
                      />
                      <h5 className="title">Robson Lima</h5>
                    </a>
                    <p className="description">CFO/Co-Founder</p>
                  </div>
                  <div className="card-description">
                    Possui experiencia internacional, com projetos desenvolvidos para os segmentos: Educação, Prestação de Serviços, Setor Financeiro, Logística, Alimentação e outras.
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <a href="http://www.linkedin.com/in/robsonlima">
                      <Button className="btn-icon btn-round" color="linkedin">
                        <i className="fab fa-linkedin"/>
                      </Button>
                    </a>
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/founder.jpg")}
                      />
                      <h5 className="title">Henrique</h5>
                    </a>
                    <p className="description">CTO/Founder</p>
                  </div>
                  <div className="card-description">
                    Experiência em Migração de dados, ETL, desenvolvimento de rotinas automatizados para processamento batch e streaming em Scala/Spark e processos de base de dados.
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="linkedin">
                      <i className="fab fa-linkedin" />
                    </Button>
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;

import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Clients extends React.Component {
  render(){
  return(
  <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Cadastro de clientes</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Empresa</label>
                          <Input
                            placeholder="Nome da empresa"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Responsável</label>
                          <Input
                            placeholder="Dono da conta"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            E-mail
                          </label>
                          <Input placeholder="E-mail do cliente" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Nome da pessoa de contato</label>
                          <Input
                            placeholder="Informe o nome da pessoa de contato"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Sobrenome</label>
                          <Input
                            placeholder="Informe o sobrenome do contato"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Endereço</label>
                          <Input
                            placeholder="Informe o endereço da matriz do cliente"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>País</label>
                          <Input
                            placeholder="Informe o País"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Cidade</label>
                          <Input
                            placeholder="Cidade da matriz"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>C.E.P</label>
                          <Input placeholder="C.E.P." type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>Observações</label>
                          <Input
                            cols="80"
                            placeholder="Informações adicionais sobre o cliente"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Gravar
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            </Row>
        </div>
      </>
    )
  }
  
};
export default Clients;
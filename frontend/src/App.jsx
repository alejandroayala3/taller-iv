import { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, CardText, Row, Col, Container } from 'reactstrap'
import './App.css'

function App() {
  const [health, setHealth] = useState('')
  const [info, setInfo] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data.mensaje))
    fetch('http://localhost:3000/api/info')
      .then((res) => res.json())
      .then((data) => setInfo(data))
  }, [])

  return (
    <Container>
      <h1 className="titulo">Taller IV</h1>

      <section className="seccion-health">
        <div>
          <h4>Estado del API</h4>
          <p>{health}</p>
        </div>
      </section>

      <h4>Integrantes</h4>
      <Row>
        {info &&
          info.integrantes.map((i, index) => (
            <Col md="6" key={index}>
              <Card className="mb-3">
                <CardBody>
                  <CardTitle tag="h5">{i.nombre}</CardTitle>
                  <CardText>Edad: {i.edad}</CardText>
                  <CardText>Carrera: {i.carrera}</CardText>
                  <CardText>Materias aprobadas: {i.materiasAprobadas}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default App
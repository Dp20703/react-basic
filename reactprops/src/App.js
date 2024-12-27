// import logo from './logo.svg';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CompanyTable, { MovieCard } from './Task';
function App() {
  return (
    <>
      {/* <Details pagename='home' />
      <Details pagename='about' />
      <Details pagename='services' />
      <MultiData />
      <TableData /> */}
      <CompanyTable />
      <MovieCard />
    </>
  );
}
function Details(props) {
  return (
    <>
      <h1 className='bg-secondary'>welcome to {props.pagename}</h1>
    </>
  );
}
function MultiData() {
  return (
    <>
      <Container>
        <Row>
          <Subdata title="title no1" body="body 1" footer="footer 1" color="bg-dark text-light" />
          <Subdata title="title no2" body="body 2" footer="footer 2" color="bg-success text-light" />
          <Subdata title="title no3" body="body 3" footer="footer 3" color="bg-secondary text-light" />
          <Subdata title="title no4" body="body 4" footer="footer 4" color="bg-warning text-light" />
        </Row>
      </Container>
    </>
  );
}
function Subdata(props) {
  return (
    <>
      <Col>
        <Card className={props.color}>
          <Card.Header>Card {props.title}</Card.Header>
          <Card.Body>Card {props.body}</Card.Body>
          <Card.Footer>Card {props.footer}</Card.Footer>
        </Card>
      </Col>
    </>
  );
}
function TableData() {
  return (
    <>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Sr no</th>
              <th>Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            <RowData no='1' name='suresh' department='IT' />
            <RowData no='2' name='Mahesh' department='ECO' />
            <RowData no='3' name='Jayesh' department='COMMERCE' />
          </tbody>
        </Table>
      </Container>
    </>
  )
}
function RowData(props) {
  return (
    <>
      <tr>
        <td>{props.no}</td>
        <td>{props.name}</td>
        <td>{props.department}</td>
      </tr>
    </>
  )
}
export default App;

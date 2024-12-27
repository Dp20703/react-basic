import { Badge, Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Col, Container, Row, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function CompanyTable() {
    return (
        <>
            <Container className="my-5">
                <Table striped bordered className="table-dark">
                    <thead>
                        <tr>
                            <th>Sr no</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Position</th>
                            <th>Company</th>
                            <th>Dp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableData no='1' fisrtname='Steve' lastname='Jobs' position='Founder' company='Apple Inc.' dp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiMjHAVVQo6BRB5QEqZLhAus79xn9XCLvzw&s' />
                        <TableData no='2' fisrtname='Elone' lastname='Musk' position='CEO' company='Tesla Inc.' dp='https://d.newsweek.com/en/full/2551118/elon-musk.jpg?w=1200&f=ba65cbad7f19ef1471c855399c0400b9' />
                        <TableData no='3' fisrtname='Satya' lastname='Nadella' position='CEO' company='Microsoft Corporation' dp='https://imageio.forbes.com/specials-images/imageserve/5d6ae14f673aa300083caf99/0x0.jpg?format=jpg&crop=2923,2926,x3051,y26,safe&height=416&width=416&fit=bounds' />
                        <TableData no='4' fisrtname='Sheryl' lastname='Sandberg' position='COO' company='Meta Platform Inc.(formerly Facebook)' dp='https://analyticsindiamag.com/wp-content/uploads/2024/08/meta-coo-scaled.jpeg' />
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
function TableData(props) {
    return (
        <>
            <tr>
                <td>{props.no}</td>
                <td>{props.fisrtname}</td>
                <td>{props.lastname}</td>
                <td>{props.position}</td>
                <td>{props.company}</td>
                <td><img src={props.dp} alt="no-img" className="border-2 rounded-circle" style={{ objectFit: 'cover' }} height={100} width={100} /></td>
            </tr>
        </>
    )
}
function MovieCard() {
    return (
        <>
            <Container>
                <Row className="my-4">
                    <MovieCardData MovieStatus="Now Showing" badgeColor='bg-primary' img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/khel-khel-mein-et00399518-1722516491.jpg" movienName='Khel Khel Main' movieDesc='The hilarious revelation of the shocking fact that your friends and spouses, are nothing more than masked strangers, dwelling behind a phony pile of lies... sometimes just needs one game! That game is now on!' actoreName='Akshay Kumar' actressName='Vani Kapoor' movieCategory='Comedy,Dhrama' />

                    <MovieCardData MovieStatus="Now Showing" badgeColor='bg-primary' img="https://upload.wikimedia.org/wikipedia/en/a/a1/Stree_2.jpg" movienName='Stree 2' movieDesc='After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it`s up to Bicky and his friends to save their town and loved ones.' actoreName='Rajkumar Rao' actressName='Shradha Kapoor' movieCategory='Comedy,Horror' />

                    <MovieCardData MovieStatus="Upcoming" badgeColor='bg-success' img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrhdtS4YVcR_2ti_ZfsCmlPahkCiJ40hu5COvdOrjPPDXinoVH" movienName='It Ends with Us' movieDesc='Adapted from the Colleen Hoover novel, Lily overcomes a traumatic childhood to embark on a new life. A chance meeting with a neurosurgeon sparks a connection but Lily begins to see sides of him that remind her of her parents relationship.' actoreName='Jenny Slate' actressName='Blake lively' movieCategory='Drama,Romantic' />
                </Row >

                <Row className="my-4">
                    <MovieCardData MovieStatus="Upcoming" badgeColor='bg-success' img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrhdtS4YVcR_2ti_ZfsCmlPahkCiJ40hu5COvdOrjPPDXinoVH" movienName='It Ends with Us' movieDesc='Adapted from the Colleen Hoover novel, Lily overcomes a traumatic childhood to embark on a new life. A chance meeting with a neurosurgeon sparks a connection but Lily begins to see sides of him that remind her of her parents relationship.' actoreName='Jenny Slate' actressName='Blake lively' movieCategory='Drama,Romantic' />

                    <MovieCardData MovieStatus="" badgeColor='bg-primary' img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/khel-khel-mein-et00399518-1722516491.jpg" movienName='Khel Khel Main' movieDesc='The hilarious revelation of the shocking fact that your friends and spouses, are nothing more than masked strangers, dwelling behind a phony pile of lies... sometimes just needs one game! That game is now on!' actoreName='Akshay Kumar' actressName='Vani Kapoor' movieCategory='Comedy,Dhrama' />

                    <MovieCardData MovieStatus="" badgeColor='bg-success' img="https://upload.wikimedia.org/wikipedia/en/a/a1/Stree_2.jpg" movienName='Stree 2' movieDesc='After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it`s up to Bicky and his friends to save their town and loved ones.' actoreName='Rajkumar Rao' actressName='Shradha Kapoor' movieCategory='Comedy,Horror' />
                </Row>

                <Row className="my-4">
                    <MovieCardData MovieStatus="" badgeColor='bg-success' img="https://upload.wikimedia.org/wikipedia/en/a/a1/Stree_2.jpg" movienName='Stree 2' movieDesc='After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it`s up to Bicky and his friends to save their town and loved ones.' actoreName='Rajkumar Rao' actressName='Shradha Kapoor' movieCategory='Comedy,Horror' />

                    <MovieCardData MovieStatus="Upcoming" badgeColor='bg-success' img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrhdtS4YVcR_2ti_ZfsCmlPahkCiJ40hu5COvdOrjPPDXinoVH" movienName='It Ends with Us' movieDesc='Adapted from the Colleen Hoover novel, Lily overcomes a traumatic childhood to embark on a new life. A chance meeting with a neurosurgeon sparks a connection but Lily begins to see sides of him that remind her of her parents relationship.' actoreName='Jenny Slate' actressName='Blake lively' movieCategory='Drama,Romantic' />

                    <MovieCardData MovieStatus="" badgeColor='bg-primary' img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/khel-khel-mein-et00399518-1722516491.jpg" movienName='Khel Khel Main' movieDesc='The hilarious revelation of the shocking fact that your friends and spouses, are nothing more than masked strangers, dwelling behind a phony pile of lies... sometimes just needs one game! That game is now on!' actoreName='Akshay Kumar' actressName='Vani Kapoor' movieCategory='Comedy,Dhrama' />
                </Row>
            </Container>
        </>
    )
}
function MovieCardData(props) {
    return (
        <Col>
            <Card className="h-100 w-75">
                <CardHeader><Badge className={props.badgeColor}>{props.MovieStatus}</Badge></CardHeader>
                <CardImg src={props.img} className='img-thumbnail' ></CardImg>
                <CardBody>
                    <CardTitle>{props.movienName}</CardTitle>
                    <CardText>{props.movieDesc}</CardText><hr />
                    <CardText>{props.actressName}</CardText><hr />
                    <CardText>{props.actoreName}</CardText>
                </CardBody>
                <CardFooter className="fw-lighter fs-6 fst-italic">{props.movieCategory}</CardFooter>
            </Card>
        </Col>
    )
}

export default CompanyTable;
export { MovieCard }
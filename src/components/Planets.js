import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router'
import planet1 from '../assets/planets/planet-1.svg'
import planet2 from '../assets/planets/planet-2.svg'
import planet3 from '../assets/planets/planet-3.svg'
import planet4 from '../assets/planets/planet-4.svg'
import planet5 from '../assets/planets/planet-5.svg'
import planet6 from '../assets/planets/planet-6.svg'
import planet7 from '../assets/planets/planet-7.svg'
import planet8 from '../assets/planets/planet-8.svg'
import planet9 from '../assets/planets/planet-9.svg'
import Navigationbar from './Navigationbar'
import { Link } from 'react-router-dom'

const Planets = () => {
    const[planets, setPlanets] = useState([
        {title: 'Planet Alpha', image: planet1, body: 'Pop:235', id: 1},
        {title: 'Planet Alpha', image: planet2, body: 'Pop:235', id: 2},
        {title: 'Planet Alpha', image: planet3, body: 'Pop:235', id: 3},
        {title: 'Planet Alpha', image: planet4, body: 'Pop:235', id: 4},
        {title: 'Planet Alpha', image: planet5, body: 'Pop:235', id: 5},
        {title: 'Planet Alpha', image: planet6, body: 'Pop:235', id: 6},
        {title: 'Planet Alpha', image: planet7, body: 'Pop:235', id: 7},
        {title: 'Planet Alpha', image: planet8, body: 'Pop:235', id: 8},
        {title: 'Planet Alpha', image: planet9, body: 'Pop:235', id: 9},
        {title: 'Planet Alpha', image: planet2, body: 'Pop:235', id: 10},
        {title: 'Planet Alpha', image: planet5, body: 'Pop:235', id: 11},
        {title: 'Planet Alpha', image: planet3, body: 'Pop:235', id: 12}
    ]);
    const history = useHistory();
    const handlePush = () => {
        history.push('/planetsides')
    }

    return (
        <div className="planets bg-light">
            <Container>
                <div className="pt-2">
                    <Link to="/home" className="link"><h1 className="text-blue font-900">Spacious</h1></Link>
                </div>
                <Navigationbar />
                <Row>
                    {planets.map(planet => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={planet.id} onClick={handlePush}>
                            <Col>
                                <div className="contain bg-white round">
                                    <div className="planet-image px-4 py-0 text-center">
                                        <img src={planet.image} alt="" />
                                    </div>
                                    <div className="planet-text px-4 py-0">
                                        <p className="text-blue font-600 text-alpha">{planet.title}</p>
                                        <p className="text-pop">{planet.body}</p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Planets

import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import planet1 from '../assets/planets/planet-1.svg'
import planet2 from '../assets/planets/planet-2.svg'
import planet3 from '../assets/planets/planet-3.svg'
import planet4 from '../assets/planets/planet-4.svg'
import planet5 from '../assets/planets/planet-5.svg'
import planet6 from '../assets/planets/planet-6.svg'
import planet7 from '../assets/planets/planet-7.svg'
import planet8 from '../assets/planets/planet-8.svg'
import planet9 from '../assets/planets/planet-9.svg'
import character11 from '../assets/characters/character-11.png'
import character12 from '../assets/characters/character-12.png'
import character13 from '../assets/characters/character-13.png'
import character14 from '../assets/characters/character-14.png'
import character15 from '../assets/characters/character-15.png'
import character16 from '../assets/characters/character-16.png'
import Navigationbar from './Navigationbar'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import Navig from './Navigbar'

const Planetsides = () => {
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
    const handleCan = () => {
        history.go(-1)
    }
    const handleAdd = () => {
        history.push('/charform')
    }

    return (
        <div>
            <div className="planets bg-light">
                <Container>
                    <Row>
                        <div className="col-12 col-md-8 col-lg-8">
                            <div className="pt-2">
                                <Link to="/home" className="link"><h1 className="text-blue font-900">Spacious</h1></Link>
                            </div>
                            <Navig />
                            <Row>
                                {planets.map(planet => (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={planet.id}>
                                        <Col>
                                            <div className="contain bg-white round">
                                                <div className="planet-image px-4 py-0 text-center">
                                                    <img src={planet.image} alt="" className="img-fluid" />
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
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 bg-white roundded shadow mt-2">
                            <div className="d-flex justify-content-end my-3">
                                <div className="text-blue bg-grey cancel p-1 fw-bold" onClick={handleCan}>X</div>
                            </div> 
                            <div className="pt-2">
                                <h1 className="text-blue font-800">Planet Alpha</h1>
                            </div>
                                <div className="mt-4">
                                    <span className="text-pop" style={{fontSize: "16px"}}>Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.</span> <br />
                                    <span className="text-blue" style={{fontSize: "16px", fontWeight: "400"}}>Population</span> <br />
                                    <span className="text-blue" style={{fontSize: "16px", fontWeight: "600"}}>234</span>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <div>
                                        <p className="text-pop " style={{fontSize: "16px", fontWeight: "600"}}>CHARACTERS</p>
                                    </div>
                                    <div className="">
                                        <div className="text-blue bg-grey p-1 mmg cancel fw-bold" onClick={handleAdd}>+</div>
                                    </div> 
                                </div>
                                <div className="char-list">
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character11} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Darlene Robertson</span> <br />
                                            <span className="text-pop font-600">23 friends</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character12} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Darlene Robertson</span> <br />
                                            <span className="text-pop font-600">23 friends</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character13} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Darlene Robertson</span> <br />
                                            <span className="text-pop font-600">23 friends</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character14} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Darlene Robertson</span> <br />
                                            <span className="text-pop font-600">23 friends</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character15} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Darlene Robertson</span> <br />
                                            <span className="text-pop font-600">23 friends</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character16} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Darlene Robertson</span> <br />
                                            <span className="text-pop font-600">23 friends</span>
                                        </div>
                                    </Row>
                                </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Planetsides

import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import character1 from '../assets/characters/character-1.png'
import character2 from '../assets/characters/character-2.png'
import character3 from '../assets/characters/character-3.png'
import character4 from '../assets/characters/character-4.png'
import character5 from '../assets/characters/character-5.png'
import character6 from '../assets/characters/character-6.png'
import character7 from '../assets/characters/character-7.png'
import character8 from '../assets/characters/character-8.png'
import character9 from '../assets/characters/character-9.png'
import character10 from '../assets/characters/character-10.png'
import character11 from '../assets/characters/character-11.png'
import character12 from '../assets/characters/character-12.png'
import character13 from '../assets/characters/character-13.png'
import Navigationbar from './Navigationbar'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import Navig from './Navigbar'

const Charactersides = ({person, handleCan}) => {

    const[characters, setCharacters] = useState([
        {name: 'Brooklyn Simmons', friends: '23 Friends', image: character1, id: 1, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Cameron Williamson', friends: '23 Friends', image: character2, id: 2, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Leslie Alexander', friends: '23 Friends', image: character3, id: 3, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Kristin Watson', friends: '23 Friends', image: character4, id: 4, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Jenny Wilson', friends: '23 Friends', image: character5, id: 5, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Marvin McKinney', friends: '23 Friends', image: character6, id: 6, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Jerome Bell', friends: '23 Friends', image: character7, id: 7, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Guy Hawkins', friends: '23 Friends', image: character8, id: 8, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Guy Hawkins', friends: '23 Friends', image: character9, id: 9, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Brooklyn Simmons', friends: '23 Friends', image: character2, id: 10, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Cameron Williamson', friends: '23 Friends', image: character3, id: 11, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Leslie Alexander', friends: '23 Friends', image: character4, id: 12, description: 'Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.'}
    ]);


    const history = useHistory();

    return (
        <div>
            <Container>
                <Row>
                    <div className="d-none d-md-block col-12 col-md-8 col-lg-8">
                        <div className="pt-2">
                            <Link to="/home" className="link"><h1 className="text-blue font-900">Spacious</h1></Link>
                        </div>
                        <Navig />
                        <Row>
                            {characters.map(char => (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={char.id}>
                                    <Col sm>
                                        <div className="shadow roundd">
                                            <Image src={char.image} fluid rounddd className="image"/>
                                            <div className="character-text px-4 py-0 bg-white roundd">
                                                <p className="text-blue font-600 pt-2">{char.name}</p>
                                                <p className="text-pop">{char.friends}</p>
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
                            <h1 className="text-blue font-800">{person.name}</h1>
                        </div>
                        <div>
                            <div className="mt-4">
                                <span className="text-pop" style={{fontSize: "16px"}}>{person.description}</span>
                            </div>
                            <div className="d-flex my-3">
                                <div className="pe-5">
                                    <span className="text-blue" style={{fontSize: "16px", fontWeight: "400"}}>Planet</span> <br />
                                    <span className="text-blue" style={{fontSize: "16px", fontWeight: "600"}}>Alpha</span>
                                </div>
                                <div className="ps-5">
                                    <span className="text-blue" style={{fontSize: "16px", fontWeight: "400"}}>Friends</span> <br />
                                    <span className="text-blue" style={{fontSize: "16px", fontWeight: "600"}}>23</span>
                                </div>
                            </div>
                            <div>
                                <span className="text-pop" style={{fontSize: "16px", fontWeight: "600"}}>FRIENDS</span>
                            </div>
                        </div>
                        <div className="char-list">
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character10} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Eleanor Pena</span> <br />
                                            <span className="text-pop font-600">Amet minim mollit non deserunt ullamco e</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character11} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Brooklyn Simmons</span> <br />
                                            <span className="text-pop font-600">Amet minim mollit non deserunt ullamco e</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character12} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Kristin Watson</span> <br />
                                            <span className="text-pop font-600">Amet minim mollit non deserunt ullamco e</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character13} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Cody Fisher</span> <br />
                                            <span className="text-pop font-600">Amet minim mollit non deserunt ullamco e</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character5} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Courtney Henry</span> <br />
                                            <span className="text-pop font-600">Amet minim mollit non deserunt ullamco e</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character4} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Annette Black</span> <br />
                                            <span className="text-pop font-600">Amet minim mollit non deserunt ullamco e</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character10} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Courtney Henry</span> <br />
                                            <span className="text-pop font-600">Amet minim mollit non deserunt ullamco e</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character11} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Cody Fisher</span> <br />
                                            <span className="text-pop font-600">Amet minim mollit non deserunt ullamco e</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character12} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Eleanor Pena</span> <br />
                                            <span className="text-pop font-600">Amet minim mollit non deserunt ullamco e</span>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="col-4 mb-2">
                                            <div>
                                                <img src={character13} alt="" className=" round8 imgg"/>
                                            </div>
                                        </div>
                                        <div className="col-8 margL pt-2">
                                            <span className="text-blue font-600">Cody Fisher</span> <br />
                                            <span className="text-pop font-600">Amet minim mollit non deserunt ullamco e</span>
                                        </div>
                                    </Row>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Charactersides

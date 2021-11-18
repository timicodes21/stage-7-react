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
import Navigationbar from './Navigationbar'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import Charactersides from './Charactersides'

const Characters = () => {
    
    const[person, setPerson] = useState({})
    const[display, setDisplay] =useState(false);
    const[show, setShow] = useState(true)

    const[characters, setCharacters] = useState([
        {name: 'Brooklyn Simmons', friends: '23 Friends', image: character1, id: 1, description: 'Brooklyn is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Cameron Williamson', friends: '23 Friends', image: character2, id: 2, description: 'Cameron is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Leslie Alexander', friends: '23 Friends', image: character3, id: 3, description: 'Leslie is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Kristin Watson', friends: '23 Friends', image: character4, id: 4, description: 'Kristin is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Jenny Wilson', friends: '23 Friends', image: character5, id: 5, description: 'Jenny is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Marvin McKinney', friends: '23 Friends', image: character6, id: 6, description: 'Marvin is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Jerome Bell', friends: '23 Friends', image: character7, id: 7, description: 'Jerome is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Kristin Watson', friends: '23 Friends', image: character8, id: 8, description: 'Kristin is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Guy Hawkins', friends: '23 Friends', image: character9, id: 9, description: 'Guy is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Brooklyn Simmons', friends: '23 Friends', image: character2, id: 10, description: 'Brooklyn is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Cameron Williamson', friends: '23 Friends', image: character3, id: 11, description: 'Cameron is really a nice person. She’s been living on planet Alpha for the last 10 years.'},
        {name: 'Leslie Alexander', friends: '23 Friends', image: character4, id: 12, description: 'Leslie is really a nice person. She’s been living on planet Alpha for the last 10 years.'}
    ]);

    let char = JSON.parse(localStorage.getItem('char'));
   
    char.id = 13;
    char.image = character4;
    console.log(char);
    const newChar = {
        name: char.name,
        friends: char.friends,
        image: character8,
        id: 13
    }
    characters.push(newChar)



    const history = useHistory();
    const handlePush = () => {
        setDisplay(true)
        setShow(false)
    }
    const handleCan = () => {
        setShow(true)
        setDisplay(false)
    }
    return (
        <div className="characters">
            {show && (
                <Container>
                <div className="pt-2">
                    <Link to="/home" className="link"><h1 className="text-blue font-900">Spacious</h1></Link>
                </div>
                <Navigationbar />
                <Row>
                    {characters.map(char => (
                        <div className="col-12 col-sm-6 col-md-3 col-lg-3" key={char.id} onClick={handlePush}>
                            <div onClick={() => setPerson(char)}>
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
                        </div>
                    ))}
                </Row>
            </Container>
            )}
            
            {display && <Charactersides person={person} handleCan={handleCan}/>}
        </div>
    )
}

export default Characters

import React, { useState } from 'react'
import { Container, Form, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router'
import character3 from '../assets/characters/character-3.png'

const Characterform = () => {

    const history = useHistory();
    const handleCan = () => {
        history.go(-1)
    }

    const[message, setMessage] = useState(false)
    const[message1, setMessage1] = useState(false)
    
    const[image, setImage] = useState('image.jpg');
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[friends, setFriends] = useState('Jane Cooper');


    const handleSubmit = () => {
        let character = {
            image: character3,
            name,
            description,
            friends: '23 Friends'
        }
        localStorage.setItem('char', JSON.stringify(character))
        console.log(character)
        
    
        if(character.name && character.description){
            history.push('/characters')
        } else if(character.name){
            setMessage(false)
            setMessage1(true)
        } else if(character.description){
            setMessage(true)
            setMessage1(false)
        } else{
            setMessage(true)
            setMessage1(true)
        } 
    }

    return (
        <div className="character-form">
            <Container>
                <div className="py-5 px-4 roundded bg-white shadow">
                    <div className="d-flex justify-content-end mb-2">
                        <div className="text-blue bg-grey cancel p-1 fw-bold" onClick={handleCan}>X</div>
                    </div> 
                    <h1 className="text-blue font-900 mb-3">Character</h1>
                    <div>
                        <Form className="form">
                            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                <Form.Label>
                                    <p className="text-blue font-600">Image</p>
                                </Form.Label>
                                <Form.Control type="text" className="bg-light" value={image} onChange={(e) => setImage(image)}/>
                            </Form.Group>
                            <p className="text-pop py-2">Paste the URL of a JPG or PNG of max 20 kb</p>
                            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                <Form.Label>
                                    <p className="text-blue font-600">Name</p>
                                </Form.Label>
                                <Form.Control type="text" className="bg-light" value={name} onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>
                            {message && (<p className="text-pop text-danger py-2">Name required</p>)}
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>
                                    <p className="text-blue font-600">Description</p>
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} className="bg-light" value={description} onChange={(e) => setDescription(e.target.value)}/>
                            </Form.Group>
                            {message1 && (<p className="text-pop text-danger py-2">Put a description</p>)}
                            <p className="text-blue font-600">Friends</p>
                            <Form.Select aria-label="Default select example" className="bg-light" value={friends} onChange={(e) => setFriends(e.target.value)}>
                                <option value="Jane Cooper">Jane Cooper</option>
                                <option value="Eleanor Pena">Eleanor Pena</option>
                                <option value="Brooklyn Simmons">Brooklyn Simmons</option>
                                <option value="Kristin Watson">Kristin Watson</option>
                                <option value="Cody Fisher">Cody Fisher</option>
                                <option value="Courtney Henry">Courtney Henry</option>
                            </Form.Select>
                        </Form>
                    </div>
                    <div className=" buttons d-flex justify-content-end my-5">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <p className="text-blue font-600 marg px-4 py-2 click bg-planet border round8" onClick={handleCan}>CANCEL</p>
                            </Nav.Item>
                            <Nav.Item>
                                <p className="text-white font-600 px-4 py-2 click bg-blue round8" onClick={handleSubmit}>CREATE CHARACTER</p>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Characterform
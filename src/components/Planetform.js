import React, { useState } from 'react'
import { Container, Form, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router'

const Planetform = () => {
    
    const history = useHistory();
    const handleCan = () => {
        history.go(-1)
    }
    const[text, setText] = useState(false)

    const handleClick = () => {
        setText(true)
    }

    const handleCancel = () => {
        setText(false)
        history.go(-1)
    }

    const[image, setImage] = useState('image.jpg');


    return (
        <div className="planet-form">
            <Container>
                <div className="py-5 px-4 roundded bg-white shadow">
                    <div className="d-flex justify-content-end mb-2">
                        <div className="text-blue bg-grey cancel p-1 fw-bold" onClick={handleCan}>X</div>
                    </div> 
                    <h1 className="text-blue font-900 mb-3">Planet</h1>
                    <div>
                        <Form>
                            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                <Form.Label>
                                    <p className="text-blue font-600">Image</p>
                                </Form.Label>
                                <Form.Control type="email" className="bg-light" value={image} onChange={(e) => setImage(image)}/>
                            </Form.Group>
                            <p className="text-pop py-2">Paste the URL of a JPG or PNG of max 20 kb</p>
                            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                <Form.Label>
                                    <p className="text-blue font-600">Name</p>
                                </Form.Label>
                                <Form.Control type="text" className="bg-light"/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>
                                    <p className="text-blue font-600">Description</p>
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} className="bg-light"/>
                            </Form.Group>
                        </Form>
                    </div>
                    {text && (<div>
                        <p className="text-red">Bummer! We can’t create this planet right now. Probably a black hle in the way. Try later please.</p>
                    </div>)}
                    <div className=" buttons d-flex justify-content-end my-5">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <p className="text-blue font-600 marg click px-4 py-2 bg-planet border round8" onClick={handleCancel}>CANCEL</p>
                            </Nav.Item>
                            <Nav.Item>
                                <p className="text-white font-600 px-4 py-2 click bg-blue round8" onClick={handleClick}>CREATE PLANET</p>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Planetform

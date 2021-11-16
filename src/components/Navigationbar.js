import React from 'react'
import { Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { PlusCircleFill } from 'react-bootstrap-icons'

const Navigationbar = () => {

    const history = useHistory();
    const handlechar = () => {
        history.push('/charform')
    }
    return (
        <div className="navbar">
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Link to="/planets" className="link">
                        <p className="text-blue font-600 px-4 py-2 bg-planet border round">PLANETS</p>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/characters" className="link">
                        <p className="text-blue font-600 px-4 py-2 text-characters">CHARACTERS</p>
                    </Link>
                </Nav.Item>
            </Nav>
            <Container>
                <div className="">
                    <PlusCircleFill id="home-icon" onClick={handlechar}/>
                </div>
            </Container>
        </div>
    )
}

export default Navigationbar

import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import Navigationbar from './Navigationbar'
import planetloader from '../assets/assets/planet-loader.svg'
import plus from '../assets/plus.svg'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Home = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/planetform')
    }
    
    return (
        <div className="home">
            <Container>
                <div className="pt-2">
                    <Link to="/home" className="link"><h1 className="text-blue font-900">Spacious</h1></Link>
                    <Navigationbar />
                </div>
                <Container>
                    <Row>
                        <div className="text-center planetloader">
                            <img src={planetloader} alt="" />
                        </div>
                        <div className="text-center">
                            <p className="font-800 text-blue">Space doesn’t have to be so empty.</p>
                        </div>
                        <div className="button text-center py-2">
                            <button className="bg-blue text-white border round p-2 font-600" onClick={handleClick}>CREATE PLANET</button>
                        </div>
                    </Row>
                </Container>
                {/* <div className="d-flex justify-content-end mt-5">
                    <div className="text-white bg-blue border p-1 home-icon fw-bold border">+</div>
                </div>            */}
            </Container>
        </div>
    )
}

export default Home

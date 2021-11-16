import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import planetloader from '../assets/assets/planet-loader.svg'
import { useHistory } from 'react-router'

const Spacious = () => {
    const history = useHistory();
    const[load, setLoad] = useState('Plese wait')

    setTimeout(() => {
        history.push('/home')
    }, 5000)

    setInterval(() => {
        setLoad('Please wait.')
    }, 3000);
    setInterval(() => {
        setLoad('Please wait...')
    }, 4000);

    

    return (
        <div className="spacious">
            <Container>
                <div className="pt-2">
                    <Link to="/home" className="link"><h1 className="text-blue font-900">Spacious</h1></Link>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="planetload d-flex justify-content-center bg-white shadow" >
                        <img src={planetloader} alt="" className="p-5"/>
                    </div>
                    
                </div>

                <div className="text-blue text-center font-900 pt-5">
                    <p>{ load }</p>
                </div>
            </Container>
        </div>
    )
}

export default Spacious

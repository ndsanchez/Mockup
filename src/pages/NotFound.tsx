import React from 'react'
import notFoundImg from '../images/404.png'

const NotFound = () => (
    <React.Fragment>
        <div className=" text-center spc-lg">
            <img src={notFoundImg} alt="Page not Found" width={500}/>
        </div>
        <div className="text-center">
            <a href="/">Go back to Home</a>
        </div>
    </React.Fragment>
)

export default NotFound
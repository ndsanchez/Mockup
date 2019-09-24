import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const iconCheck = <FontAwesomeIcon color="#ED921F" className="fa-3x" icon={faCheckCircle}/>

class Search extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="box divisor spc-lg">
                    <div className="general icon">
                        <span className="letter-sm">{iconCheck}</span>
                    </div>
                    <div className="general search-sup">
                        <div className="search">
                            <input className="form-control mr-sm-2 letter-lg search-area" type="search" placeholder='Search' aria-label="Search"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Search
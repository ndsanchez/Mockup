import React from 'react'
import {SingleTicketIf} from '../interfaces/interfaces'
import DropDown from './DropDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faLocationArrow, faAngleDown, faTruck, faEllipsisV, faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const iconCheck = <FontAwesomeIcon color="#ED921F" className="fa-3x" icon={faCheckCircle}/>
const iconLocationArrow = <FontAwesomeIcon color="#CCCCCC" className="fa-lg" icon={faLocationArrow}/>
const iconAngleDown = <FontAwesomeIcon color="#ED921F" className="fa-3x" icon={faAngleDown}/>
const iconTruck = <FontAwesomeIcon color="#8E8B85" className="fa-3x fa-flip-horizontal" icon={faTruck}/>
const iconElipsis = <FontAwesomeIcon color="#8E8B85" className="fa-lg" icon={faEllipsisV}/>
const iconPencil = <FontAwesomeIcon color="#8E8B85" icon={faPencilAlt}/>
const iconTrash = <FontAwesomeIcon color="#8E8B85" icon={faTrashAlt}/>

class SingleTicket extends React.Component <SingleTicketIf>{
    render(){
        const { handleDelete, handleEdit, dataTicket } = this.props
        return(
            <React.Fragment>
                <div className="box divisor spc-lg">
                    <div className="general icon">
                        <span className="letter-sm">{iconCheck}</span>
                    </div>
                    <div className="general ticket">
                        <div className="div-info-sup">
                            <div className="div-info width-15">
                                <span className="letter-md">
                                    {dataTicket.day}<br/>
                                    {dataTicket.date}<sup>th</sup> {dataTicket.hour}<br/>
                                    PM
                                </span>
                            </div>
                            <div className="divider width-2"></div>
                            <div className="div-info width-5">
                                <span className="letter-md">{iconLocationArrow}</span>
                            </div>
                            <div className="div-info width-20">
                                <span className="letter-md">
                                    {dataTicket.addressOne}<br/>
                                    {iconAngleDown}<br/>
                                    {dataTicket.addressTwo}
                                </span>
                            </div>
                            <div className="divider-right width-2"></div>
                            <div className="div-info width-15">
                                <span className="letter-md">{iconTruck}</span>
                            </div>
                            <div className="div-info width-20">
                                <span className="letter-xl">${dataTicket.cost}.00</span>
                            </div>
                            <div className="div-info width-9">
                                <button className="btn btn-asp">{dataTicket.number}</button>
                            </div>
                            <div className="div-info width-9">
                                <DropDown handleDelete={handleDelete} handleEdit={handleEdit} id={dataTicket.id} icon={iconElipsis} pencil={iconPencil} trash={iconTrash}/>
                            </div>
                        </div>
                    </div>
                </div>   
            </React.Fragment>
        )
    }
}

export default SingleTicket
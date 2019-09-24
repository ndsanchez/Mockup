import React from 'react'
import { TicketIf } from '../interfaces/interfaces'
import SingleTicket from './SingleTicket'

class Ticket extends React.Component <TicketIf> {
    render(){
        const { handleDelete, handleEdit, dataTicket } = this.props
        return(
            dataTicket.map((el:any) => {
                return(
                    <SingleTicket key={el.id} handleDelete={handleDelete} handleEdit={handleEdit} dataTicket={el}/>
                )
            })
        )
    }
}

export default Ticket
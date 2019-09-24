import React from 'react'
import { DropDownIf } from "../interfaces/interfaces"

class DrowpDown extends React.Component <DropDownIf> {
    render(){
        const { handleDelete, handleEdit, id, icon, pencil, trash } = this.props
        return(
            <React.Fragment>
                <div className="dropdown">
                    <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>{icon}</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a onClick={handleEdit.bind(this,id)} id={id} className="dropdown-item" href="#edit" data-toggle="modal" data-target="#exampleModal">{pencil} Update</a>
                        <a onClick={handleDelete.bind(this,id)} id={id} className="dropdown-item" href="#delete">{trash} Delete</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DrowpDown
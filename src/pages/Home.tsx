import React from 'react'
import Menu from '../components/Menu'
import SideBar from '../components/SideBar'
import FloatingButton from '../components/FloatingButton'
import Modal from '../components/Modal'
import Tickets from '../components/Tickets'
import Search from '../components/Search'
import { HomeIf } from '../interfaces/interfaces'

class Home extends React.Component <HomeIf>{
    render(){
        const { handleClose, refModal, submitState, handleFloating, handleDelete, handleEdit, dataForm, formChange, handleSubmit, dataTicket, switchState, handleSwitch, handleMenu, menuActive } = this.props
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <SideBar switchState={switchState} handleSwitch={handleSwitch}/>
                        <div className="col-sm col-md-8 col-lg-9 col-xl-10 first-color">
                            <div className="top-space-lg">
                                <Menu handleMenu={handleMenu} menuActive={menuActive}/>
                                <Search/>
                                <Tickets handleDelete={handleDelete} handleEdit={handleEdit} dataTicket={dataTicket}/>
                                <FloatingButton handleFloating={handleFloating}/>
                                <Modal handleClose={handleClose} refModal={refModal} submitState={submitState} dataForm={dataForm} formChange={formChange} handleSubmit={handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>       
        )
    }
}

export default Home
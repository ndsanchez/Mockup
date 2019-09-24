import React from 'react'
import { ModalIf } from '../interfaces/interfaces'

class Modal extends React.Component <ModalIf> {
    rf:any;
    render(){
        const { handleClose, refModal, submitState, dataForm, formChange, handleSubmit } = this.props
        return(
            <React.Fragment>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{submitState==='Save'?'New Ticket':'Update Ticket'}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form ref={rf => this.rf = rf}>
                                    <div className="form-group row">
                                        <label htmlFor="inputDate" className="col-sm-3 col-form-label">Date</label>
                                        <div className="col-sm-9">
                                            <input value={dataForm.date} onChange={formChange} type="date" className="form-control" name="date" id="inputDate" placeholder="Date"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputDay" className="col-sm-3 col-form-label">Day</label>
                                        <div className="col-sm-9">
                                            <select value={dataForm.day} onChange={formChange} className="form-control" id="inputday" name="day">
                                                <option value="Monday">Monday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wenesday">Wenesday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                                <option value="Sunday">Sunday</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputTime" className="col-sm-3 col-form-label">Time</label>
                                        <div className="col-sm-9">
                                            <input value={dataForm.time} onChange={formChange} type="time" className="form-control" name="time" id="inputTime" placeholder="Time"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputAone" className="col-sm-3 col-form-label">Address One</label>
                                        <div className="col-sm-9">
                                            <input value={dataForm.addressOne} onChange={formChange} type="text" className="form-control" name="addressOne" id="inputAone" placeholder="Address One" /*disabled={disabledId}*//>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputAtwo" className="col-sm-3 col-form-label">Address Two</label>
                                        <div className="col-sm-9">
                                            <input value={dataForm.addressTwo} onChange={formChange} type="text" className="form-control" name="addressTwo" id="inputAtwo" placeholder="Address Two" required autoComplete="off"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputCost" className="col-sm-3 col-form-label">Cost ($)</label>
                                        <div className="col-sm-9">
                                            <input value={dataForm.cost} onChange={formChange} type="number" className="form-control" name="cost" id="inputCost" placeholder="Cost" lang="es-150"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputNumber" className="col-sm-3 col-form-label">Number</label>
                                        <div className="col-sm-9">
                                            <input value={dataForm.number} onChange={formChange} type="number" className="form-control" name="number" id="inputNumber" placeholder="Number" lang="es-150"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>{submitState}</button>
                                <button onClick={handleClose} ref={refModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>    
            </React.Fragment>
        )
    }
}

export default Modal
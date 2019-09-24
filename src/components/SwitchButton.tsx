import React from 'react'
import Switch from "react-switch";
import { SwitchButtonIf } from '../interfaces/interfaces'

class SwitchButton extends React.Component <SwitchButtonIf>{
    render(){
        const { id, check, handleSwitch, icon} = this.props
        return(
            <React.Fragment>
                <div className="row spc-sm">
                    <div className="col-5 text-center">
                        <span>{icon}</span>
                    </div>
                    <div className="col-7 text-center">
                        <Switch 
                            onChange={handleSwitch}
                            id={id} 
                            checked={check} 
                            height={42}
                            width={85}
                            onColor="#ED921F"
                            offColor="#0B3538"
                            uncheckedIcon={false}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SwitchButton
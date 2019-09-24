import React from 'react'
import logoImg from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faHeart, faCalendarAlt, faCommentDollar } from '@fortawesome/free-solid-svg-icons'
import SwitchButton from './SwitchButton'
import { SideBarIf } from '../interfaces/interfaces'

class SideBar extends React.Component <SideBarIf> {
    render(){
        const { switchState, handleSwitch } = this.props
        const iconLightBulb = <FontAwesomeIcon icon={faLightbulb}/>
        var iconSale = <FontAwesomeIcon color={(switchState.sale)?'#32C5BA':'#5C5858'} className="fa-3x" icon={faCommentDollar}/>
        var iconCalendar = <FontAwesomeIcon color={(switchState.calendar)?'#32C5BA':'#5C5858'} className="fa-3x" icon={faCalendarAlt}/>        
        var iconHeart = <FontAwesomeIcon color={(switchState.heart)?'#32C5BA':'#5C5858'} className="fa-3x" icon={faHeart}/>

        return(
            <React.Fragment>
                 <div className="col-sm col-md-4 col-lg-3 col-xl-2 first-color h-com">
                    <div className="text-center top-space-lg">
                        <img className="logo" src={logoImg} alt="logo"/>
                    </div>
                    <div className="row top-space-lg">
                        <div className="col-3 text-right">
                            <span className="title-lg">{iconLightBulb}</span>    
                        </div>
                        <div className="col-9">
                            <span className="title-lg"> Smart Filters</span>
                        </div>
                    </div>
                    <hr className="line"></hr>
                    <SwitchButton id="switchSale" check={switchState.sale} handleSwitch={handleSwitch} icon={iconSale}/>
                    <SwitchButton id="switchCalendar" check={switchState.calendar} handleSwitch={handleSwitch} icon={iconCalendar}/>
                    <SwitchButton id="switchHeart" check={switchState.heart} handleSwitch={handleSwitch} icon={iconHeart}/>
                    <hr className="line"></hr>
                    <div className="text-center spc-md">
                        <span className="title-lg"> Status</span>    
                    </div>
                    <div className="fit spc-sm">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </div>
                    <div className="spc-sm">
                        <button className="btn btn-outline-secondary fit"><strong>DELIVERED</strong></button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SideBar
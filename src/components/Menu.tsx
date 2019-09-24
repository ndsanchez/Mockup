import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faStar, faCog, faUser } from '@fortawesome/free-solid-svg-icons'
import Option from './Option'
import { MenuIf } from '../interfaces/interfaces'

class NavBar extends React.Component <MenuIf> {
    render(){
        const { handleMenu, menuActive } = this.props        
        var iconHome = <FontAwesomeIcon color={menuActive.home?"#ececec":"#5C5858"} className="fa-lg" icon={faHome}/>
        var iconEnvelope = <FontAwesomeIcon color={menuActive.messages?"#ececec":"#5C5858"} className="fa-lg" icon={faEnvelope}/>
        var iconStar = <FontAwesomeIcon color={menuActive.wishlist?"#ececec":"#5C5858"} className="fa-lg" icon={faStar}/>
        var iconCog = <FontAwesomeIcon color={menuActive.settings?"#ececec":"#5C5858"} className="fa-lg" icon={faCog}/>
        var iconUser = <FontAwesomeIcon color={menuActive.account?"#ececec":"#5C5858"} className="fa-lg" icon={faUser}/>

        return(            
            <React.Fragment>
                <div className="box">       
                    <div className="row">
                        <div className={menuActive.home?"col selected":"col no-selected"}>
                            <Option handleMenu={handleMenu} pat='#home' Title="Home" Icon={iconHome} Active={menuActive.home?true:false}/>
                        </div>
                        <div className={menuActive.messages?"col selected":"col no-selected"}>
                            <Option handleMenu={handleMenu} pat='#messages' Title="Messages" Icon={iconEnvelope} Active={menuActive.messages?true:false}/>
                        </div>
                        <div className={menuActive.wishlist?"col selected":"col no-selected"}>
                            <Option handleMenu={handleMenu} pat='#wishlist' Title="Wishlist" Icon={iconStar} Active={menuActive.wishlist?true:false}/>
                        </div>
                        <div className={menuActive.settings?"col selected":"col no-selected"}>
                            <Option handleMenu={handleMenu} pat='#settings' Title="Settings" Icon={iconCog} Active={menuActive.settings?true:false}/>
                        </div>
                        <div className={menuActive.account?"col selected":"col no-selected"}>
                            <Option handleMenu={handleMenu} pat='#account' Title="My Account" Icon={iconUser} Active={menuActive.account?true:false}/>
                        </div>
                    </div>
                </div>     
            </React.Fragment>      
        )
    }
}

export default NavBar
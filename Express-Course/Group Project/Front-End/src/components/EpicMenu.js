import React, { Component } from 'react';
import logo from '../logo.png';
import searchIcon from '../search-icon.png';

class EpicMenu extends Component {

    render() {

let linksMarkup = this.props.links.map((link, index) => {
    return (
        <li className="menu__list-item"><a className="menu__link menu__link--active" href={link.link}>{link.label}</a></li>

    )
});

return (

            <nav className="menu">
            <h1 style = {{
              backgroundImage : 'url(' + logo + ')'
            }}className="menu__logo">Epic Co.</h1>

            <div className="menu__right">
                <ul className="menu__list">
                    
                    {linksMarkup}


                </ul>

                <button style = {{

                  backgroundImage: 'url(' + searchIcon + ') '
                }}
                
                className="menu__search-button"></button>

                <form className="menu__search-form hide" method="POST">
                    <input className="menu__search-input" placeholder="Type and hit enter" />>
                </form>
            </div>
        </nav>
        );
    }


}

export default EpicMenu;
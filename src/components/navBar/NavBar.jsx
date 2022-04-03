import React from 'react'
import CartWidget from './cartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {

return (
<div>
    <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>

                <a className='navbar-brand' href='#'>
                    Tienda Pokemon
                </a>

                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='#'>Inicio</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>¿Quienes Somos?</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Pokedex</a>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'>
                                Productos
                            </a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                <Link className='dropdown-item' to='/' >PokeBall's</Link>
                                <Link className='dropdown-item' to='/nosotros' >Nosotros</Link>
                            </ul>
                        </li>
                        <li>
                        
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />
            
        </nav>
    </header>
</div>
)
}

export default NavBar
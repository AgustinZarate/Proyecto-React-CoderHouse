import React from 'react'
import CartWidget from './cartWidget/CartWidget';
import './NavBar.css';
const NavBar = () => {
return (
<div>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <a class="navbar-brand" href="#">
                    F&M Sublimaciones
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">¿Quienes Somos?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Encontranos</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Remeras</a></li>
                                <li><a class="dropdown-item" href="#">Buzos</a></li>
                                <li><a class="dropdown-item" href="#">Cuadros</a></li>
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
import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom'
import RouteConstants from '../../RouteConstants';

export default function Header() {
    return (
        <header class="header">
            <div class="header__section header__section__left">
                <h2>Budget Squirrel</h2>
            </div>
            <div class="header__section header__section__right">
                <Link to={RouteConstants.LOGIN}>
                    <a class="header__button">
                        Login
                    </a>
                </Link>
                <Link to={RouteConstants.REGISTER}>
                    <a class="header__button">
                        Sign Up
                    </a>
                </Link>
            </div>
        </header>
    )
}

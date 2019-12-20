import React from 'react'
import './Header.scss';
import RouteConstants from '../../RouteConstants';

export default function Header() {
    return (
        <header class="header">
            <div class="header__section header__section__left">
                <h2>Budget Squirrel</h2>
            </div>
            <div class="header__section header__section__right">
                <button to="/login" class="header__button">
                    Login
                </button>
                <a class="header__button" href={RouteConstants.REGISTER}>
                    Sign Up
                </a>
            </div>
        </header>
    )
}

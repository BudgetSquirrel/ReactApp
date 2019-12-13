import React from 'react'
import './Header.scss';

export default function Header() {
    return (
        <header class="header">
            <div class="header__section header__section__left">
                <h2>Budget Squirrel</h2>
            </div>
            <div class="header__section header__section__right">
                <button class="header__button">
                    Login
                </button>
                <button class="header__button">
                    Sign Up
                </button>
            </div>
        </header>
    )
}

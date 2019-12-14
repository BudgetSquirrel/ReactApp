import React from 'react'
import VerticalPageSection from '../../components/generic/VerticalPageSection/VerticalPageSection'
import './Splash.scss';
import DiagBorder from '../../components/generic/DiagBorder/DiagBorder';
import Colors from '../../Colors.scss';
import Header from '../../components/Header/Header';


export default function Splash() {
    return (
        <>
            <Header></Header>
            <VerticalPageSection>
                <div class="vert-section__content color-bg__main">
                    <div class="vert-section__column splash__section__content--left">
                        <h1 class="color-txt__main-dark">
                            Budget Squirrel is a budget management tool
                            designed for both control freeks and the
                            laid back.
                        </h1>
                        <p class="color-txt__main-dark">
                            A budget management tool designed for both
                            control freeks and the laid back.
                        </p>
                    </div>
                    <div class="vert-section__column splash__section__img--right promo__img__container">
                        <img class="promo__img--small"></img>
                    </div>
                </div>
                <DiagBorder fillInside={Colors.main} fillOutside="white" borderColor={Colors.mainMedium} />
            </VerticalPageSection>

            <VerticalPageSection isrootContainsContent={true}>
                <div class="vert-section__column splash__section__content--left">
                    <h1 class="color-txt__black">
                        Create budget goals
                    </h1>
                    <p class="color-txt__black">
                        Set budgets for custom category and track your
                        spending over time.
                    </p>
                </div>
                <div class="vert-section__column splash__section__img--right promo__img__container">
                    <img class="promo__img"></img>
                </div>
            </VerticalPageSection>
        </>
    )
}

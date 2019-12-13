import React from 'react'
import VerticalPageSection from '../../components/generic/VerticalPageSection/VerticalPageSection'
import './Splash.scss';
import DiagBorder from '../../components/generic/DiagBorder/DiagBorder';
import Colors from '../../Colors.scss';


export default function Splash() {
    return (
        <>
            <VerticalPageSection isColumn={true}>
                <div class="vert-section__content color-bg__main">
                    <div class="vert-section__column splash__section__content--left">
                        <h1>
                            Budget Squirrel is a budget management tool
                            designed for both control freeks and the
                            laid back.
                        </h1>
                        <p>
                            A budget management tool designed for both
                            control freeks and the laid back.
                        </p>
                    </div>
                    <div class="vert-section__column splash__section__img--right promo__img__container">
                        <img class="promo__img"></img>
                    </div>
                </div>
                <DiagBorder fillInside={Colors.main} fillOutside="white" borderColor={Colors.mainDark} />
            </VerticalPageSection>
        </>
    )
}

import React from 'react'
import './VerticalPageSection.scss';

export default function VerticalPageSection({ isrootContainsContent, children }) {
    function getClassNames() {
        let classNames = "vert-section";
        if (isrootContainsContent) {
            classNames += " vert-section__content";
        }
        return classNames;
    }

    return (
        <div class={getClassNames()}>
            {children}
        </div>
    )
}

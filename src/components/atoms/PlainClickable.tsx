import React from "react"

import '../../styles/components/PlainClickable.css';


export function PlainClickable({ onClick, children }: { onClick: Function, children: any }) {
    return (
        <div className='plainClickable' onClick={() => onClick()}>{children}</div>
    )
};
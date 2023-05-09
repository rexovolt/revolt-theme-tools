import React from "react"

import '../../styles/components/Button.css';


export function Button({ onClick, children, enabled }: { onClick: Function, children: any, enabled?: boolean }) {
    const disabled = enabled !== undefined ? !enabled : false
    return (
        <button className={disabled ? 'disabledButton' : 'button'} disabled={disabled} onClick={() => onClick()}>{children}</button>
    )
};
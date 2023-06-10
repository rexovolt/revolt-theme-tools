import React from 'react';

import '../../styles/components/Text.css'

export function Text({ type, children, style, active }: { type?: 'h1' | 'h2' | 'h3' | 'subtitle', children: any, style?: any, active?: boolean }) {
    const activeStyle = active === undefined ? {} : !active ? { fontWeight: 'initial' } : {};
    const finalStyle = { ...activeStyle, ...style };
    return (
        <p className={type} style={finalStyle}>{children}</p>
    )
};

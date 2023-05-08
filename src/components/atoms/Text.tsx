import React from 'react';

import '../../styles/components/Text.css'

export function Text({ type, children, active }: { type?: 'h1' | 'h2' | 'h3' | 'subtitle', children: any, active?: boolean }) {
    return (
        <p className={type} style={active === undefined ? {} : !active ? { fontWeight: 'initial' } : {}}>{children}</p>
    )
};

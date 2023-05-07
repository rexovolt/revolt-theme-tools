import React from 'react';

import '../../styles/components/Text.css'

export function Text({ type, children }: { type?: 'h1' | 'h2' | 'h3' | 'subtitle', children: any }) {
    return (
        <p className={type}>{children}</p>
    )
};

import React from 'react';

export function Divider({ type }: { type: 'small' | 'large' }) {
    return (
        <span style={{ marginBlock: type === 'large' ? '1em' : '0.5em' }} />
    )
};
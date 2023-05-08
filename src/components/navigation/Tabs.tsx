import React from 'react';

import { PlainClickable, Text } from '../atoms';
import '../../styles/components/Tabs.css';

export function Tabs({ activePane, setActivePane }: { activePane: string, setActivePane: Function }) {
    return (
        <div className='container'>
            <div className='bar' />
            <div className='links'>
                <PlainClickable onClick={() => { if (activePane !== 'jsonConverter') { setActivePane('jsonConverter') } }}>
                    <Text active={activePane === 'jsonConverter'} type='h2'>Theme Converter</Text>
                </PlainClickable>
                <PlainClickable onClick={() => { if (activePane !== 'jsonConverter2') { setActivePane('jsonConverter2') } }}>
                    <Text active={activePane === 'jsonConverter2'} type='h2'>sussy</Text>
                </PlainClickable>
                <PlainClickable onClick={() => { if (activePane !== 'jsonConverter3') { setActivePane('jsonConverter3') } }}>
                    <Text active={activePane === 'jsonConverter3'} type='h2'>sussy</Text>
                </PlainClickable>
            </div>
        </div>
    )
};
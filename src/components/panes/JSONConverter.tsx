import React from "react"

import { Divider, Text, TextInput } from "../atoms"

export function JSONConverter() {
    const [themeJSON, setThemeJSON] = React.useState('');
    const [themeName, setThemeName] = React.useState('');
    const [themeSlug, setThemeSlug] = React.useState('');
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text type={'h1'}>Theme Converter</Text>
            <Text type={'h3'}>Prepare your theme for submission to Revolt's{' '}
                <a href="https://github.com/revoltchat/themes" target="_blank" rel="noreferrer">Theme Store</a>.
            </Text>
            <Divider type="large" />
            <Text type={'h2'}>Theme data</Text>
            <Text type={'subtitle'}>To get this, go to Settings {'>'} Appearance, scroll down to Theme Overrides and copy the text above the colour grid.</Text>
            <TextInput value={themeJSON} setValue={setThemeJSON} />
            <Divider type="small" />
            <Text type={'h2'}>Theme name</Text>
            <TextInput value={themeName} setValue={setThemeName} />
            <Divider type="small" />
            <Text type={'h2'}>Theme slug</Text>
            <Text type={'subtitle'}>Slugs are restricted to lowercase letters, numbers and dashes (-).</Text>
            <TextInput value={themeSlug} setValue={setThemeSlug} />
        </div>
    )
}
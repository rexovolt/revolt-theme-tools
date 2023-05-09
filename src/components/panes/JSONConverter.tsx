import React from "react"

import { stringify } from "@iarna/toml";

import { Button, ColourSwatch, Divider, Text, TextInput } from "../atoms"

export function JSONConverter() {
    const [themeJSON, setThemeJSON] = React.useState('');
    const [themeName, setThemeName] = React.useState('');
    const [themeSlug, setThemeSlug] = React.useState('');
    const [themeAuthor, setThemeAuthor] = React.useState('');
    const [themeVersion, setThemeVersion] = React.useState('');
    const [TOMLOutput, setTOMLOutput] = React.useState('');
    const [output, setOutput] = React.useState({} as any);

    function convert() {
        console.log('[JSONConverter] Running converter...')
        let rawObj: any;
        try { rawObj = JSON.parse(themeJSON); } catch (err) {
            console.error(`[JSONConverter] Error parsing JSON string: ${err}, string: ${themeJSON}`)
        }
        if (!rawObj.background || !rawObj.accent) {
            console.error(`[JSONConverter] Invalid JSON string: ${themeJSON}`)
            return;
        }
        const obj = {
            name: themeName,
            slug: themeSlug,
            author: themeAuthor,
            version: themeVersion,
            variables: {
                light: rawObj.light,
                accent: rawObj.accent,
                background: rawObj.background,
                foreground: rawObj.foreground,
                block: rawObj.block,
                "message-box": rawObj["message-box"],
                mention: rawObj.mention,
                success: rawObj.success,
                warning: rawObj.warning,
                error: rawObj.error,
                hover: rawObj.hover,
                tooltip: rawObj.tooltip,
                scrollbar: {
                    track: rawObj["scrollbar-track"],
                    thumb: rawObj["scrollbar-thumb"],
                },
                primary: {
                    header: rawObj["primary-header"],
                    background: rawObj["primary-background"],
                    foreground: rawObj["primary-foreground"],
                },
                secondary: {
                    header: rawObj["secondary-header"],
                    background: rawObj["secondary-background"],
                    foreground: rawObj["secondary-foreground"],
                },
                tertiary: {
                    background: rawObj["tertiary-background"],
                    foreground: rawObj["tertiary-foreground"],
                },
                status: {
                    online: rawObj["status-online"],
                    away: rawObj["status-away"],
                    focus: rawObj["status-focus"],
                    busy: rawObj["status-busy"],
                    streaming: rawObj["status-streaming"],
                    invisible: rawObj["status-invisible"],
                },
            },
        };
        setOutput(obj);
        const toml = stringify(obj);
        setTOMLOutput(toml);
    };
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <>
                    <Text type={'h1'}>Theme Converter</Text>
                    <Text type={'h3'}>Prepare your theme for submission to Revolt's{' '}
                        <a href="https://github.com/revoltchat/themes" target="_blank" rel="noreferrer">Theme Store</a>.
                    </Text>
                    <Divider type="large" />
                </>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginInlineEnd: '1em', width: '50%' }}><Text type={'h2'}>Theme data</Text>
                        <Text type={'subtitle'}>To get this, go to Settings {'>'} Appearance, scroll down to Theme Overrides and copy the text above the colour grid.</Text>
                        <TextInput value={themeJSON} setValue={setThemeJSON} />
                        <Divider type="small" />
                        <Text type={'h2'}>Theme name</Text>
                        <TextInput value={themeName} setValue={setThemeName} />
                        <Divider type="small" />
                        <Text type={'h2'}>Theme slug</Text>
                        <Text type={'subtitle'}>Slugs are restricted to lowercase letters, numbers and dashes (-).</Text>
                        <TextInput value={themeSlug} setValue={setThemeSlug} />
                        <Text type={'h2'}>Theme author</Text>
                        <TextInput value={themeAuthor} setValue={setThemeAuthor} />
                        <Text type={'h2'}>Theme version</Text>
                        <Text type={'subtitle'}>Versions are restricted to 'v' followed by numbers and dots.</Text>
                        <TextInput value={themeVersion} pattern="[v0-9\.]" setValue={setThemeVersion} />
                        <Button onClick={() => convert()} enabled={themeJSON.length > 0 && themeName.length > 0 && themeSlug.length > 0 && themeAuthor.length > 0 && themeVersion.length > 0}><Text type={'h3'}>Convert & Preview</Text></Button>
                    </div>
                    <div style={{ marginInlineStart: '1em', width: '50%' }}><Text type={'h2'}>Theme data</Text>
                        <Text type={'h3'}>Swatches</Text>
                        <ColourSwatch colour={output.variables?.accent ?? '#FFFFFF'} label="Accent" />
                        <ColourSwatch colour={output.variables?.background ?? '#FFFFFF'} label="Background" />
                        <Text type={'h3'}>TOML</Text>
                        <code>{TOMLOutput ?? 'none'}</code>
                    </div>
                </div>
            </div>
        </>
    )
}
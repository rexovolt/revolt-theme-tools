import React from "react"

// import { stringify } from "@iarna/toml";

import { Divider, Text, TextInput } from "../atoms"

export function JSONConverter() {
    const [themeJSON, setThemeJSON] = React.useState('');
    const [themeName, setThemeName] = React.useState('');
    const [themeSlug, setThemeSlug] = React.useState('');
    const [themeAuthor, setThemeAuthor] = React.useState('');
    const [themeVersion, setThemeVersion] = React.useState('');
    const [output, setOutput] = React.useState({});

    function convert() {
        const rawObj = JSON.parse(themeJSON);
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
        console.log(obj);
        // const toml = stringify(obj);
        // setOutput(toml);
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
                    <><Text type={'h2'}>Theme data</Text>
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
                        <TextInput value={themeVersion} setValue={setThemeVersion} /></>
                    <><Text type={'h2'}>Theme data</Text>
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
                        <TextInput value={themeVersion} setValue={setThemeVersion} /></>

                </div>
            </div>
        </>
    )
}
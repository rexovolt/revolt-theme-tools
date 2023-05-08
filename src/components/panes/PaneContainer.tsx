import React from "react";

import { Text } from "../atoms";
import { Tabs } from "../navigation/Tabs";
import '../../styles/PaneContainer.css';

export function PaneContainer() {
    const [pane, setPane] = React.useState('jsonConverter')
    return (
        <div className="paneContainer">
            <Tabs activePane={pane} setActivePane={setPane} />
            <Text type={'h1'}>{pane}</Text>
        </div>
    )
};
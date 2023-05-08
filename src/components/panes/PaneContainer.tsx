import React from "react";

import { JSONConverter } from "./JSONConverter";
import { Tabs } from "../navigation/Tabs";
import '../../styles/PaneContainer.css';

type KnownPanes = 'jsonConverter' | 'jsonConverter2' | 'jsonConverter3'

export function PaneContainer() {
    const [pane, setPane] = React.useState('jsonConverter' as KnownPanes)
    const panes = {
        'jsonConverter': <JSONConverter />,
        'jsonConverter2': <JSONConverter />,
        'jsonConverter3': <JSONConverter />,
    }
    return (
        <div className="paneContainer">
            <Tabs activePane={pane} setActivePane={setPane} />
            {panes[pane]}
        </div>
    )
};
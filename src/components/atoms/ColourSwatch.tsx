import React from "react";

import { Text } from "./Text";
import '../../styles/components/ColourSwatch.css'

export function ColourSwatch({ colour, label }: { colour: string, label: string }) {
    return (
        <div>
            <div className="colourSwatch" style={{ backgroundColor: colour }} />
            <Text style={{ marginBlockStart: "0.5em", marginBlockEnd: "1em" }}>{label}</Text>
        </div>
    )
}
import React from "react";

import '../../styles/components/TextInput.css'

export function TextInput({ value, setValue }: { value: string, setValue: Function }) {
    return (
        <input className="textInput" value={value} onChange={(v) => setValue(v.target.value)} />
    )
};
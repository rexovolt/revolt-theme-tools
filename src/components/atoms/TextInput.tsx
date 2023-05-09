import React from "react";

import '../../styles/components/TextInput.css'

export function TextInput({ value, setValue, pattern }: { value: string, setValue: Function, pattern?: string }) {
    return (
        <input className="textInput" value={value} pattern={pattern} onChange={(v) => setValue(v.target.value)} />
    )
};
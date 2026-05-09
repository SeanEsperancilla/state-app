import React, { useState } from "react";

export default function ControlledComponents() {
    const [text, setText] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    return (
        <>
            <label>Text value is {text}</label>
            <input type="text" placeholder="Enter your name"
                value={text}
                onChange={handleChange}
            />
        </>
    )
}
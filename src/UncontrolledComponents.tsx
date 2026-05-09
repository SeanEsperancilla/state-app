import { useRef } from "react"

export default function UncontrolledComponents() {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        alert(`Input value is ${inputRef.current?.value}`);
    }
    return (
        <>
            <input type="text" 
            placeholder="Enter your name" 
            ref={inputRef}
            />
            <button onClick={handleClick}>
                Show Input Value
                </button>
        </>
    )
}
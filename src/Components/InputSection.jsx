import { useState } from "react";
import Button from "./Button"

export default function InputSection({onAddTask}) {

    const [inputValue, setInputValue] = new useState('')

    const handleClick = () => {
        if (inputValue.trim() !== '') {
            onAddTask(inputValue)
            setInputValue('')
        }
    } 

    return (
        <section className="inputSection">

            <input 
                type="text" 
                name="task" 
                id="task" 
                placeholder='Write here your todo...'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />

            <Button className="button" onClick={handleClick}>
                <img src="src\assets\plus.svg" alt="add todo" />
            </Button>

        </section>
    )
}
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
    
    const editInput = (event) => {
        const newValue = event.target.value
        if (newValue.length < 47) {
            setInputValue(newValue)
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
                onChange={e => editInput(e)}
            />

            <Button className="button" onClick={handleClick}>
                <img src="src\assets\plus.svg" alt="add todo" />
            </Button>

        </section>
    )
}
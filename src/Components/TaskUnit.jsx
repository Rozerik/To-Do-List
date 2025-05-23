import { useState } from "react";
import Button from "./Button";

export default function TaskUnit({task, onRemove, onToggleTask}) {
    const [removed, setRemoved] = useState(false)
    const handleReadyClick = () => {
        if (typeof onToggleTask === 'function') {
            onToggleTask(task.id);
        }
    }
    const handleDeleteClick = () => {
        if (typeof onRemove === 'function') {
            setRemoved(true);
            onRemove(task.id);
        }
    }
    return (
        <li className="task-item" data-done={task.done}>
            <span className={task.done ? 'done' : ''}>{task.text}</span>
            <div className="taskButton">
                <Button className="buttonReady" onClick={handleReadyClick}>Ready</Button>
                <Button className="buttonDelete" onClick={handleDeleteClick}>Delete</Button>
            </div>
        </li>
    )
}
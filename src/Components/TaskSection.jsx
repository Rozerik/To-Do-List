import TaskUnit from "./TaskUnit"

export default function TaskSection({tasks, onRemove, onToggleTask}) {
    return(
        <section>
            <ul>
                {tasks.map(task => <TaskUnit
                key={task.id} 
                task={task} 
                onRemove={onRemove} 
                onToggleTask={onToggleTask}
                />)}
            </ul>
        </section>
    )
}
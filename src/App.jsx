import Header from './Components/Header'
import InputSection from './Components/InputSection'
import './styles.css'
import TaskSection from './Components/TaskSection'
import {useTasks} from './Hooks/useTasks'
import FooterSection from './Components/FooterSection'

function App() {
  const { tasks, addTask, removeTask, onToggleTask, clearAllTasks} = useTasks([])

  return (
      <>
        <div className='mainContainer'>

          <Header/>
          <InputSection onAddTask={addTask}/>
          <TaskSection tasks={tasks} onRemove={removeTask} onToggleTask={onToggleTask}/>
          {tasks.length === 0 && (
            <section className='noTaskSection'>
              <h3>It's time to do some planning!</h3>
            </section>
          )}
          {tasks.length > 1 && <FooterSection clearTasks={clearAllTasks}/>}
        </div>
      </>
  )
}

export default App

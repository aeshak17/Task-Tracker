import Task from "./Task";

const Tasks = ({tasks, onDelete, onToggle}) => {
  console.log(tasks);
 

  return (
    <>
    {
      tasks.map((task, index) => (
      
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
      
    </>
  )
}

Tasks.propTypes = {

}

export default Tasks;

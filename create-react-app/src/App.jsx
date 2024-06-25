import Header from "./container/Header";
import TaskList from "./container/TaskList";
import "./App.css";
import { useState } from "react";
import AddTask from "./container/AddTask";
import EditTask from "./container/EditTask";

function App() {
    const [currentScene, setCurrentScene] = useState("TASK_LIST");
    const [tasks, setTasks] = useState([
        {
            name: "task1",
            finished: false,
        },
        {
            name: "task2",
            finished: false,
        },
    ]);

    return (
        <>
            <Header />
            <main>
                {currentScene === "TASK_LIST" && (
                    <TaskList
                        tasks={tasks}
                        setTasks={setTasks}
                        setCurrentScene={setCurrentScene}
                    />
                )}
                {currentScene === "ADD_TASK" && (
                    <AddTask
                        setTasks={setTasks}
                        setCurrentScene={setCurrentScene}
                    />
                )}
                {currentScene === "EDIT_TASK" && <EditTask />}
            </main>
        </>
    );
}

export default App;

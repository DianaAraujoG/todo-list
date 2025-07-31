import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/SideBar/Sidebar";
import { TaskContainer } from "./components/TaskContainer/TaskContainer";

import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-blue-200 text-xl p-4">Hola mundo</div>
      <Header />
      <div className="flex">
        <Sidebar />
        <TaskContainer
          taskList={[
            {
              title: "Titulo de la nota",
              dateCreate: "30/07/2025",
              status: "pending",
              description: "Debo hacer muchas cosas bla bla bla",
            },
            {
              title: "Titulo de la nota",
              dateCreate: "30/07/2025",
              status: "inProgress",
              description: "Debo hacer pocas cosas ble ble ble",
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;

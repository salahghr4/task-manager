import Main from "@/components/Main";
import SideBar from "./components/SideBar";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <>
      <Main>
        <SideBar />
        <Tasks />
      </Main>
    </>
  );
};

export default App;

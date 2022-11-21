
import './App.css';
import FirstComponent from "./pages/firstComponent/FirstComponent";
import SecondComponent from "./pages/secondComponent/SecondComponent";
import ThirdComponent from "./pages/thirdComponent/ThirdComponent";

function App() {
  const user ={
    name:"Anna",
    age: 19
  }
  return (
    <div className="App">
        <FirstComponent userInfo= {user}/>
        <SecondComponent userInfo= {user}/>
        <ThirdComponent/>

    </div>
  );
}

export default App;

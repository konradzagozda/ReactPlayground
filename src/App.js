import logo from "./logo.svg";
import "./App.css";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import { PureComponent } from "react";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";

function App() {
  return (
    <div className="App">
      <ParentComp />
    </div>
  );
}

export default App;

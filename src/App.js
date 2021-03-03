import logo from "./logo.svg";
import "./App.css";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
    </div>
  );
}

export default App;

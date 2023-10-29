import styles from "./App.module.css";
import AllRoutes from "./components/AllRoutes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <h1>finance management</h1>
      <AllRoutes />
    </div>
  );
}

export default App;

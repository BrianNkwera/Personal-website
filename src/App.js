import MainComponent from "./Main";
import { ThemeProvider } from "./hooks/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>
  );
}

export default App;

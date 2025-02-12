import Header from "./components/Header";
import Main from "./components/Main";

//Context
import { AppDataProvider } from "./contexts/AppDataContext";

export default function App() {
  return (
    <AppDataProvider>
      <Header />
      <Main />
    </AppDataProvider>
  );
}

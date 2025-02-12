import { createContext, useContext, useState } from "react";

//Creo il contesto
const AppDataContext = createContext();

//Definisco un custom provider ( colui che trasmette i dati )

function AppDataProvider({ children }) {
  // aggiungo lo stato movies da condividere
  const [movies, setMovies] = useState([]);

  return (
    <AppDataContext.Provider value={{ movies, setMovies }}>
      {children}
    </AppDataContext.Provider>
  );
}

//Creo un custom hook per consumare questo contesto, per recuperare i dati dal contesto

function useAppDataContext() {
  const context = useContext(AppDataContext);
  return context;
}

//esporto provider e hook per consumare

export { AppDataProvider, useAppDataContext };

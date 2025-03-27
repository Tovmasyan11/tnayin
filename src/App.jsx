import { Routing } from './routing/Routing'
import { AuthContextProvider } from './context/Auth/AuthContextProvider';
import './App.css'



function App() {

  return (
    <AuthContextProvider>
      <Routing />
    </AuthContextProvider>
  );
};

export default App

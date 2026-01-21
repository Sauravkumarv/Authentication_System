import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <AppRoutes />
      <h1 className="text-white">Heading</h1>
    </BrowserRouter>
  </AuthProvider>
);

export default App;

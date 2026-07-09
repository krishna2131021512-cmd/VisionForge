import AppRoutes from "./routes/AppRoutes";

import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { NotificationProvider } from "./context/NotificationContext";

import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/tailwind.css";
import "./styles/variables.css";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <AppRoutes />
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";
import { AccessibilityMenu } from "./components/AccessibilityMenu";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.css"

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AccessibilityMenu />
        <AppRoutes />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

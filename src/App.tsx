import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";
import { AccessibilityMenu } from "./components/AccessibilityMenu";
import { LanguageProvider } from "./context/LanguageContext";
import { Sidebar } from "./components/sidebar";
import "./index.css"

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1, paddingLeft: "1rem" }}>
            <AccessibilityMenu />
            <AppRoutes />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}


export default App;

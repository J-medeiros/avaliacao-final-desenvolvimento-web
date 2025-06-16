import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";
import { AccessibilityMenu } from "./components/AccessibilityMenu";
import { LanguageProvider } from "./context/LanguageContext";
import { Sidebar } from "./components/Sidebar";
import "./index.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarWidth = sidebarOpen ? 250 : 60;

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div style={{ display: "flex" }}>
          <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />
          <div
            style={{
              marginLeft: sidebarWidth,
              padding: "1rem",
              width: `calc(100% - ${sidebarWidth}px)`,
              transition: "margin-left 0.3s ease, width 0.3s ease",
            }}
          >
            <AccessibilityMenu />
            <AppRoutes />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

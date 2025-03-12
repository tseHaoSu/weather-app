
import Page from "./components/components/Dashboard/Page";
import { ThemeProvider } from "./components/components/Theme/ThemeProvider";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Page />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;

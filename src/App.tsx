import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Page from "./components/components/Dashboard/Page";
import { ThemeProvider } from "./components/components/Theme/ThemeProvider";
import { Toaster } from "sonner";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Page />
        <Toaster />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

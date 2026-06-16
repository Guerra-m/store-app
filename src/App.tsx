import { AppRouter } from "./router/AppRouter";
import { Toaster } from "./shared/components/Toaster";
import { useAuthInitializer } from "./modules/auth/hooks/useAuthInitializer";

const App = () => {
  useAuthInitializer();

  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
};

export default App;
import { AppRouter } from "./router/AppRouter";

import { useAuthInitializer } from "./modules/auth/hooks/useAuthInitializer";

const App = () => {
  useAuthInitializer();

  return <AppRouter />;
};

export default App;
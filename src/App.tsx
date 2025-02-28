import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Shell from './shell';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Shell />
    </QueryClientProvider>
  );
}

export default App;

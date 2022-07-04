import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppNavigator } from './src/app/navigator/AppNavigator';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
};

export default App;

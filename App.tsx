import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppNavigator } from './src/app/navigator/AppNavigator';
import { FriendProvider } from './src/providers/friend/FriendProvider';
import { SignUpProviders } from './src/providers/signUp/SignUpProviders';
import { SafeAreaView } from 'react-native';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <SignUpProviders>
          <FriendProvider>
            <AppNavigator />
          </FriendProvider>
        </SignUpProviders>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default App;

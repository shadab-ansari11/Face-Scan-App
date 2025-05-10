/**
 * @format
 */
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './theme';

const queryClient = new QueryClient();

interface ProvideProps {
  children: JSX.Element | JSX.Element[];
}

function AppProviders(props: ProvideProps) {
  const {children} = props;
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default AppProviders;

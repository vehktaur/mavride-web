import { StyleProvider } from '@ant-design/cssinjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { APIProvider } from '@vis.gl/react-google-maps';
import { ConfigProvider } from 'antd';
import { NuqsAdapter } from 'nuqs/adapters/tanstack-router';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

export function getContext() {
  const queryClient = new QueryClient();
  return {
    queryClient,
  };
}

export function Provider({
  children,
  queryClient,
}: {
  children: React.ReactNode;
  queryClient: QueryClient;
}) {
  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <StyleProvider layer>
          <ConfigProvider theme={{ hashed: true }}>
            <APIProvider apiKey={apiKey}>{children}</APIProvider>
          </ConfigProvider>
        </StyleProvider>
      </QueryClientProvider>
    </NuqsAdapter>
  );
}

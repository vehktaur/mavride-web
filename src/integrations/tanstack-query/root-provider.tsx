import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'

export function getContext() {
  const queryClient = new QueryClient()
  return {
    queryClient,
  }
}

export function Provider({
  children,
  queryClient,
}: {
  children: React.ReactNode
  queryClient: QueryClient
}) {
  return (
    <QueryClientProvider client={queryClient}>
    <StyleProvider layer>
        <ConfigProvider theme={{ hashed: true }}>{children}</ConfigProvider>
      </StyleProvider>
    </QueryClientProvider>
  )
}

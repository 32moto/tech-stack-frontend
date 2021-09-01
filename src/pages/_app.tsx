import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { client } from '@/libs/apollo'
// config
import { GlobalStyle } from '@/config/globalStyle';
// context
import { StyleProvider } from '@/context/style';
import { AuthProvider } from '@/context/auth';
// components
import { Layout } from '@/components/layouts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <GlobalStyle />
        <StyleProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StyleProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
export default MyApp

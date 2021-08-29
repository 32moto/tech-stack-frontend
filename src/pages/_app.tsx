import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { client } from '@/libs/apollo'
// config
import { GlobalStyle } from '@/config/globalStyle';
// context
import { StyleProvider } from '@/context/style';
// components
import { Layout } from '@/components/layouts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <StyleProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyleProvider>
    </ApolloProvider>
  );
}
export default MyApp

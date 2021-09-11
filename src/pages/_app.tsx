import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { client } from '@/libs/apollo'
// config
import { GlobalStyle } from '@/config/globalStyle';
// context
import { StyleProvider } from '@/context/style';
// components
import { Layout } from '@/components/layouts';
import { AppConfig } from '@/components/common/AppConfig';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ApolloProvider client={client}>
        {/*<AppConfig />*/}
        <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ApolloProvider>
    </StyleProvider>
  );
}
export default MyApp

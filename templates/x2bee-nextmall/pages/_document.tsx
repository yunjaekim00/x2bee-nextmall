import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  // 여기서부터는 Styled Components를 쓰기 위한 세팅
  // static async getInitialProps(ctx: any) {
  //   const { renderPage } = ctx;
  //   const initialProps = await Document.getInitialProps(ctx);

  //   // Step 1: Create an instance of ServerStyleSheet
  //   const sheet = new ServerStyleSheet();

  //   // Step 2: Retrieve styles from components in the page
  //   const page = renderPage(
  //     (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
  //   );

  //   // Step 3: Extract the styles as <style> tags
  //   const styleTags = sheet.getStyleElement();

  //   // Step 4: Pass styleTags as a prop
  //   return { ...initialProps, ...page, styleTags };
  // }
  // // 여기까지 Styled Components를 쓰기 위한 세팅

  render() {
    const { styleTags } = this.props as any;
    return (
      <Html>
        <Head>
          {/* {styleTags} // sytled component 사용을 위함 */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Roboto&display=swap"
            rel="stylesheet"
          /> */}
          {/* NEXT.js 13은 구글 폰트 내장되어있음 */}
        </Head>
        <body>
          <div id="portal" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

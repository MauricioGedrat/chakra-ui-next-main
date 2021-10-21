import NextDocument, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'
import Document from 'next/dist/pages/_document'

export default class _Document extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const page = await ctx.renderPage()
        const initialProps = await NextDocument.getInitialProps(ctx)

        return {
            ...initialProps,

            styles: <>{initialProps.styles}</>,
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="link to favicon" />
                    {/* font title */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap"
                        rel="stylesheet"
                    />

                    {/* font text */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

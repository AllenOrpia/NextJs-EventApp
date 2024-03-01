
import Document, { Html, Head, Main, NextScript } from "next/document";

// Allows you to modify the entire html document and all the elements that make the document

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        );
    }
}


export default MyDocument;
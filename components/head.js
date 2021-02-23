import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "Claire Wang";
    const description = "Student. Researcher. Design.";
    const keywords = "claire, wang";
    const author = "Claire Wang";
    const twitter = "@clairebookworm1";
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:url" content="bookworm.design" /> {/* This is where you put the domain */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            <script async defer data-website-id="c5b782d5-9b00-45b0-9b47-57cdbba6eef1" src="https://analytics.sarthakmohanty.me/umami.js"></script>
            {children}
        </Head>
    )
}
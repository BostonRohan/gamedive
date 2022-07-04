import Head from "next/head";

interface Props {
  title: string;
  description: string;
  image: string;
}

const SEO = (props: Props) => {
  const { title, description, image } = props;
  return (
    <Head>
      <title>{title}</title>
      {/* <meta
          property="og:url"
          content={`https://gamedive.vercel.app${router.asPath}`}
        /> */}
      {/* <link
          rel="canonical"
          href={`https://gamedive.vercel.app${router.asPath}`}
        /> */}
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      {image && <meta itemProp="image" content={image} />}
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
};

export default SEO;

import Head from "next/head";

interface HeadSeoProps {
  title?: string;
  content?: string;
}

export const HeadSeo = ({ title, content }: HeadSeoProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={content} />
  </Head>
);

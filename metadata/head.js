import Head from 'next/head';

function HeadMetaData({ title, content, active }) {
  return (
    <Head>
      <title>{title}</title>
      {active && <meta name='viewport' content='initial-scale=1.0, width=device-width' />}
      <meta name='description' content={content} />
    </Head>
  );
}

export default HeadMetaData;

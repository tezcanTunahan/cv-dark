import Head from 'next/head';

const Container = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        {/* <link rel='icon' href='./watch-icon.svg' /> */}
      </Head>
      {children}
    </>
  );
};

Container.defaultProps = {
  title: 'Tunahan Tezcan',
  description: 'Fullstack Developer',
  keywords: 'frontend,react,MERN',
};

export default Container;

import Head from 'next/head';
import { getSession } from 'next-auth/client';

import { Header } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook - Front End Product Design Analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* SIDEBAR */}
        {/* FEED */}
        {/* WIDGETS = everything about pitch product or business logic */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // get user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

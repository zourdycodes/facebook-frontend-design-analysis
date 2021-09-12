import Head from 'next/head';
import { getSession } from 'next-auth/client';

import { Header, Sidebar } from '../components';

const fakerator = require('fakerator')('pl-PL');

export default function Home() {
  const name = fakerator.names.name();
  // if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook - Front End Product Design Analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header name={name} />

      <main className="flex">
        {/* SIDEBAR */}
        <Sidebar name={name} />
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

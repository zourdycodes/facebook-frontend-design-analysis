import Head from 'next/head';
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

import Head from 'next/head';
import parse from 'html-react-parser';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Home.module.css';
import { MetatagsData } from './api/metatags';
import React from 'react';
import Link from 'next/link';

export async function getServerSideProps(context: any) {
  const response = await fetch(
    `http://localhost:3000/api/metatags?url=https://kingzasia.com${context.resolvedUrl}`
  );
  const data = await response.json();
  return {
    props: {
      data: data
    }
  };
}

type HomeProps = {
  data: MetatagsData;
};

export default function Home({ data }: HomeProps) {
  const { t } = useTranslation('home');

  const getMetatags = () => {
    return <>{parse(`${data['Meta Tags']}${data['Meta Tags - FB']}`)}</>;
  };
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>{data.Title}</title>
          <meta name="description" content={data['Meta Description']} />
          {getMetatags()}
        </Head>
        <h1>
          {t('title')}
          <nav>
            <li>
              <Link href="/?merchantId=AsiaGaming">merchantId=AsiaGaming</Link>
            </li>
            <li>
              <Link href="/?merchantId=BetSoft">merchantId=BetSoft</Link>
            </li>
            <li>
              <Link href="/?merchantId=BGaming">merchantId=BGaming</Link>
            </li>
            <li>
              <Link href="/?merchantId=Booongo">merchantId=Booongo</Link>
            </li>
          </nav>
        </h1>
      </div>
    </Layout>
  );
}

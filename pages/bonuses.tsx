import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import parse from 'html-react-parser';
import Head from 'next/head';
import { MetatagsData } from './api/metatags';

type BonusesProps = {
  data: MetatagsData;
};

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

export default function Bonuses({ data }: BonusesProps) {
  const { t } = useTranslation('bonuses');
  const getMetatags = () => {
    return <>{parse(`${data['Meta Tags']}${data['Meta Tags - FB']}`)}</>;
  };
  return (
    <Layout>
      <>
        <Head>
          <title>{data.Title}</title>
          <meta name="description" content={data['Meta Description']} />
          {getMetatags()}
        </Head>
        <div>
          <h1>{t('title')}</h1>
        </div>
      </>
    </Layout>
  );
}

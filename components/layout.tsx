import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import classes from '../styles/layout.module.css';

type LayoutProps = {
  children: React.ReactElement;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <Link href="/">{t('home')}</Link>
          <Link href="/bonuses">{t('bonuses')}</Link>
          <Link href="/news">{t('news')}</Link>
          <Link href="/faq">{t('faq')}</Link>
          <Link href="/about">{t('about')}</Link>
        </nav>
        <ul className={classes.langs}>
          {router.locales?.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                {locale}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <main className={classes.content}>{children}</main>

      <footer className={classes.footer}>
        <div>© 2022</div>
      </footer>
    </div>
  );
}

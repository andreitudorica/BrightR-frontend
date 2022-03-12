import Link from 'next/link';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import Layout from 'components/Layout';
import { Button, CardActionArea, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';

export default function Home() {
  const { t, lang } = useTranslation();
  const isRTL = lang === 'ar' || lang === 'he';
  const arrow = isRTL ? String.fromCharCode(8592) : String.fromCharCode(8594);

  return (
    <Layout>
      <main dir={isRTL ? 'rtl' : 'ltr'}>
        <Trans
          i18nKey="home:title"
          components={[<h1/>, <a href="https://nextjs.org">Next.js!</a>]}
        />

        <h2>
          {t('home:description')} <code>This is the / page</code>
        </h2>
        <h3>This is a env var {process.env.NEXT_PUBLIC_ANDREI_ID}</h3>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Link href="/post/123" locale="en">
              <CardActionArea>
                <h3>{t('home:english')}</h3>
                <p>
                  {t('home:change-to')} {t('home:english')}
                </p>
              </CardActionArea>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="/post/123" locale="ca">
              <CardActionArea>
                <h3>{t('home:catalan')}</h3>
                <p>
                  {t('home:change-to')} {t('home:catalan')}
                </p>
              </CardActionArea>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Button href="https://nextjs.org/docs" color="secondary">
              <h3>Next.{`js ${arrow}`}</h3>
              <p>{t('home:next-docs')}</p>
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button href="https://github.com/vinissimus/next-translate" color="secondary">
              <h3>{`Learn ${arrow}`}</h3>
              <p>{t('home:plugin-docs')}</p>
            </Button>
          </Grid>
        </Grid>
      </main>
    </Layout>
  );
}

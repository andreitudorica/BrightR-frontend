import Link from 'next/link';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import Layout from 'components/Layout';
import { Button, CardActionArea, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

export default function Home() {
  const { t, lang } = useTranslation();
  const isRTL = lang === 'ar' || lang === 'he';
  const arrow = isRTL ? String.fromCharCode(8592) : String.fromCharCode(8594);
  const router=useRouter();
  console.log(router);

  return (
    <Layout>
      <main dir={isRTL ? 'rtl' : 'ltr'}>

        <h2 className="description">
          {t('home:description')} <code>This is the post/id/commentId page</code>
        </h2>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Link href="/" locale="en">
              <CardActionArea>
                <h3>{t('home:english')}</h3>
                <p>
                  {t('home:change-to')} {t('home:english')}
                </p>
              </CardActionArea>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="/" locale="ca">
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

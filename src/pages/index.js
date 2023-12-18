import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const now = new Date();

const LookerStudioReport = () => {
  return (
    <iframe
      src="https://lookerstudio.google.com/embed/reporting/0dcb9a07-35b3-4337-bfc8-b75e7ec9f3df/page/DBskD"
      frameBorder="0"
      width="1125"
      height="875"
      style={{ border: 0 }}
      allowFullScreen
    ></iframe>
  );
};

const Page = () => (
  <>
    <Head>
      <title>
        Overview | IQMDIS Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <LookerStudioReport />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;

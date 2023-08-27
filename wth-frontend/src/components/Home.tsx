import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" >
        Unicents
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Home() {
  return (
    <Grid container component="main" sx={{ overflow: 'hidden', height: '100%' }}>
      <Grid
        item
        xs={0}
        sm={0}
        md={0}
        sx={{
          position: 'relative',
          backgroundImage:
            'url(https://blog.pearsoninternationalschools.com/wp-content/uploads/2020/01/AL1318051_Original_1800x900-1132x670.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -30%)',
            textAlign: 'top',
            color: 'black',
          }}
        >
          <h1>Navigating University Finances with Ease.</h1>
          <Copyright sx={{ mt: 2, color: 'inherit' }} />
        </Box>
      </Grid>
    </Grid>
  );
}
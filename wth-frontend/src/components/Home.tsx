import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <Grid container component="main" sx={{ overflow: 'hidden', height: '92.9vh' }}>
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
            top: '15%',
            left: '50%',
            transform: 'translate(-50%, -30%)',
            textAlign: 'top',
            color: 'black',
          }}
        >
          <h1>Navigate University Finances with Ease.</h1>
          <Copyright sx={{ mt: 2, color: 'inherit' }} />
        </Box>
      </Grid>
    </Grid>
  );
}
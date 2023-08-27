import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Checkbox, Container, FormControlLabel, FormGroup } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const donors = [
//  {
//   name: "ZVC Bank",
//   description: "Aims to help those within ASEAN counties and planning to further edcation within finance service sector",
//   index: 1
//  }, 
//  {
//   name: "Ali Connors",
//   description: "I am a fellow LGBTQ+ ally who hopes that my contribution would greatly impact the university journey of one member of the LGBTQ+ community",
//   index: 2
//  }, 
//  {
//   name: "Sandra Adams",
//   description: "Education has the potential to transform lives. I am committed to supporting a student who is dedicated but may be struggling financially",
//   index: 3
//  },
//  {
//   name: "James",
//   description: "Wish do donate to those who are unable to afford education.",
//   index: 3
//  }
// ];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function DonorBar() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://2530rs15me.execute-api.ap-southeast-1.amazonaws.com/dev/uni/getAllUnis");
        const data = await response.json();
        if (!data.error) {
          setUniversities(data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Donor List
            </Typography>
          </Container>
        </Box>
        <Grid container spacing={1}>
          <Grid container item xs={2} justifyContent="center">
            
            <FormGroup>
              <Typography sx={{fontWeight: 'bold', mb: 3, fontSize: 20}}> Nationality </Typography>
              <FormControlLabel control={<Checkbox />} label="ASEAN" />
              <FormControlLabel control={<Checkbox />} label="Singaporean" />
              <FormControlLabel control={<Checkbox />} label="Malaysian" />
              <FormControlLabel control={<Checkbox />} label="Australian" />
            </FormGroup>
          </Grid>
          <Grid item xs={10}>
            <Container sx={{ py: 2 }} maxWidth="lg">
              {/* End hero unit */}
              <Grid container spacing={4}>
              {universities.map((university: {
              university: string,
              location: string,
              scholarships : [{name: string}]
            }, index) => (
                <Grid item key={index} xs={12} sm={6} md={6}>
                  {university.scholarships.map((scholarship: {name: string}) => (
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image={'https://source.unsplash.com/random?wallpapers'}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {scholarship.name}
                      </Typography>
                      <Typography>
                        {university.university}
                      </Typography>
                      <Typography>
                        {university.location}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">
                        <Link href="/" color="inherit" underline="none">
                          View More
                        </Link>
                      </Button>
                    </CardActions>
                  </Card>
                  ))}
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>

        </Grid>
        
      </main>
      {/* Footer */}
      {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Education for All
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          no matter who you are.
        </Typography>
        <Copyright />
      </Box> */}
      {/* End footer */}
    </ThemeProvider>
  );
}

function DonorList() {
  return (<><DonorBar /></>);
}

export default DonorList;

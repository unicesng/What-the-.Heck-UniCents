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

const donors = [
 {
  name: "ZVC Bank",
  description: "Aims to help those within ASEAN counties and planning to further edcation within finance service sector",
  index: 1
 }, 
 {
  name: "Ali Connors",
  description: "I am a fellow LGBTQ+ ally who hopes that my contribution would greatly impact the university journey of one member of the LGBTQ+ community",
  index: 2
 }, 
 {
  name: "Sandra Adams",
  description: "Education has the potential to transform lives. I am committed to supporting a student who is dedicated but may be struggling financially",
  index: 3
 },
 {
  name: "James",
  description: "Wish do donate to those who are unable to afford education.",
  index: 3
 }
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function DonorBar() {
  return (
    // <List sx={{ width: "100%", maxWidth: 850, bgcolor: "background.paper" }}>
    //   <ListItem alignItems="flex-start">
    //     <ListItemAvatar>
    //       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    //     </ListItemAvatar>
    //     <ListItemText
    //       primary="LGBTQ+ friendly sponsorship :)"
    //       secondary={
    //         <React.Fragment>
    //           <Typography
    //             sx={{ display: "inline" }}
    //             component="span"
    //             variant="body2"
    //             color="text.primary"
    //           >
    //             Ali Connors
    //           </Typography>
    //           {" — I am a fellow LGBTQ+ ally who hopes that my contribution would greatly impact the university journey of one member of the LGBTQ+ community. My mission and personal vis"}
    //         </React.Fragment>
    //       }
    //     />
    //   </ListItem>
    //   <Divider variant="inset" component="li" />
    //   <ListItem alignItems="flex-start">
    //     <ListItemAvatar>
    //       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    //     </ListItemAvatar>
    //     <ListItemText
    //       primary="A Tribute to my Brother"
    //       secondary={
    //         <React.Fragment>
    //           <Typography
    //             sx={{ display: "inline" }}
    //             component="span"
    //             variant="body2"
    //             color="text.primary"
    //           >
    //             to Alex
    //           </Typography>
    //           {
    //             " — my parents would like to gift the money that was meant for my younger brother to someone who deserves it. "
    //           }
    //         </React.Fragment>
    //       }
    //     />
    //   </ListItem>
    //   <Divider variant="inset" component="li" />
    //   <ListItem alignItems="flex-start">
    //     <ListItemAvatar>
    //       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    //     </ListItemAvatar>
    //     <ListItemText
    //       primary="Donations!"
    //       secondary={
    //         <React.Fragment>
    //           <Typography
    //             sx={{ display: "inline" }}
    //             component="span"
    //             variant="body2"
    //             color="text.primary"
    //           >
    //             Sandra Adams
    //           </Typography>
    //           {
    //             " — hope everyone is doing well! education has the potential to transform lives. i am committed to supporting a student who is dedicated but may be struggling financially"
    //           }
    //         </React.Fragment>
    //       }
    //     />
    //   </ListItem>
    // </List>

    
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
                {donors.map((donor) => (
                  <Grid item key={donor.index} xs={12} sm={6} md={6}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          // 16:9
                          pt: '56.25%',
                        }}
                        image="https://source.unsplash.com/random?wallpapers"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {donor.name}
                        </Typography>
                        <Typography>
                          {donor.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">View More</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>

        </Grid>
        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

function DonorList() {
  return (<DonorBar />);
}

export default DonorList;

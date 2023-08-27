import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cardsData = [
  {
    title: "Uni Comparator",
    description: "Compare costs across universities for prospective university students. Understand available financial assistance schemes tailored to each user's eligibility criteria",
    imageUrl: "https://thumbs.dreamstime.com/b/comparaci%C3%B3n-de-smartphones-para-una-chica-joven-eligiendo-entre-dos-caracter%C3%ADsticas-productos-clasificaci%C3%B3n-aspecto-tel%C3%A9fonos-163901548.jpg",
  },
  {
    title: "Donor List",
    description: "Donor Matching Platform to enhance opportunities for students to secure scholarships & improve convenience for donations",
    imageUrl: "https://www.organdonor.gov/sites/default/files/organ-donor/learn/donor-man-and-recipient-woman.png"
  },
  {
    title: "Discussion Forum",
    description: "Discussion Forums to connect with like-minded individuals & share tips to be money smart",
    imageUrl: "data:image/png;base64,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",
  },
  // Add more cards with unique properties as needed
];

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
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
              About Unicents
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              From comparing university tuition fees to identifying potential
              donors and uncovering money-saving tips from fellow students,
              we've got all your needs covered.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cardsData.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={card.imageUrl}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Click here</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Unicents
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Don't worry, there is more to come.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

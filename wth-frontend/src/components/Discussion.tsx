import { Button } from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function MakeAPostButton() {
  return <Button variant="outlined">Create a new post</Button>;
  //   return <button>Test</button>;
}

function ForumList() {
  return (
    <List sx={{ width: "100%", maxWidth: 850, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="cheap and good supper spots in the NUS area? please rec!!"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {
                " — hello :) a year 1 CS student here from raffles hall, just wondering where do nus kids go for supper? actly don't even need to be for supper, but normal meals also can. thanks"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="TO MY NTU AND NUS PEEPS - Hall Must-Buys!"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {
                " — As a year 2 in NTU hall 17, I would like to recommend the following items for your hall stay. you can find most of these items on Shopee for real cheap but if you"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="tips for saving money in Uni?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {
                " — i am funding my uni education and have recently got a part time job since i have some time to spare before uni. can someone provide tips on either making more money"
              }
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

function Discussion() {
  return (
    <>
      <p></p>
      <MakeAPostButton />
      <ForumList />
      <ForumList />
    </>
  );
}

export default Discussion;

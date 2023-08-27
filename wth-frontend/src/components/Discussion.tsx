import { Box, Button, Modal } from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Alert from "@mui/material/Alert";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function MakeAPostButton() {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <>
  
  <Button variant="contained" onClick={handleOpen} style={{marginLeft:"200px", marginTop:"50px"}}>Create a new post</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
    <Box sx={{ ...style, width: 500 }}>
      <Box sx={{ width: '100%' }}>
        <Collapse in={openAlert}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Your Thread has been created!
          </Alert>
        </Collapse>
      </Box>
    <br/>
      <h2 id="parent-modal-title">Start a thread!</h2>
      <p id="parent-modal-description">Please fill in the following details</p>

        <TextField id="outlined-basic" label="Title" variant="outlined" style={{width:"450px"}}/>
        <br/>
        <br/>
        <TextField
          id="outlined-multiline-static"
          label="Post Description"
          multiline
          rows={5}
          defaultValue="Please add a description to your post"
          style={{width:"450px"}}
        />
        <br/><br/>
        <Button variant="outlined" 
              onClick={() => {
                setOpenAlert(true);
              }}>Submit</Button>
        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
      
    </Box>
  </Modal>
  </>
  );
  
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
       <div className="paddedSides">
        <br/><br/>
        <Grid 
        container 
        direction="row"
        justifyContent="space-around"
        >
          <Grid item xs={6}>
            <h1>Discussion Forum</h1>
            <p>Feeling lose and need help with picking a university? Post a questions and let our community help you out</p>
          </Grid>
          <Grid item xs={4}>
            <Item><MakeAPostButton /></Item>
          </Grid>
        </Grid> 
        <Grid 
        container 
        direction="row"
        justifyContent="space-around"
        >
          <Grid item xs={8}>
            <h2>Trending Post</h2>
            <ForumList />
            <br/>
            <h2>Recent Post</h2>
            <ForumList />  
          </Grid>
          <Grid item xs={2}>
            
          </Grid>
        </Grid>
        
      </div>
    </>
  );
}

export default Discussion;

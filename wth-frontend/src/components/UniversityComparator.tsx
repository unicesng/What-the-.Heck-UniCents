import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function UniversityComparator (){
  return (
    <Box sx={{ display: 'flex', '& > :not(style)': { m: 1 } }}>
      <Stack spacing={2} direction="column" width="20%">
        <Button variant="contained">+ Create a Plan</Button>
        <Button variant="outlined">Plan 1: SMU Law</Button>
        <Button variant="outlined">Plan 2: NUS CS + Hall</Button>
        <Button variant="outlined">Plan 3: NUS BA, no Hall</Button>
        <Button variant="contained" >Compare here!</Button>
      </Stack>
      <Stack spacing={2} sx={{ width: '100%' }} direction="column">
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}  >
      <Box sx={{ my: 3, mx: 2 }} >
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Create a Plan
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              Total Expenses: $49,950 
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Enter your information for us to help get your best estimated expenses
        </Typography>
      </Box>
      <Divider variant="middle" />
      <p></p>
      <Typography gutterBottom variant="body1" color="blue">
          Select University & Course
        </Typography>
      <Autocomplete
          disableClearable
          options={Universities.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search University"
              InputProps={{
                ...params.InputProps,
                type: 'search',
                style: { width: '100%' }
              }}

            />
          )}
        />
        <Autocomplete
          options={Universities.map((option) => option.course)}
          renderInput={(params) => (
            <TextField {...params} label="Course" 
            InputProps={{
              ...params.InputProps,
              type: 'search',
              style: { width: '100%' }
            }}
            />
          )}
        />
      <Box sx={{ m: 2 }}>
      <Typography gutterBottom variant="body1" color="blue">
          Select nationality
      </Typography>
      <p></p>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Singaporean Citizen" />
          <Chip label="Singapore PR" />
          <Chip label="Non-Singaporean" />
        </Stack>
        <p></p>
        You are eligible for a 4 year tuition grant.
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
      <Typography gutterBottom variant="body1" color="blue">
          Select Gross Household Income/Per Capita Income
        </Typography>
        <p></p>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="GHI ≤$3,000 or PCI ≤ $750" />
          <Chip label="GHI $3,001-$4,400 or PCI $751-$1,100" />
          <Chip label="GHI $4,401-$7,500 or PCI $1,101-$1,875" />
          <Chip label="GHI $7,501-$10,000 or PCI $1,876-$2,500" />
          <Chip label="Others" />
        </Stack>
        <p></p>
        You are eligible for Higher Education Community Bursary: $6,300 per annum.
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
      <Typography gutterBottom variant="body1" color="blue">
          Graduating in
        </Typography>
        <p></p>
        <Slider
          aria-label="Temperature"
          defaultValue={4}
          valueLabelDisplay="auto"
          step={0.5}
          marks
          min={1}
          max={8}
        />
        You are graduating in 4 years      
        </Box>

      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
      <Typography gutterBottom variant="body1" color="blue">
          Personalise the expense tracker with other categories
        </Typography>
        <Button variant="contained">
          Add New Expense
        </Button>
      </Box>

      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>Confirm</Button>
      </Box>
    </Box>

      </Stack>
    </Box>
  );
}

export default UniversityComparator;


const Universities = [
  { title: 'Singapore Management University', course: "Law" },
  { title: 'National University of Singapore', course: "Business Analysis" },
  { title: 'Nanyang Technology University', course: "Mechanical Engineering" },


]
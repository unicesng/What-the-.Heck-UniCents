import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getNativeSelectUtilityClasses } from '@mui/material';

function UniversityComparator (){
  return (
    <Box sx={{ display: 'flex', '& > :not(style)': { m: 1 } }}>
      <Stack spacing={2} direction="column" width="20%">
        <Button variant="contained">+ Create a Plan</Button>
        <Button variant="outlined">Plan 1: SMU Law</Button>
        <Button variant="outlined">Plan 2: NUS CS + Hall</Button>
        <Button variant="outlined">Plan 3: NUS BA, no Hall</Button>
      </Stack>
      <Stack spacing={50} sx={{ width: '100%' }} direction="row">
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
                style: { width: '500%' }
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
              style: { width: '500%' }
            }}
            />
          )}
        />
      </Stack>
    </Box>
  );
}

export default UniversityComparator;

const Universities = [
  { title: 'Singapore Management University', course: "Law" },
  { title: 'Singapore Management University', course: "Business" },
  { title: 'National University of Singapore', course: "Computer Science" },
  { title: 'National University of Singapore', course: "Business Analysis" },
  { title: 'Nanyang Technology University', course: "Mechanical Engineering" },


]
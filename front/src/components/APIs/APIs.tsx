import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

const APIs = () => {

  const [api, setApi] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setApi(event.target.value);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select API</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={api}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="igdb">igdb</MenuItem>
          <MenuItem value="playnite">playnite</MenuItem>
          <MenuItem value="steamdbengine">steamdb (info about Engines)</MenuItem>
          <MenuItem value="epicgames">epic games</MenuItem>
          <MenuItem value="pcgamingwiki">pcgamingwiki (info about Engines)</MenuItem>
          <MenuItem value="steamdb">steamdb</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default APIs;

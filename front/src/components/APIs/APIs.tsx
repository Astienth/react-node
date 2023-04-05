import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

const APIs = () => {

  const [api, setApi] = useState<string>('');
  const [apiData, setApiData] = useState<any>({});

  const handleChange = (event: SelectChangeEvent<string>) => {
    setApi(event.target.value);
    fetch('http://localhost:4000/apis/'+event.target.value,
    {
      method: 'GET',
      headers: {'Content-Type':'application/json'}
    })
    .then(res => {
      return res.json();
    })
    .then(data => 
      {
        setApiData(data);
        //console.log(data);
      });
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select API</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={api}
          label="Api"
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

import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { CardContent, Typography } from '@mui/material';
import "../../styles/aPIs.scss";

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
        console.log(data);
      });
  };

  const renderList = () => {
    console.log("LENGTH " + Object.entries(apiData).length);
    if (Object.entries(apiData).length === 0)
    {
      console.log("RETURN");
      return (        
        <CardContent className='gameCard'>
          <Typography variant="h5" component="div">
              AUCUN FLUX SELECTIONNE
          </Typography>
        </CardContent>
      );
    }
    if (apiData.code)
    {
      console.log("CODE");
      return (        
        <CardContent className='gameCard'>
          <Typography variant="h5" component="div">
              AUCUN FLUX DISPONIBLE
          </Typography>
        </CardContent>
      );
    }
    return apiData.map((_item: any, index: React.Key | null | undefined) => {                 
      return (
        <CardContent className='gameCard' key={index}>
          <Typography variant="h5" component="div">
              {_item.name}
          </Typography>
          <Typography>
              {`Url: ${_item.url}`}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {_item.summary}
          </Typography>
          <Typography variant="body2" className='review'>
              {`Hypes: ${_item.hypes}`}
          </Typography>
      </CardContent>
      )
    });
  }

  return (
    <div className="fluxSelect">
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
      {renderList()}
    </div>
  );
}

export default APIs;

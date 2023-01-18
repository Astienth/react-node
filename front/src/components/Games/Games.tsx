import React, {FC} from 'react';
import Home from '../Home/Home';

export interface IGamesProps {
  email: string,
  name: string,
}


const Games: FC<IGamesProps> = (props) => {
  console.log({...props});
  const {email, name } = props;
  return (
    <>
      {email}
      {name}
      <Home {...props} />
    </>
  );
}

export default Games;

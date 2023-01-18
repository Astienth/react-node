import * as React from 'react';
import { Link } from 'react-router-dom';

export interface INavbarProps {
}

export default function Navbar (props: INavbarProps) {
  return (
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/games">Games</Link>
    </nav>
  );
}

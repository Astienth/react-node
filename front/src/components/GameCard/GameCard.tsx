import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { render } from '@testing-library/react';

export interface Iconsole {
    name: string
}

export interface IGameDataProps {
    gameData: {
        title: string,
        genre: {
            name: string,
        },
        consoles: Array<Iconsole>,
        review: number,
    }
}

const renderConsoles : any = (consoles: Array<Iconsole>) => {
    const res = consoles.map((consol, index) => {                 
        return (
            <Typography key={index} sx={{ mb: 1.5 }} color="text.secondary">
                {consol.name}
            </Typography>
        )
    });
    return res;
}

const GameCard = ({ gameData: { title, genre, review, consoles }}: IGameDataProps ) => {
    return (
        <>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="h6">
                    {renderConsoles(consoles)}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {genre.name}
                </Typography>
                <Typography variant="body2">
                    {`${review}/10`}
                </Typography>
            </CardContent>
        </>
    );
}

export default GameCard;

import { CardContent, Typography } from '@mui/material';

export interface IGameDataProps {
    gameData: {
        title: string,
        genre: {
            name: string,
        },
        review: number,
    }
}

const GameCard = ({ gameData: { title, genre, review }}: IGameDataProps ) => {
    return (
        <>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
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

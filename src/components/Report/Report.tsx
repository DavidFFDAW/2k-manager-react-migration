import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { transformDate } from '../../utilities/date.normalizer.utility';
import { makePrivateRoute } from '../../utilities/private.route.utility';

interface ReportProps {
    id?: number;
    title: string;
    content?: string;
    excerpt: string;
    date: string;
    image: string;
    complete?: boolean;
}

export default function Report(props: ReportProps): JSX.Element {
    const link = makePrivateRoute('news/report/' + props.id);

    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardMedia component="img" height="300" image={props.image} alt={props.title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.excerpt}
                </Typography>
            </CardContent>
            <CardActions className="flex space">
                <Typography>{transformDate(props.date)}</Typography>
                {!props.complete && <Link to={link}>Seguir leyendo...</Link>}
            </CardActions>
        </Card>
    );
}

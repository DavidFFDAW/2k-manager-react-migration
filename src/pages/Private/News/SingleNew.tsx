import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { BoxContainer } from '../../../components/BoxContainer/BoxContainer';
import { useFetchSingleNew } from './hooks/useNews';
import { useParams } from 'react-router-dom';

export default function News(): JSX.Element {
    const { id } = useParams();
    const { report, isFetching } = useFetchSingleNew(Number(id));

    if (isFetching) {
        return (
            <BoxContainer>
                <h1>Loading...</h1>
            </BoxContainer>
        );
    }

    return (
        <BoxContainer title={report.title}>
            <Box
                component="img"
                sx={{
                    height: 325,
                    width: '100%',
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                }}
                alt="Post image"
                src={report.image}
            />
            <Typography variant="h4">{report.title}</Typography>

            <Divider orientation="horizontal" style={{ margin: 20 }} />

            <Typography variant="body2">{report.content}</Typography>
        </BoxContainer>
    );
}

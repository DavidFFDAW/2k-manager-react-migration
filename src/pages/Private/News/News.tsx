import React from 'react';
import Stack from '@mui/material/Stack';
import Report from '../../../components/Report/Report';
import { BoxContainer } from '../../../components/BoxContainer/BoxContainer';
import { useFetchNews } from './hooks/useNews';

export default function News(): JSX.Element {
    const { reports, isFetching } = useFetchNews();

    if (isFetching) {
        return (
            <BoxContainer>
                <h1>Loading...</h1>
            </BoxContainer>
        );
    }

    return (
        <BoxContainer title="Noticias">
            <Stack spacing={5}>
                {reports.map((item: any, index: number) => (
                    <Report
                        key={index}
                        title={item.title}
                        excerpt={item.content.substring(0, 80) + '...'}
                        image={item.image}
                        date={item.created_at}
                        id={item.id}
                    />
                ))}
            </Stack>
        </BoxContainer>
    );
}

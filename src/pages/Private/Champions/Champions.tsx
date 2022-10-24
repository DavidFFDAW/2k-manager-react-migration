import { useFetchReigns } from './hooks/useFetchReigns';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { BoxContainer } from '../../../components/DashboardLink/BoxContainer';
import { ChampionsTable } from '../../../components/Table/ChampionsTable';
import { TableSkeleton } from '../../../components/Table/TableSkeleton';

export default function Champions() {
    const { reigns, isFetching } = useFetchReigns();

    if (isFetching) {
        return (
            <BoxContainer>
                <TableSkeleton />
            </BoxContainer>
        );
    }

    return (
        <>
            <BoxContainer>
                <h3>Singles</h3>
                <ChampionsTable rows={reigns.currentSingles} />
            </BoxContainer>

            <Fab color="primary" aria-label="add" className="fab">
                <AddIcon />
            </Fab>

            <BoxContainer>
                <h3>Tag Teams</h3>
                <ChampionsTable rows={reigns.currentTagTeams} />
            </BoxContainer>
        </>
    );
}

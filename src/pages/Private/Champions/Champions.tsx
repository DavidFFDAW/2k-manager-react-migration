import { useFetchReigns } from './hooks/useFetchReigns';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { BoxContainer } from '../../../components/BoxContainer/BoxContainer';
import { ChampionsTable } from '../../../components/Table/ChampionsTable';
import { TableSkeleton } from '../../../components/Table/TableSkeleton';

export default function Champions({ hasAdminPermission }: any) {
    const { reigns, isFetching } = useFetchReigns();
    const isAdmin = Boolean(hasAdminPermission) ? hasAdminPermission : false;

    if (isFetching) {
        return (
            <BoxContainer>
                <TableSkeleton />
            </BoxContainer>
        );
    }

    return (
        <>
            <BoxContainer title="Singles">
                <ChampionsTable rows={reigns.currentSingles} />
            </BoxContainer>

            {isAdmin && (
                <Fab color="primary" aria-label="add" className="fab">
                    <AddIcon />
                </Fab>
            )}

            <BoxContainer title="Tag Teams">
                <ChampionsTable rows={reigns.currentTagTeams} />
            </BoxContainer>
        </>
    );
}

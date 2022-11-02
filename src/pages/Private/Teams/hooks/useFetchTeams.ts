import { useEffect, useState } from 'react';
import { AppConfig } from '../../../../AppConfig';
import { useHttp } from '../../../../hooks/useHttp';
import { BaseResponse, Team } from '../../../../models/API';

interface TeamResponse extends BaseResponse {
    teams: Team[];
}

export function useFetchTeams() {
    const [teams, setTeams] = useState<Team[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    const { get } = useHttp();

    useEffect(() => {
        get({ endpoint: AppConfig.TEAMS_ENDPOINT })
            .then((response: TeamResponse) => {
                console.log(response);
                setTeams(response.teams);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    return { teams, isFetching };
}

import { useEffect, useState } from 'react';
import { AppConfig } from '../../../../AppConfig';
import { useHttp } from '../../../../hooks/useHttp';
import { BaseResponse, SingleTeam, Team } from '../../../../models/API';

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
                setTeams(response.teams);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    return { teams, isFetching };
}

export function useFetchSingleTeamDetails(id: number): { team: SingleTeam; isFetching: boolean } {
    const endpoint = `${AppConfig.SINGLE_TEAM_ENDPOINT}${id}`;
    const [team, setTeam] = useState<SingleTeam>({} as SingleTeam);
    const [isFetching, setIsFetching] = useState<boolean>(true);

    const { get } = useHttp();

    useEffect(() => {
        get({ endpoint })
            .then((response: any) => {
                setTeam(response.team);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    return { team, isFetching };
}

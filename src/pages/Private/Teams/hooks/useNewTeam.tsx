import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppConfig } from '../../../../AppConfig';
import { useHttp } from '../../../../hooks/useHttp';
import { PrivateRoutes } from '../../../../models/routes';
import { makePrivateRoute } from '../../../../utilities/private.route.utility';

export function useWrestlers() {
    const [wrestlers, setWrestlers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const { get } = useHttp();

    useEffect(() => {
        get({ endpoint: AppConfig.WRESTLERS_ENDPOINT })
            .then(response => {
                setWrestlers(response.data);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    return {
        wrestlers,
        isFetching,
    };
}

export function useNewTeam() {
    const { post } = useHttp();
    const navigate = useNavigate();
    const [team, setTeam] = useState<any>({
        name: '',
        average: '',
        brand: 1,
        members: {
            0: '',
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '',
        },
    });

    const updateName = (name: string) => {
        setTeam({ ...team, name });
    };

    const updateAverage = (average: number) => {
        setTeam({ ...team, average });
    };

    const updateBrand = (brand: number) => {
        setTeam({ ...team, brand });
    };

    const updateMembers = (value: any, index: number) => {
        setTeam({ ...team, members: { ...team.members, [index]: value } });
    };

    const submitForm = (ev: any) => {
        ev.preventDefault();
        const { name, average, brand, members } = team;
        const membersArray = Object.values(members);
        const filteredMembers = membersArray.filter(member => member !== '');
        const notRepeatedMembers = [...new Set(filteredMembers)];
        console.log(notRepeatedMembers);

        post({
            endpoint: AppConfig.CREATE_TEAM_ENDPOINT,
            body: {
                name,
                average,
                brand,
                members: notRepeatedMembers,
            },
        }).then(response => {
            if (response.code === 200) {
                navigate(makePrivateRoute(PrivateRoutes.TEAMS));
            }
        });
    };

    return {
        team,
        updateName,
        updateAverage,
        updateBrand,
        updateMembers,
        submitForm,
    };
}

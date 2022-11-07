import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image } from '../../../components/Image';
import { transformDate } from '../../../utilities/date.normalizer.utility';
import { useFetchSingleTeamDetails } from './hooks/useFetchTeams';

const separation: number = 85;

export default function SingleTeam() {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <h3>Wrong request: Missing ID</h3>;
    }

    const { team, isFetching } = useFetchSingleTeamDetails(Number(id));

    if (isFetching) {
        return <h3>Loading...</h3>;
    }

    return (
        <div>
            <div className="team_grid" style={{ background: `url(${team.brand.background})` }}>
                <div>
                    {team.members.map((member, index) => {
                        const marginCount = index * separation;

                        return (
                            <Image
                                key={member.name}
                                className="team_member_image"
                                src={member.image_name}
                                alt={member.name}
                                style={{ paddingLeft: `${marginCount}px` }}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="body_rest">
                <h3>{team.name}</h3>
                <p>{team.brand.name}</p>
                <p>Created at: {transformDate(team.created_at)}</p>
            </div>
        </div>
    );
}

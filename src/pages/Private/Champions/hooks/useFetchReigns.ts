import { useState, useEffect } from 'react';
import { AppConfig } from '../../../../AppConfig';
import { useHttp } from '../../../../hooks/useHttp';
import { ChampionsPartialResponse } from '../../../../models/API';

export function useFetchReigns() {
    const [reigns, setReigns] = useState<ChampionsPartialResponse>([] as any);
    const [isFetching, setIsFetching] = useState(true);

    const { get } = useHttp();

    useEffect(() => {
        get({ endpoint: AppConfig.API_BASE_URL + 'champions/get/reigns' })
            .then(response => {
                console.log(response);
                setReigns(response.reigns);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    return { reigns, isFetching };
}

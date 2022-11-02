import { useState, useEffect } from 'react';
import { AppConfig } from '../../../../AppConfig';
import { useHttp } from '../../../../hooks/useHttp';
import { ChampionsPartialResponse } from '../../../../models/API';

export function useFetchReigns() {
    const [reigns, setReigns] = useState<ChampionsPartialResponse>([] as any);
    const [isFetching, setIsFetching] = useState(true);

    const { get } = useHttp();

    useEffect(() => {
        const abortController: AbortController = new AbortController();
        const signal: AbortSignal = abortController.signal;

        get({ endpoint: AppConfig.API_BASE_URL + 'champions/get/reigns' }, signal)
            .then(response => {
                setReigns(response.reigns);
            })
            .finally(() => {
                setIsFetching(false);
            });
        
        return () => {
            console.log('request has been aborted');            
            abortController.abort();
        }
    }, []);

    return { reigns, isFetching };
}

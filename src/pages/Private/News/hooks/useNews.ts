import { useState, useEffect } from 'react';
import { AppConfig } from '../../../../AppConfig';
import { useHttp } from '../../../../hooks/useHttp';
import { NewsResponse, Report } from '../../../../models/API';

export function useFetchNews() {
    const [reports, setReports] = useState<NewsResponse[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    const { get } = useHttp();

    useEffect(() => {
        get({ endpoint: AppConfig.NEWS_ENDPOINT })
            .then(response => {
                setReports(response.news);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    return { reports, isFetching };
}

export function useFetchSingleNew(reportID: number) {
    const [report, setReport] = useState<Report>({} as any);
    const [isFetching, setIsFetching] = useState(true);

    const { get } = useHttp();

    useEffect(() => {
        get({ endpoint: `${AppConfig.NEWS_ENDPOINT}?id=${reportID}` })
            .then(response => {
                setReport(response.report);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    return { report, isFetching };
}

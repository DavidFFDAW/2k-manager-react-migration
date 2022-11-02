import { useSnackbar, VariantType } from 'notistack';
import { useCallback } from 'react';
import HttpService, { HttpRequest } from '../services/http.service';

export function useHttp() {
    const snackbar = useSnackbar();

    const showSnackbar = (message: string, variant: VariantType) => {
        snackbar.enqueueSnackbar(message, { variant });
    };

    const processRequest = (fetchRequest: Promise<any>): Promise<any> => {
        return fetchRequest
            .then((response: any) => {
                if (response.code !== 200) {
                    throw new Error(response.message);
                }
                return response;
            })
            .catch((error: Error) => {
                showSnackbar(error.message, 'error');
            });
    };

    const get = useCallback((request: HttpRequest) => {
        return processRequest(HttpService.get(request.endpoint));
    }, []);

    const post = useCallback((request: HttpRequest) => {
        return processRequest(HttpService.post(request.endpoint, request.body));
    }, []);

    const put = useCallback((request: HttpRequest) => {
        return processRequest(HttpService.put(request.endpoint, request.body));
    }, []);

    const deleteRq = useCallback((request: HttpRequest) => {
        return processRequest(HttpService.delete(request.endpoint));
    }, []);

    return { get, post, put, deleteRq };
}

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
                if (error.name !== 'AbortError') {
                    showSnackbar(error.message, 'error');
                }
            });
    };

    const get = useCallback((request: HttpRequest, signal: AbortSignal) => {
        return processRequest(HttpService.get(request.endpoint, signal));
    }, []);

    const post = useCallback((request: HttpRequest, signal: AbortSignal) => {
        return processRequest(HttpService.post(request.endpoint, request.body, signal));
    }, []);

    const put = useCallback((request: HttpRequest, signal: AbortSignal) => {
        return processRequest(HttpService.put(request.endpoint, request.body, signal));
    }, []);

    const deleteRq = useCallback((request: HttpRequest, signal: AbortSignal) => {
        return processRequest(HttpService.delete(request.endpoint, signal));
    }, []);

    return { get, post, put, deleteRq };
}

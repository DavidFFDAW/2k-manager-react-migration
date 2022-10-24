import { PrivateRoutes } from '../models/routes';

export const makePrivateRoute = (endpoint: string) => {
    const route = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return `/${PrivateRoutes.PRIVATE}/${route}`;
};

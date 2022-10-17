export interface PrivateRouteProps {
    children?: React.ReactNode;
    path: string;
    exact?: boolean;
    element?:
        | React.ComponentType<any>
        | React.ReactElement<any>
        | React.LazyExoticComponent<any>
        | null;
}

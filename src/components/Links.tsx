import { Link } from 'react-router-dom';
import { AppRoutes, PrivateRoutes } from '../models/routes';

export default function Links() {
    const DashboardRoute = `${PrivateRoutes.PRIVATE}/${PrivateRoutes.DASHBOARD}`;
    return (
        <div className="Links">
            <h1>Links</h1>

            <div>
                <p>
                    <Link to="/">Home</Link>
                </p>
                <p>
                    <Link to={AppRoutes.LOGIN}>Login</Link>
                </p>
                <p>
                    <Link to={PrivateRoutes.PRIVATE}>Private</Link>
                </p>
                <p>
                    <Link to={DashboardRoute}>Dashboard</Link>
                </p>
            </div>
        </div>
    );
}

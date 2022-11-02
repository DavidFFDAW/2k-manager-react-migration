import { Link } from 'react-router-dom';
import { makePrivateRoute } from '../../utilities/private.route.utility';

interface MenuLinkProps {
    to: string;
    label: string;
    icon: JSX.Element;
}

export function MenuLink({ to, label, icon }: MenuLinkProps) {
    return (
        <Link className="flex start" style={{ width: '100%', textDecoration: 'none' }} to={makePrivateRoute(to)}>
            {icon} <label style={{ marginLeft: 10 }}>{label}</label>
        </Link>
    );
}

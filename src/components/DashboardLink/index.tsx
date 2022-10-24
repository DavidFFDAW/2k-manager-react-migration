import { Link } from 'react-router-dom';
import './index.css';

interface IDashboardLink {
    link: string;
    title: string;
    icon: JSX.Element;
}

export function DashboardLink(props: IDashboardLink) {
    return (
        <Link to={props.link} className="dashboard-link">
            <div className="box">
                <div className="flex center primary-color">{props.icon}</div>
                <div className="flex center primary-color">
                    <span>{props.title}</span>
                </div>
            </div>
        </Link>
    );
}

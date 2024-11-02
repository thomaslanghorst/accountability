import { FC } from 'react';
import { useNavigate } from 'react-router-dom';


export const Navbar: FC = () => {

    const navigate = useNavigate();

    return (
        <ul className="menu bg-base-200 ">
        <li><a onClick={() => navigate('/dashboard')}>Dashboard</a></li>
        <li><a onClick={() => navigate('/sprints')}>Sprints</a></li>
      </ul>
    
    )
}
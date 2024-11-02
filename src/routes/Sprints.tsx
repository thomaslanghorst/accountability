import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Sprints: FC = () => {
    return (
        <div>
            <p className="text-xl">SPRINTS VIEW</p>
            <Outlet />
        </div>
    )
}
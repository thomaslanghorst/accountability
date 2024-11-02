import { FC } from "react";
import { useParams } from "react-router-dom"

export const Sprint: FC = () => {

    const params = useParams();

    return (
        <p className="text-xl">ROOT YO: {params.sprintId}</p>
    )
}
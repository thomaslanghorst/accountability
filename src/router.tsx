import { createBrowserRouter } from "react-router-dom";

import { Sprint } from "./routes/Sprint";
import { Sprints } from "./routes/Sprints";
import { Error } from "./routes/Error";
import { Root } from "./routes/Root";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        ErrorBoundary: Error,
        children: [
            {
                path: "/sprints",
                Component: Sprints,
                ErrorBoundary: Error,
                children: [
                    {
                        path: ":sprintId",
                        Component: Sprint,
                    }
                ],
            }
        ]

    },
]);

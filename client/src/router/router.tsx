import {
    createBrowserRouter
} from "react-router";

import { App } from "../app/app";
import { ProcessListPage } from "../page/process-list-page";
import { ProcessPage } from "../page/process-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <ProcessListPage /> 
      }, 
      {
        path: 'process/:123',
        element: <ProcessPage />
      }
    ]
  },
]);


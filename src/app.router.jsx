import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import PageRoutes from "./pages/pages.routes";

const ApplicationRoutes = [...PageRoutes];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {ApplicationRoutes.map((route, index) => {
          // TODO: isAuthed update to some reference name that is more descriptive @michel had a good name I can't remember
          const { path, component: Component, isAuthed } = route;

          return (
            <Route
              key={`route-${index}`}
              path={path}
              exact
              render={(props) => {
                // if (isAuthed && !isUserAuthed)
                //   return (
                //     <Redirect
                //       key={`route-redirect-${index}`}
                //       to={{
                //         pathname: "/login",
                //         state: {
                //           from: props.location,
                //         },
                //       }}
                //     />
                //   );
                return <Component {...props} />;
              }}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;

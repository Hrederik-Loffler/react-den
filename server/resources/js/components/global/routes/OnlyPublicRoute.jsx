import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useUser } from "@provider/User";

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useUser();
    return (
        <Route
            {...rest}
            render={(props) =>
                !currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}

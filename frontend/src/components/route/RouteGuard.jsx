// import { Fragment } from "react"
// import { Navigate, useLocation } from "react-router-dom"

// function RouteGuard({authenticated, user, element}){
//     const location = useLocation()
//     console.log(authenticated, user);
    

//     if(!authenticated && !location.pathname.includes("/auth")){
//         return <Navigate to='/auth'/>
//     }

//     if(authenticated && user.role !=="instructor" && location.pathname.includes("instructor")){
//         return <Navigate to="/home" replace/>
//     }

//     if(authenticated && user.role === "instructor" && !location.pathname.includes('instructor') && !location.pathname.includes("/auth")){
//         return <Navigate to="/instructor" />
//     }

//     return <Fragment>{element}</Fragment>
// }

// export default RouteGuard;

import { Fragment } from "react";
import { Navigate, useLocation } from "react-router-dom";

function RouteGuard({ authenticated, user, element }) {
  const location = useLocation();

  // 1. Not authenticated → protect everything except /auth
  if (!authenticated && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth" replace />;
  }

  // 2. If authenticated & visiting /auth → redirect to correct dashboard
  if (authenticated && location.pathname.includes("/auth")) {
    if (user?.role === "instructor") {
      return <Navigate to="/instructor" replace />;
    }
    return <Navigate to="/home" replace />;
  }

  // 3. Normal user trying to access instructor area
  if (
    authenticated &&
    user?.role !== "instructor" &&
    location.pathname.includes("instructor")
  ) {
    return <Navigate to="/home" replace />;
  }

  // 4. Instructor trying to access student area
  if (
    authenticated &&
    user?.role === "instructor" &&
    !location.pathname.includes("instructor")
  ) {
    return <Navigate to="/instructor" replace />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;

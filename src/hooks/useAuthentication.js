// React and redux.
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

// Ducks.
import { setAuthenticated, setUnauthenticated } from "../ducks/authentication";

function useAuthentication() {
  const dispatch = useDispatch();
  let authenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  // Replace the store state with the token provided by the local storage.
  if (localStorage.getItem("challenge-auth")) authenticated = true;

  const authenticate = useCallback(() => {
    dispatch(setAuthenticated());
    // Set a login token into the local storage.
    localStorage.setItem("challenge-auth", "authenticated");
  }, [dispatch]);

  const unauthenticate = useCallback(() => {
    dispatch(setUnauthenticated());
    // If the user logouts, the token is removed.
    localStorage.removeItem("challenge-auth");
  }, [dispatch]);

  return {
    authenticated,
    authenticate,
    unauthenticate,
  };
}

export default useAuthentication;

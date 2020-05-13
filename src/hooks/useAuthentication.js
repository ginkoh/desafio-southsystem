import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { setAuthenticated, setUnauthenticated } from "../ducks/authentication";
import { DEFAULT_USERNAME, DEFAULT_PASSWORD } from "../constants";

function useAuthentication() {
  const dispatch = useDispatch();
  let authenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  if (localStorage.getItem("challenge-auth")) authenticated = true;

  const authenticate = useCallback(() => {
    localStorage.setItem("challenge-auth", "authenticated");

    dispatch(setAuthenticated());
  }, [dispatch]);

  const unauthenticate = useCallback(() => {
    localStorage.removeItem("challenge-auth");
    dispatch(setUnauthenticated());
  }, [dispatch]);

  return {
    authenticated,
    authenticate,
    unauthenticate,
  };
}

export default useAuthentication;

import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { setAuthenticated, setUnauthenticated } from "../ducks/authentication";

function useAuthentication() {
  const dispatch = useDispatch();
  const authenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  const authenticate = useCallback(() => {
    dispatch(setAuthenticated());
  }, []);

  const unauthenticate = useCallback(() => {
    dispatch(setUnauthenticated());
  }, []);

  return {
    authenticated,
    authenticate,
    unauthenticate,
  };
}

export default useAuthentication;

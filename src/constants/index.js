// Store prefix.
export const STORE_PREFIX = `@@southsystem-challenge`;

export const DEFAULT_USERNAME = "southsystem";
export const DEFAULT_PASSWORD = "southsystem";

export const loginUser = (username, password) => {
  return username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD;
};

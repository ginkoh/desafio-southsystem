export const entityServiceInfo = {
  apiUrl: "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/",
  prefix: "dragon",
  pluralPrefix: "dragons",
};

export const formattedPrefixName =
  entityServiceInfo.pluralPrefix[0].toUpperCase() +
  entityServiceInfo.pluralPrefix.slice(1, -1);

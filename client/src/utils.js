export const getCurrencySymbol = (countryCode) => {
  const currencies = {
    gb: "£",
    us: "$",
    au: "$",
    ca: "$",
    at: "€",
    de: "€",
    fr: "€",
    it: "€",
    nl: "€",
    pl: "€",
  };
  return currencies(countryCode);
};

export const extractFormData = (form) =>
  Array.from(from.elements).reduce(
    (acc, { id, value }) => ({ ...acc, [id]: value }),
    {}
  );

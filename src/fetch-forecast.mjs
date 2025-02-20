/**
 * Builds a query string for fetching a text-only forecast discussion from the
 * NWS website.
 * @param {string} forecastOfficeCode - The forecast office code to fetch.
 * @returns {string} A query string for fetching the forecast discussion.
 */
const buildDiscussionQuery = (forecastOfficeCode) =>
  new URLSearchParams({
    site: forecastOfficeCode,
    issuedby: forecastOfficeCode,
    product: 'AFD',
    format: 'txt',
    // Disable glossary or get a bunch of unwanted hyperlinks.
    glossary: '0',
  }).toString();

/**
 * Builds a URL for fetching a discussion.
 * @param {string} forecastOfficeCode - The forecast office code to fetch.
 * @returns URL for fetching discussion.
 */
export const createDiscussionURL = (forecastOfficeCode) =>
  new URL(
    `product.php?${buildDiscussionQuery(forecastOfficeCode)}`,
    'https://forecast.weather.gov',
  ).toString();

/**
 * Fetches the forecast discussion from the NWS.
 * @param {string} forecastOfficeCode - The forecast office to fetch.
 * @returns {Response} The forecast discussion response.
 */
export const fetchDiscussion = (forecastOfficeCode) =>
  fetch(createDiscussionURL(forecastOfficeCode));

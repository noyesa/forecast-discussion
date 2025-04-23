/**
 * Parses the HTML response from weather.gov and extracts the forecast
 * discussion.
 * @param {string} discussionHTML - The HTML response from NWS.
 * @returns {string} The forecast discussion.
 */
export const parseDiscussionHTML = (discussionHTML) => {
  const match = discussionHTML.match(
    /<pre class="glossaryProduct">([^<]+)<\/pre>/,
  );
  if (match) {
    return match[1].trim();
  }
};

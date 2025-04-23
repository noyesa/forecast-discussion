import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { MockServer } from 'mentoss';

/**
 * Sets up a server with the NWS URL.
 * @returns {MockServer} The mock server.
 */
const getMockNWSServer = () => new MockServer('https://forecast.weather.gov');

/**
 * Loads the mock response from file on disk.
 * @returns {string} The contents of the mock response.
 */
export const loadMockHTML = () =>
  readFileSync(join(import.meta.dirname, 'example-discussion.html'), {
    encoding: 'utf8',
  }).trim();

export const loadMockDiscussion = () =>
  readFileSync(join(import.meta.dirname, 'example-discussion.txt'), {
    encoding: 'utf8',
  }).trim();

/**
 * Sets the server to respond with a mock response.
 * @param {MockServer} server - The mock server instance.
 */
const setMockResponse = (server) => {
  server.get('/product.php', {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: loadMockHTML(),
  });
};

/**
 * Get the mock server for the NWS forecast discussion page.
 * @returns Mock server.
 */
export const getMockServer = () => {
  const server = getMockNWSServer();
  setMockResponse(server);
  return server;
};

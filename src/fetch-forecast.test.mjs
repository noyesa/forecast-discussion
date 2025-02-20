import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { FetchMocker } from 'mentoss';

import { fetchDiscussion, createDiscussionURL } from './fetch-forecast.mjs';
import { getMockServer } from '../test/mock-server.mjs';

describe('fetchDiscussion', () => {
  let mocker;

  beforeAll(() => {
    mocker = new FetchMocker({
      servers: [getMockServer()],
    });

    mocker.mockGlobal();
  });

  afterEach(() => {
    mocker.clearAll();
  });

  afterAll(() => {
    mocker.unmockGlobal();
  });

  it('fetches data for the forecast office', async () => {
    const response = await fetchDiscussion('mtr');
    expect(response.status).toBe(200);
  });
});

describe('createDiscussionURL', () => {
  it('returns a URL pointing to the NWS', () => {
    const url = createDiscussionURL('mtr');
    expect(url).toMatch(/^https:\/\/forecast.weather.gov\/product.php/);

    const { searchParams } = new URL(url);

    expect(searchParams.get('site')).toMatch(/mtr/i);
    expect(searchParams.get('issuedby')).toMatch(/mtr/i);
    expect(searchParams.get('product')).toMatch(/afd/i);
    expect(searchParams.get('format')).toMatch(/txt/i);
    expect(searchParams.get('glossary')).toBe('0');
  });
});

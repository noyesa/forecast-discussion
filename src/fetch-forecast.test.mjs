import { describe, it, expect } from 'vitest';
import { fetchDiscussion } from './fetch-forecast.mjs';

describe('fetchDiscussion', () => {
  it('exists', () => {
    expect(fetchDiscussion).toBeTypeOf('function');
  });
});

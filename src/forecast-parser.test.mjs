import { describe, it, expect } from 'vitest';

import { loadMockHTML, loadMockDiscussion } from '../test/mock.mjs';
import { parseDiscussionHTML } from './forecast-parser.mjs';

describe('parseDiscussionHTML', () => {
  const discussionHTML = loadMockHTML();
  const discussionText = loadMockDiscussion();

  it('parses the forecast discussion from the HTML', () => {
    expect(parseDiscussionHTML(discussionHTML)).toEqual(discussionText);
  });
});

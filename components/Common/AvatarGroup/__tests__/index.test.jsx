import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { render, fireEvent } from '@testing-library/react';
import { getGitHubAvatarUrl } from '@/util/gitHubUtils.ts';
import AvatarGroup from '../index.tsx';

const names = [
  'ovflowd',
  'bmuenzenmeyer',
  'AugustinMauroy',
  'HinataKah0',
  'Harkunwar',
  'rodion-arr',
  'mikeesto',
  'bnb',
  'benhalverson',
  'aymen94',
  'shanpriyan',
  'Wai-Dung',
  'manishprivet',
  'araujogui',
];

const avatars = names.map(name => ({
  src: getGitHubAvatarUrl(name),
  alt: name,
}));

describe('AvatarGroup', () => {
  it('renders the AvatarGroup component properly', () => {
    const { getByText } = render(<AvatarGroup avatars={avatars} limit={2} />);

    //const showMoreButton = getByText('+12');

    //assert.strictEqual(showMoreButton, getByText('+12'));
  });

  /*it('displays the rest of the avatars when "show more" button is clicked', () => {
    const { getByText } = render(<AvatarGroup avatars={avatars} limit={2} />);

    const showMoreButton = getByText('+12');
    fireEvent.click(showMoreButton);

    const hideMoreButton = getByText('-12');
    expect(hideMoreButton).toBeInTheDocument();
  });*/
});

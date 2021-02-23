import { html, define } from 'hybrids';

export function increaseCount(host) {
  host.count += 1;
}

export const SimpleCounter = {
  count: 0,
  render: ({ count }) => html`
    <button onclick="${increaseCount}">Count: ${count}</button>
  `,
};

define('simple-counter', SimpleCounter);

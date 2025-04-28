import { withoutNulls } from './utils/arrays';

export const DOM_TYPES = {
  TEXT: 'text',
  ELEMENT: 'element',
  FRAGMENT: 'fragment',
};

export function h(tag, props = {}, children = []) {
  return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DOM_TYPES.ELEMENT,
  };
}

function mapTextNodes(children) {
  return children.map((child) => (typeof child === 'string' ? hString(child) : child));
}

export function hFragment(vNodes) {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(withoutNulls(vNodes)),
  };
}

export function hString(str) {
  return { type: DOM_TYPES.TEXT, value: str };
}

export function lipsum(num) {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in auctor mi, a cursus dui. Fusce molestie venenatis metus nec finibus.';
  return hFragment(Array(num).fill(h('p', {}, [text])));
}

// return the a virtual dom that represents a message box with corresponding css class level ex. message--info
export function MessageComponent({level, message}) {
  return h('div',{ class: `message message--${level}` }, [
    h('p', {}, [message])
  ]);
};

// test
h('h1', { class: 'title' }, ['My counter']);
h('div', { class: 'container' }, [
  h('button', {}, ['decrement']),
  h('span', {}, ['0']),
  h('button', {}, ['increment']),
]);

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SizeSensor from '../src';

import { createDOM, injectStyle } from './dom';

describe('rc-size-sensor', () => {
  injectStyle()
  const div = createDOM();

  it('demo', () => {

    const cb = ele => {
      const size = getComputedStyle(ele);
      const indicator = document.getElementById('size-indicator');

      indicator.innerHTML = size.width + ' x ' + size.height;
      indicator.style.color = 'red';

      setTimeout(() => {
        indicator.style.color = 'black';
      }, 500);
    };

    ReactDOM.render(
      <SizeSensor onResize={cb}>
        <div id="wrapper">
          <div id="size-indicator" />
        </div>
      </SizeSensor>,
      div
    );

    expect(document.getElementById('size-indicator')).toBeDefined();
  });
});

import { PureComponent } from 'react';
import * as ReactDOM from 'react-dom';

import { bind, clear } from 'size-sensor';

export type SizeSensorProps = {
  onResize: (e: HTMLElement) => any;
}

/**
 * SizeSensor 组件类
 */
export default class SizeSensor extends PureComponent<SizeSensorProps> {

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this) as HTMLElement;

    bind(dom, (dom: HTMLElement) => {
      this.props.onResize(dom);
    })
  }

  componentWillUnmount() {
    clear(ReactDOM.findDOMNode(this) as HTMLElement);
  }
}

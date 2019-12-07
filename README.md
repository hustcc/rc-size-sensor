# rc-size-sensor

> React component for [size-sensor](https://github.com/hustcc/size-sensor).


[![Build Status](https://github.com/hustcc/rc-size-sensor/workflows/build/badge.svg)](https://github.com/hustcc/rc-size-sensor/actions)
[![npm](https://img.shields.io/npm/v/rc-size-sensor.svg)](https://www.npmjs.com/package/rc-size-sensor)
[![npm](https://img.shields.io/npm/dm/rc-size-sensor.svg)](https://www.npmjs.com/package/rc-size-sensor)


## Install

```bash
$ npm i --save rc-size-sensor
```


## Usage


```jsx
import SizeSensor from 'rc-size-sensor';

  // ...

  onResize = (element) => {
    // do something
  }

  render() {
    return (
      <SizeSensor onResize={this.onResize}>
        <YourComponent />
      </SizeSensor>
    );
  }
```


## License

MIT@[hustcc](https://github.com/hustcc).

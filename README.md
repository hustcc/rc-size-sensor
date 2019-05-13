# rc-size-sensor

> React component for [size-sensor](https://github.com/hustcc/size-sensor).



## Install

> npm i --save rc-size-sensor



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

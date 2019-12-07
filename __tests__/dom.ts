const CSS = `
#wrapper {
  position: relative; 
  height: 400px;
  background-color: #8bcdaf
}


#size-indicator {
  position: absolute;
  right: 4px;
  bottom: 4px;
  font-size: 10px;
  color: black;
}`;

/**
 * inject style css into header
 * @param css
 */
export function injectStyle(css: string = CSS): void {
  const head = document.getElementsByTagName('head')[0];

  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));

  head.appendChild(style);
}

/**
 * 创建一个 div 容器
 */
export function createDOM(): HTMLDivElement {
  const div = document.createElement('div');
  document.body.appendChild(div);

  return div;
}

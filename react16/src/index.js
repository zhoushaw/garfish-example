import './public-path';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const render = () => {
  ReactDOM.render(<App />, document.getElementById("root")); // 修改id
};
console.log('whywhy', window.__POWERED_BY_QIANKUN__ );
export function provider({ dom, basename }) {
  return {
    render() {
      ReactDOM.render(
        <React.StrictMode>
          <App basename={basename} />
        </React.StrictMode>,
        dom,
      );
    },
    destroy({ dom }) {
      if (dom) {
        ReactDOM.unmountComponentAtNode(dom);
      }
    },
  };
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  debugger;
  console.log("whywhy root create-react-app bootstraped");
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("root create-react-app mount", props);
  // 调用render,渲染子应用
  render();
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log("root create-react-app unmount");
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.getElementById("root"),
  );
}

if (!window.__GARFISH__ && !window.__POWERED_BY_QIANKUN__ ) {
  render()

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

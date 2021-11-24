import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export function provider({ dom, basename }) {
  return {
    render() {
      ReactDOM.render(
        <React.StrictMode>
          <App basename={basename} />
        </React.StrictMode>,
        dom? dom.querySelector('#root'): document.querySelector('#root')
      );
    },
    destroy({ dom }) {
      if (dom) {
        ReactDOM.unmountComponentAtNode(dom);
      }
    },
  };
}

if (!window.__GARFISH__) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

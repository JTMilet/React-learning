/*
 * @Author: 杜康
 * @Date: 2023-05-08 09:40:18
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-08 09:51:11
 * @FilePath: /react-learning/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 暂时去掉严格模式节点，因为严格模式节点会影响useEffect的执行时机，会执行两次
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)

/*
 * @Author: 杜康
 * @Date: 2023-05-08 09:40:18
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-08 14:36:50
 * @FilePath: /react-learning/src/App.js
 */
import React from 'react'
import './jsx-css.css'
const name = '杜康'
const getAge = () => {
  return 18
}
const flag = true

const songs = [
  { id: 0, name: '第一次爱的人' },
  { id: 1, name: '爱你' }
]
// 使用map做遍历列表，使用number/string的key，提高框架diff性能
const getHTag = type => {
  if (type === 1) {
    return <h1>this is h1</h1>
  }
  if (type === 2) {
    return <h2>this is h2</h2>
  }
  if (type === 3) {
    return <h3>this is h3</h3>
  }
  return null
}

const twoStyle = {
  color: 'blue',
  fontSize: '24px'
}

// 函数组建
// function App () {
//   return (
//     <div className="App">
//       <p>{name}</p>
//       <p>{getAge()}</p>
//       <p>{flag ? '真棒' : '真菜'}</p>
//       --- --- --- --- <br />
//       <ul>
//         {songs.map(song => <li key={song.id} > {song.name}</li>)}
//       </ul>
//       --- --- --- --- <br />
//       {flag ? <span>this is a span</span > : null}
//       <br />
//       {true && <span>this is another span</span>}
//       <br />
//       --- --- --- --- <br />
//       <p>{getHTag(1)}</p>
//       <p>{getHTag(2)}</p>
//       <p>{getHTag(3)}</p>
//       --- --- --- --- <br />
//       <p style={{ color: 'red', fontSize: '16px' }}>this is one style</p>
//       <p style={twoStyle}>this is two style</p>
//       <p className="jsx-css">this is jsx-css file style</p>
//       <p className={flag ? 'jsx-css' : ''}>this is jsx-css active style</p>
//     </div>
//   )
// }

// 类组建
class HelloComponent extends React.Component {
  render () {
    return (<div>this is app class component</div>)
  }
}

function App () {
  return (
    <HelloComponent />
  )
}
export default App

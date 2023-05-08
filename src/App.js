/*
 * @Author: 杜康
 * @Date: 2023-05-08 09:40:18
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-08 10:01:03
 * @FilePath: /react-learning/src/App.js
 */
const name = '杜康'
const getAge = () => {
  return 18
}
const flag = true
function App () {
  return (
    <div className="App">
      <p>{name}</p>
      <p>{getAge()}</p>
      <p>{flag ? '真棒' : '真菜'}</p>
    </div>
  )
}

export default App

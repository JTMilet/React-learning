/*
 * @Author: 杜康
 * @Date: 2023-05-08 09:40:18
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-08 10:34:42
 * @FilePath: /react-learning/src/App.js
 */
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
function App () {
  return (
    <div className="App">
      <p>{name}</p>
      <p>{getAge()}</p>
      <p>{flag ? '真棒' : '真菜'}</p>
      --- --- --- --- <br />
      <ul>
        {songs.map(song => <li key={song.id} > {song.name}</li>)}
      </ul>
    </div >
  )
}

export default App

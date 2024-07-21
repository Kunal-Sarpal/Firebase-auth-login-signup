



import {getDatabase, ref,set} from "firebase/database"
import { app } from "./firebase"

const db = getDatabase(app)


function App() {
  const putData = () =>{
    set(ref(db,'users/kunal'),{
      id:1,
      name: 'Kunal Sarpal',
      age: 36
    })
  }
  return (
    <div>
      <h1>React App</h1>
      <button onClick={putData}>putData</button>
    </div>
  )
}

export default App
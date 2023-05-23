import React from 'react'
import  ReactDOM  from 'react-dom/client'
import Appheader from './components/appheader.js'
import Todolist from './components/Todolist.js'
import SearchPanel from './components/search.js'


const App = () => {
    const todoData=[
        {label:'Drink Coffee',important:true, id:1},
        {label:'Make Awesome App',important:false, id:2},
        {label:'Drink Coffee',important:false , id:3}
    ]
    return (
        <div>
            <Appheader/>
            <SearchPanel />
            <Todolist todoes={todoData} />
        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

// Counter.incStep = 2
// Counter.incrementAll = function (arr) {
//     arr.forEach((c) => c.inc())
// }

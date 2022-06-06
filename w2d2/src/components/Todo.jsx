

import React, { useState, useEffect } from "react"
import axios from "axios"
const Todo = () => {
    const [todo, settodo] = useState([])
    const [page, setpage] = useState(1)
    const [count, setcount] = useState(0)
    const [limit, setlimit] = useState(5)
    const getTodo = async () => {
        let r = await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
        settodo(r.data);
        setcount(+r.headers["x-total-count"])
        console.log(todo.length, count);
    }
    useEffect(() => {

        getTodo()
    }, [page, limit])

    return (
        <div className="App">
            {todo.map((e) => { return <><div key={e.id} >{e.id}{"   :  "}{e.title}</div></> })}
            <button disabled={page <= 1} onClick={() => { setpage(page - 1) }} >{"<"}</button>
            <select onChange={(e) => { setlimit(+e.target.value) }} >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20} >20</option>
            </select>
            <button disabled={count < page * 5} onClick={() => { setpage(page + 1) }} >{">"}</button>
        </div>
    );
}

export default Todo
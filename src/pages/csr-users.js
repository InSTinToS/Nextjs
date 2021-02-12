import { useState, useEffect } from 'react'
import axios from 'axios'

function Users () {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
  }

  console.log(users)

  useEffect(() => {
    fetchUsers()
  }, [])

  return <div>
    <h1>Users</h1>

    {users.map(user => <li key={user.name}>{user.name}</li>)}
  </div>
}

export default Users


import axios from 'axios'

function Users ({ users }) {
  return <div>
    <h1>Users</h1>

    {users.map(user => <li key={user.name}>{user.name}</li>)}
  </div>
}

export const getServerSideProps = async (context) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

  return {
    props: { users: data }
  }
}

export default Users

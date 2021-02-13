import axios from 'axios'
import Link from 'next/link'

export interface User {
  id: number
  name: string
  username: string
}

interface UsersProps {
  users: User[]
}

const Users = ({ users }: UsersProps) => {
  return (
    <div>
      {users.map(user => (
        <div key={user.name}>
          <Link href='/profile/[id]' as={`/profile/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = await response.data

  return {
    props: { users: data }, // will be passed to the page component as props
  }
}

export default Users

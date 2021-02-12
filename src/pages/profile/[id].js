import { useRouter } from 'next/router'
import axios from 'axios'

const Profile = ({ user = {} }) => {
  const { query, isFallback } = useRouter()

  if (isFallback) return <h1>carregando ...</h1>

  return <div>
    <h1>Profile id={query.id}</h1>

    <li>{user.id}</li>
    <li>{user.name}</li>
    <li>{user.username}</li>
  </div>
}

export const getStaticProps = async (context) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users',
    {
      params: {
        id: context.params.id
      }
    })

  const user = await data[0]

  return {
    props: { user }
  }
}

export const getStaticPaths = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

  const users = await data.slice(0, 5)
  const paths = users.map(user => ({ params: { id: String(user.id) } }))
  // para renderizar estaticamente os 5 primeiros

  return {
    paths,
    fallback: true
    // fallback
    // false: não encontra o id 3
    // true: encontra o id 3 de forma estática
  }
}

export default Profile

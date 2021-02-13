import axios from 'axios'
import { useRouter } from 'next/router'
import { User } from '../users'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'

interface UserProps {
  user: User
}

function Profile({ user }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  if (router.isFallback) return <h1>carregando...</h1>

  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps<UserProps> = async context => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users', {
    params: {
      id: context.params.id,
    },
  })

  const user = await data[0]

  return {
    props: {
      user,
      revalidate: 10,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  const users = await data.slice(0, 5)

  const paths = users.map((user: User) => {
    return {
      params: {
        id: String(user.id),
      },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export default Profile

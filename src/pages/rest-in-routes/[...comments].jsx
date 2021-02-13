import { useRouter } from 'next/router'

const DynamicProduct = () => {
  const { query } = useRouter()
  // acesse: http://localhost:3000/rest-in-routes/Que/legal/esse/notebook

  return (
    <div>
      <h2>{`Comentário 1: ${query.comments && query.comments[0]}`}</h2>
      <h2>{`Comentário 2: ${query.comments && query.comments[1]}`}</h2>
      <h2>{`Comentário 3: ${query.comments && query.comments[2]}`}</h2>
      <h2>{`Comentário 4: ${query.comments && query.comments[3]}`}</h2>
    </div>
  )
}

export default DynamicProduct

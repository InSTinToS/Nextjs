import { useRouter } from 'next/router'

const DynamicProduct = () => {
  const { query } = useRouter()
  // acesse: http://localhost:3000/dynamic-products/ti/notebook?seller=Miguel&price=3500

  return (
    <div>
      <h2>{`Categoria: ${query.category}`}</h2>
      <h2>{`Produto: ${query.product}`}</h2>
      <h2>{`Produto: ${query.seller}`}</h2>
      <h2>{`Produto: ${query.price}`}</h2>
    </div>
  )
}

export default DynamicProduct

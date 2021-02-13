import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1>Index</h1>

      <Link href='/dynamic-products'>Acessar produtos</Link>
      {/* acessando com Link a página nao re-renderiza por completo */}
    </div>
  )
}

export default Index

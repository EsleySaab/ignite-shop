import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return <h1>Hello Product!: {JSON.stringify(query)}</h1>
}

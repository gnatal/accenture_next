import { useRouter } from 'next/router'

interface IProps {
    id: string
}

export default function Students({ query }) {

    const route = useRouter();
    //pegar um parametro via query params
    //invocar o route => query (nome da props => nome do arquivo)

    //http://localhost:3000/alunos/natal natal = route.query.slug
    //http://localhost:3000/alunos/natal?id=133 133 = route.query.id

    // console.log("route", route.query)
    // console.log("query", route)
    return (
        <div>
            <h1>{route.query.slug}</h1>
            <h1>{route.query.id}</h1>
        </div>
    )
}
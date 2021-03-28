import { GetServerSideProps, GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import api from '../service/api';
import { Container } from '../styles/pages/home/style';



//do not use async await inside useEffect()
interface IRecommended {
    id: number,
    title: string,
    price: number,
    category_id: string,
    slug: string
}

interface AllRecommended {

    result: IRecommended[];
}


export default function Tester({ result }: AllRecommended) {

    const [results, setResults] = useState<IRecommended[]>([]);

    useEffect(() => {
        api.get("/recommended").then((res) => {
            setResults(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <Container>
            <h1>Cursos recomendados para você</h1>
            <>
                {results.map(result => (
                    <div key={result.id} >
                        <h5>{result.title} | {result.price}</h5>
                    </div>
                ))}
            </>
        </Container>
    )
}

//server side rendering
// o padrão de nomenclatura é obrigatório

//get static vs get server

//getstatic uses a cache, get server request from the server

//mercado => framework cada vez mais complexo

//pra fazer ecommerce use shopeefy

// ask for the server 

//int number formmat
export const getServerSideProps: GetServerSideProps<AllRecommended> = async (context) => {
    const response = await api.get("/recommended")
    const result = await response.data;

    return {
        props: {
            result
        }
    };

}

// export const getStaticProps: GetStaticProps<AllRecommended> = async (context) => {
//     const response = await api.get("/recommended")
//     const result = await response.data;

//     return {
//         props: {
//             result
//         },
//         revalidate: 30

//     };

// }
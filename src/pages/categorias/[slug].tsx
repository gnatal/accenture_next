import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next';
import api from '../../service/api';
import { ParsedUrlQuery } from 'node:querystring';
import { Container } from '../../styles/pages/home/style'
import { CurrencyTemplate } from '../../lib'


//i18n library



interface IRecommended {
    id: number,
    title: string,
    price: number,
    category_id: string,
    slug: string
}

interface AllRecommended {

    courses: IRecommended[];
}

export default function Categories({ courses }: AllRecommended) {

    const route = useRouter();

    if (route.isFallback) {
        return <p>Aguarde, estamos montando este conteúdo</p>
    }

    return (
        <Container>
            <h1>{route.query.slug}</h1>
            <div>
                <ul>
                    {courses.map(course => (
                        <li key={course.id}>{course.title} | {CurrencyTemplate(course.price)}</li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}


//gerar todas as rotas estaticamente
export const getStaticPaths: GetStaticPaths = async (context) => {


    const response = await api.get(`categories`)
    const categories = response.data;

    const paths = categories.map(category => {
        return {
            params: { slug: category.id }
        }
    })

    return {
        paths,
        fallback: true
    };

}
//fallback pega de maneira dinamica a importação das categorias
// if false get only on build time

//fallback => ISR incrementa gradualmente


//gerar conteúdo estatico 
export const getStaticProps: GetStaticProps<AllRecommended | ParsedUrlQuery> = async (context) => {
    const { slug } = context.params;
    const response = await api.get(`courses?category_id=${slug}`)
    const courses = response.data;

    return {
        props: {
            courses
        },
        revalidate: 60

    };

}
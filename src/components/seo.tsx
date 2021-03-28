import Head from 'next/head'

interface SeoProps {
    title: string;
    description?: string;
    image?: string;
    containSufix?: boolean;
}

export default function Seo({ title, description, image, containSufix }: SeoProps) {
    const pageTitle = `${title} ${!containSufix ? '| Gama Academy' : ''}`;

    return (
        <Head>
            <title>{pageTitle}</title>
            {description && <meta name="description" content={description} />}
            {image && <meta name="image" content={image} />}
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <meta property="og:url" content="https://meusite.olamundo.com.br" />
            <meta property="og:title" content="Utilizando tags do FB" />
            <meta property="og:url" content="https://meusite.olamundo.com.br" />
            <meta property="og:site_name" content="Accenture academy" />
            <meta property="og:description" content="O tutorial para compartilhar seu site de fomra eficaz " />
            <meta property="og:image" content="/images/metaImage.jpg" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
        </Head>
    )
}
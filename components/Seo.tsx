import Head from "next/head";

interface Ititle{
    title: string;
}

export default function SEO({title}:Ititle){
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}
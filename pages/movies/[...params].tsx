import SEO from "@/components/Seo";
import { GetStaticPropsContext } from "next";
// import {useRouter} from "next/router";

interface IDetail{
    params: [string, string]
}

export default function Detail({params}: IDetail){
    // router는 csr 방식
    // const router = useRouter();
    // const [title, id] = router.query.params || [];
    
    // getStaticProps를 사용하여 받아온 Props를 사용하면 ssr방식
    const [title, id] = params || [];
    console.log(id);
    return (
        <div>
            <SEO title={title} />
            <h4>{title}</h4>
        </div>
    );
}

interface IParams{
    params: {
        params: GetStaticPropsContext
    }
}
export async function getStaticProps({ params: {params} }: IParams) {
    return {
        props: { params },
    };
}
export async function getStaticPaths() {
    return {
        paths: [], // 동적 경로가 없으므로 빈 배열로 설정
        fallback: 'blocking', // 다른 경로로의 접근은 서버 사이드에서 대기
    };
}

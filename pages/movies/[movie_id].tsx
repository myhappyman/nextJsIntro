import {useRouter} from "next/router";

export default function Detail(){
    const router = useRouter();
    const {movie_id, title} = router.query;

    console.log(movie_id, title);
    return (
        <div>
            <h4>{title || "Loading..."}</h4>
        </div>
    );
}

// export async function getServerSideProps(){
//     const {results} = await (await fetch(`http://localhost:3000/api/movies/${movie_id}`)).json();
//     return {
//         props: {
//             results
//         }
//     }
// }
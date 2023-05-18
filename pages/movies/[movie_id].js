import {useRouter} from "next/router";

export default function Detail(){
    const router = useRouter();
    const {movie_id} = router.query;
    return `detail${movie_id}`;
}
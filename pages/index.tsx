export interface IHome{
    results: []
}

interface IMoive{
    id: number,
    original_title: string,
    poster_path: string
}

export default function Home({results}:IHome){
    return (
        <div className="container">
            {
                results?.map((movie: IMoive) => 
                    (<div className="movie" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <h4>{movie.original_title}</h4>
                    </div>)
                )
            }
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>     
        </div>
    );
}

//
/**
 * - getServerSideProp
 * getServerSideProps라는 이름은 바꿀 수 없다. 
 * NextJS를 SSR로 사용하게 해준다.(즉, 해당 코드는 server에서 돌아가게 된다!!!)
 * async 옵션은 선택
 */
export async function getServerSideProps(){
    const {API_KEY} = process.env;
    const {results} = await (await fetch(`http://localhost:3000/api/movies/${API_KEY}`)).json();
    return {
        props: {
            results
        }
    }
}
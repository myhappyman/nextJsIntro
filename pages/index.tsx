import { useEffect, useState } from "react";

const API_KEY = "dbf6ad83e201e98cbf498fbcfd80bf8a";

interface IMoive{
    id: number,
    original_title: string
}

export default function Home(){
    const [movies, setMovies] = useState<[]>();
    
    useEffect(() => {        
        (async() => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
            const {results} = await response.json();
            setMovies(results);
        })();
    }, []);

    return (
        <div>
            {!movies && <h4>Loading...</h4>}
            {
                movies?.map((movie: IMoive) => 
                    (<div key={movie.id}>
                        <h4>{movie.original_title}</h4>
                    </div>)
                )
            }     
        </div>
    );
}
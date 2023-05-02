import { useState } from "react";

export default function Home(){
    const [couter, setCouter] = useState(0);
    return (
        <div>
            <h1>Home {couter}</h1>

            <button onClick={() => setCouter(prev => prev+1)}>+</button>
        </div>
    );
}
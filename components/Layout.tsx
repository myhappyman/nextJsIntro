import { useRouter } from "next/router";
import NavBar from "./NavBar";
import SEO from "./Seo";


export default function Layout({children}:React.PropsWithChildren){
    const {pathname} = useRouter();
    const title = pathname === "/" ? "Home" : pathname.split("/")[1];

    return (
    <>
        <SEO title={title} />
        <NavBar />
        <div>{children}</div>
        <style jsx global>{`
            a{
                text-decoration: none;
            }
        `}</style>
    </>
    );
}
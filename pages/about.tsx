import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";


export default function AboutPage() {

    return (
        <>

            <h1>Abaut Peish</h1>

            <h1 className={'title'}>
                Yen2 al <Link href="/">Jom!</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{" "}
                <code className={'code'}>pages/about.jsx</code>
            </p>

        </>


    );
}


AboutPage.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
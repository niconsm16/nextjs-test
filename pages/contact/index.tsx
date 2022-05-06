import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"


export default function ContactPage() {

    return (
        <MainLayout>

            <h1>El kontakto pues</h1>

            <h1 className={'title'}>
                Yen2 al <Link href="/about">Apaut!</Link> o al <Link href="/">Jom!</Link>
            </h1>

            <p className={'description'}>
                Guet startd bai editin {" "}
                <code className={'code'}>pages/contact/index.jsx</code>
            </p>

        </MainLayout>
    )
}
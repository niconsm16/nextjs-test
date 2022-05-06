import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"

export default function PricingPage() {
    return (
        <MainLayout>

            <h1>El Praicin</h1>

            <h1 className={'title'}>
                Pa ir al <Link href='/pricing'>Praisin!</Link>
            </h1>

            <p className={'description'}>
                Guet startd bai editin{' '}
                <code className={'code'}>pages/pricing/index.jsx</code>
            </p>
        </MainLayout>
    )
}
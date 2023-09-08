import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Container from './Container'

export default async function Header() {

    const client = createClient()

    const settings = await client.getSingle("settings")

    return (
        <header className='header'>
            <Container classes='flex-space-between p-tb-2'>
                <Link href="/">{settings.data.site_title}</Link>
                <nav className='footer--nav'>
                    <ul>
                        {settings.data.navigation.map(({ label, link }) => (
                            <li key={label}>
                                <PrismicNextLink field={link}>{label}</PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}


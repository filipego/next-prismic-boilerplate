import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Container from './Container'

export default async function Footer() {

    const client = createClient()

    const settings = await client.getSingle("settings")

    return (
        <footer className='footer'>
            <Container classes='flex-space-between pb-0'>
                <Link href="/">{settings.data.site_title}</Link>

                <p>©{new Date().getFullYear()} Client Name</p>

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

        </footer>
    )
}
import Link from 'next/link'

const links = [
    { label: "Resume", href: "https://www.notion.so/nerdfighteria/Claire-Wang-5a682aa1023640c4914bf7e16bf59096" },
    { label: "Scrapbook", href: "https://scrapbook.hackclub.com/clairebookworm/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Writing", href: "/writing" },
]

export default function Nav() {
    return (
        <nav className="text-white">
            <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 mt-6 sm:mt-0">
                <li className="hidden sm:block sm:grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 sm:grid-cols-5 sm:grid-cols-6 sm:grid-cols-7 sm:grid-cols-8 sm:grid-cols-9 sm:grid-cols-10 sm:grid-cols-11 sm:grid-cols-12"></li>
                <ul className={`mx-auto sm:mx-0 grid gap-4 ${links.length > 4 ? 'grid-cols-3' : 'grid-cols-2'} sm:grid-rows-1 sm:grid-cols-${links.length}`}>
                    {links.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                            <Link href={href}>
                                <a className="font-inter px-4 py-2 rounded hover:bg-white hover:bg-opacity-10">
                                    {label}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </ul>
        </nav>
    )
}
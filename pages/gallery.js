import { GalleryCard } from '../components/card'
import Layout from '../components/layout'

export default function Gallery() {
    return (
        <Layout active="Gallery">
            <h1 className="heading">Gallery<div className="inline opacity-50">.</div></h1>
            <div className="mt-12 mr-16 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <GalleryCard href="https://srtk.me" />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>
        </Layout>
    )
}
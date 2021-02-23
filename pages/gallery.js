import { GalleryCard } from '../components/card'
import Layout from '../components/layout'

export default function Gallery() {
    return (
        <Layout>
            <h1 className="heading">Gallery<div className="inline opacity-50">.</div></h1>
            <div className="mt-16 grid grid-flow-col auto-rows-auto">
                <GalleryCard />
            </div>
        </Layout>
    )
}
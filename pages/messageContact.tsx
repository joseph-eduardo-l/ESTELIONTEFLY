import { Layout } from '@/components/layout'
import { MessageContact } from '@/components';

export default function MessageContactPage(posts: any) {
    return (
        <>
            <Layout
                title="ERP 360"
            >
                <MessageContact />
            </Layout>
        </>
    )
}
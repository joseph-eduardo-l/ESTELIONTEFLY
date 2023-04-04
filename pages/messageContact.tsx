import { Layout } from '@/components/layout'
import Erp360 from '@/components/ERP360'
import { GetStaticProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';
import { MessageContact } from '@/components';

const hygraph = new GraphQLClient(
    'https://api-us-east-1.hygraph.com/v2/cl9mtonhs4wh501tabiwpero3/master'
);

export default function MessageContactPage(posts: any) {
    return (
        <>
            <Layout
                title="ERP 360"
                titleBlogOne={posts.posts[0].title}
                titleBlogTwo={posts.posts[1].title}
                dateBlogOne={posts.posts[0].date}
                dateBlogTwo={posts.posts[1].date}
                urlOne={posts.posts[0].id}
                urlTwo={posts.posts[1].id}
            >
                <MessageContact />
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const { posts }: any = await hygraph.request(gql`
  query IndexPageQuery($locale: Locale!){
    posts(locales: [$locale], orderBy: createdAt_DESC) {
      id
      title
      date
    }
  }
  `, { locale })

    return {
        props: {
            posts: posts
        }
    }
}
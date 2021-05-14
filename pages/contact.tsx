import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'

const contact = () => {
  return (
    <Layout>
      <Seo pageTitle={'Contact'} />
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center">
          <a
            href={process.env.NEXT_PUBLIC_PORTFOLIO_CONTACT_URL}
            target="_blank"
            rel="noopener"
            className="block w-full p-2 border border-gray-900 dark:border-white rounded hover:bg-opacity-20 hover:bg-gray-400 dark:hover:bg-opacity-20 dark:hover:bg-gray-400 transition-colors cursor-pointer"
          >
            お問い合わせはこちらから
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default contact

import Link from 'next/link'

import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'

const Page404 = () => {
  return (
    <Layout>
      <Seo pageTitle={'ページが見つかりません'} />
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-4xl font-medium text-center mb-16">
          404 <br /> Page Not Found
        </h1>
        <div>
          <Link href="/">
            <a className="p-2 border border-gray-400 rounded text-gray-400 hover:bg-opacity-20 hover:bg-gray-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="4-5 w-4 mr-1 mb-1 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              TOPへ戻る
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Page404

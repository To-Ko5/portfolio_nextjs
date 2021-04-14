import { VFC } from 'react'
import { GetStaticProps } from 'next'

import Layout from '../components/layout/Layout'
import Seo from '../components/layout/Seo'
import ProfileImage from '../components/about/ProfileImage'

import { getProfile } from '../hooks/about/getProfile'
import { Profile } from '../types/ProfileType'

interface Props {
  profile: Profile
}

const About: VFC<Props> = ({ profile }) => {
  return (
    <Layout>
      <Seo />
      <div className="max-w-screen-lg mx-auto px-4">
        <ProfileImage image={profile.image} />
      </div>
    </Layout>
  )
}

export default About

export const getStaticProps: GetStaticProps = async () => {
  const response = await getProfile()

  if (!response) {
    return {
      notFound: true
    }
  }

  const profile: Profile = {
    name: response.fields.name,
    job: response.fields.job,
    skills: response.fields.skills,
    description: response.fields.description,
    github: response.fields.github,
    qiita: response.fields.qiita,
    twitter: response.fields.twitter,
    instagram: response.fields.instagram,
    certifications: response.fields.certifications,
    image: {
      src: `https:${response.fields.profileImg.fields.file.url}`,
      alt: response.fields.profileImg.fields.title,
      width: response.fields.profileImg.fields.file.details.image.width,
      height: response.fields.profileImg.fields.file.details.image.height
    }
  }

  return {
    props: { profile }
  }
}

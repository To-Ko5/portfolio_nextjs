const ProfileSkills = ({ skills }) => {
  console.log(skills)
  return (
    <div>
      <div className="mb-2">
        <div className="inline px-2 py-1 text-sm border border-gray-400 rounded text-gray-400">
          Skills
        </div>
      </div>
      <p className="ml-2">{skills}</p>
    </div>
  )
}

export default ProfileSkills

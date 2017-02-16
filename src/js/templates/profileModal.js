// Profile modal card partial template
const profileModal = (profile, logs) => {
  let logList = ''

  for (let i = 0; logs.length > i; i++) {
    logList += `<p>// ${logs[i]}</p>`
  }

  return (
    `<div class="profile-card">
        <div class="profile-pic" style="background-image: url(${require('../../img/profiles/' + profile.img)})"></div>
        <div class="details">
          <h2>${profile.name}</h2>
          <h3>${profile.number}</h3>
        </div>
      </div>
      <h1>Logged interactions</h1>
      ${logList}`
  )
}

export default profileModal

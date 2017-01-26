const profile = (data) => {
  return (
    `<div class="grid-6">
      <a href="#" class="profile-link">
        <div class="profile-card">
          <div class="profile-pic" style="background-image: url(${require('../../img/profiles/' + data.img)})"></div>
          <div class="details">
            <h2>${data.name}</h2>
            <h3>${data.number}</h3>
          </div>
        </div>
      </a>
    </div>`
  )
}

export default profile

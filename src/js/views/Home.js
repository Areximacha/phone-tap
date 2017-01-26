import Person from '../models/Person'
import Mi5 from '../models/Mi5'

import profile from '../templates/profile'
import profileModal from '../templates/profileModal'

const mi5 = new Mi5()

const dan = new Person('Dan')
const anthony = new Person('Anthony')
const alex = new Person('Alex')
const erin = new Person('Erin')

const people = [dan, anthony, alex, erin]

// const phone = {owner: dan, number: '0776253227'}

// dan.call(phone, alex)

// const mark = new Person('Mark')
// dan.text(phone, alex, mark)

export default {
  renderProfiles () {
    const profiles = mi5.getProfiles(people)

    for (let i = 0; profiles.length > i; i++) {
      const profileTemplate = profile(profiles[i])
      const profileModule = document.getElementById('profile-wrapper')
      profileModule.insertAdjacentHTML('beforeend', profileTemplate)
    }
  },

  profileClickEvent () {
    const profileLinks = document.querySelectorAll('a.profile-link')
    for (let i = 0; profileLinks.length > i; i++) {
      profileLinks[i].addEventListener('click', function (e) {
        e.preventDefault()
        const profile = new Person(this.getAttribute('data-profile'))

        const profileData = mi5.mapProfile(profile)
        const log = mi5.log(profile)
        const modalTemplate = profileModal(profileData, log)

        const modalContainer = document.getElementById('profile-modal')
        modalContainer.innerHTML = modalTemplate
        document.getElementById('profile-modal-wrapper').classList.add('active')
      })
    }
  },

  modalCloseEvent () {
    const modalClose = document.getElementById('modal-close')

    modalClose.addEventListener('click', function (e) {
      e.preventDefault()
      document.getElementById('profile-modal-wrapper').classList.remove('active')
    })
  },

  init () {
    this.renderProfiles()
    this.profileClickEvent()
    this.modalCloseEvent()
  }
}

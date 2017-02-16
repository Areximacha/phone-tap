// Home view
import Person from '../models/Person'
import PhoneTap from '../models/PhoneTap'

// Import partial templates
import profile from '../templates/profile'
import profileModal from '../templates/profileModal'

// Instanciate PhoneTap
const phoneTap = new PhoneTap()

// For the purposes of this test, we're instanciating each of the people here and putting them in an array for ease of use
const dan = new Person('Dan')
const anthony = new Person('Anthony')
const alex = new Person('Alex')
const erin = new Person('Erin')

const people = [dan, anthony, alex, erin]

export default {
  // Renders all the profile cards to the home view
  renderProfiles () {
    const profiles = phoneTap.getProfiles(people)

    for (let i = 0; profiles.length > i; i++) {
      const profileTemplate = profile(profiles[i])
      const profileModule = document.getElementById('profile-wrapper')
      profileModule.insertAdjacentHTML('beforeend', profileTemplate)
    }
  },

  // Adds click event listeners to all the profile cards
  profileClickEvent () {
    const profileLinks = document.querySelectorAll('a.profile-link')
    for (let i = 0; profileLinks.length > i; i++) {
      profileLinks[i].addEventListener('click', function (e) {
        e.preventDefault()
        const profile = new Person(this.getAttribute('data-profile'))

        const profileData = phoneTap.mapProfile(profile)
        const log = phoneTap.log(profile)
        const modalTemplate = profileModal(profileData, log)

        const modalContainer = document.getElementById('profile-modal')
        modalContainer.innerHTML = modalTemplate
        document.getElementById('profile-modal-wrapper').classList.add('active')
      })
    }
  },

  // Adds click event listener to the modal close button
  modalCloseEvent () {
    const modalClose = document.getElementById('modal-close')

    modalClose.addEventListener('click', function (e) {
      e.preventDefault()
      document.getElementById('profile-modal-wrapper').classList.remove('active')
    })
  },

  // Initiates the home view
  init () {
    this.renderProfiles()
    this.profileClickEvent()
    this.modalCloseEvent()
  }
}

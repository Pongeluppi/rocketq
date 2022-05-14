import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // adicionar escuta
  button.addEventListener('click', handleClick)
  button.addEventListener('click', event => {
    modal.openCheck()
  })
})

const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
  // adicionar escuta
  button.addEventListener('click', handleClick)
  button.addEventListener('click', event => handleClick(event, false))
  button.addEventListener('click', () => {
    modal.openDelete()
  })
})

function handleClick(event, check = true) {
  event.preventDefault()
  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal-wrapper.delete form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)
  const formCheck = document.querySelector('.modal-wrapper.check form')
  formCheck.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modal.open
}
//res.render(`/room/${roomId}`)

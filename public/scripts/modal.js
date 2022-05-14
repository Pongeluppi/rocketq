export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper.check')
  const modalWrapperDelete = document.querySelector('.modal-wrapper.delete')
  const cancelButton = document.querySelector(
    '.modal-wrapper.check .button.grey.cancel'
  )
  const cancelButton2 = document.querySelector(
    '.modal-wrapper.delete .button.grey.cancel'
  )

  cancelButton.addEventListener('click', close)
  cancelButton2.addEventListener('click', close)

  function openCheck() {
    // Atribui a classe 'active' na a modal
    modalWrapper.classList.add('active')
  }
  function openDelete() {
    modalWrapperDelete.classList.add('active')
  }
  function close() {
    // Remove a classe 'active' na a modal
    modalWrapper.classList.remove('active')
    modalWrapperDelete.classList.remove('active')
  }

  return {
    openCheck,
    openDelete,
    close
  }
}

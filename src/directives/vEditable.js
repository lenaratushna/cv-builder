export default {
  mounted(el, binding) {
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('absolute-delete-btn')
    deleteButton.innerHTML = '&times;'
    deleteButton.style.display = 'none'
    el.after(deleteButton)

    el.setAttribute('contenteditable', true)

    el.addEventListener('focus', () => {
      el.classList.add('editing')
      deleteButton.style.display = 'flex'
    })

    deleteButton.addEventListener('mousedown', (e) => {
      e.preventDefault()
      el.innerHTML = ''
      el.blur()
    })

    el.addEventListener('blur', () => {
      updateContent()
    })

    function updateContent() {
      let text = el.innerText.trim()
      if (!text) text = ''

      if (binding.value && typeof binding.value.onUpdate === 'function') {
        binding.value.onUpdate(text)
      }

      el.classList.remove('editing')
      deleteButton.style.display = 'none'
    }
  },
  updated(el, binding) {
    if (el.innerText !== binding.value.modelValue) {
      el.innerText = binding.value.modelValue
    }
  },
}

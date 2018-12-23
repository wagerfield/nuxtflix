// https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
export default () => {
  const TAB_KEY_CODE = 9
  const OUTLINE_CLASS = "outline"

  function handleKeyDown(event) {
    if (event.keyCode === TAB_KEY_CODE) {
      document.documentElement.classList.add(OUTLINE_CLASS)
      window.removeEventListener("keydown", handleKeyDown)
      window.addEventListener("mousedown", handleMouseDown)
    }
  }

  function handleMouseDown() {
    document.documentElement.classList.remove(OUTLINE_CLASS)
    window.removeEventListener("mousedown", handleMouseDown)
    window.addEventListener("keydown", handleKeyDown)
  }

  window.addEventListener("keydown", handleKeyDown)
}

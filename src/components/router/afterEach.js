export default (to, from) => {
  // add title dynamic conform routing
  if (to.meta.title === '') {
    window.document.title = 'Nawe.by'
  } else {
    window.document.title = to.meta.title + ' | Nawe.by'
  }
}

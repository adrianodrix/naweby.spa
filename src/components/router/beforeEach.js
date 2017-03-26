const isAuthRoute = route => route.path.indexOf('/auth') !== -1
const isLogged = () => false

export default (to, from, next) => {
  if (!isAuthRoute(to) && !isLogged()) {
    console.log('Not authenticated for: ' + to.fullPath)
    next({
      name: 'auth.login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

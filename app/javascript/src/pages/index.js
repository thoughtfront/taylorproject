
const Pages = {
  Auth: {
    SignIn: require('./auth/SignIn').default,
    SignUp: require('./auth/SignUp').default,
  },
  Home: require('./home').default,
}


export default Pages

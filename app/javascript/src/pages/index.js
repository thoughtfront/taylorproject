
const Pages = {
  Auth: {
    SignIn: require('./auth/SignIn').default,
    SignUp: require('./auth/SignUp').default,
    Test: require('./auth/test').default,
  },
  Home: require('./home').default,
}


export default Pages

import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: process.env.REACT_APP_UNSTOPPABLE_CLIENT_ID,
  redirectUri: 'http://localhost:3000/',
})

 export async function login() {
  try {
    const authorization = await uauth.loginWithPopup() 
    console.log(authorization)
    console.log(authorization.idToken.sub)
    console.log(authorization.idToken.wallet_address)
    localStorage.setItem("domain", authorization.idToken.sub)
    window.location.reload()
  } catch (error) {
    console.error(error)
  }
}

export async function logout() {
  await uauth.logout()
  localStorage.clear("domain")
  window.location.reload()
  console.log('Logged out with Unstoppable')
}
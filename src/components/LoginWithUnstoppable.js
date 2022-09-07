import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: process.env.REACT_APP_UNSTOPPABLE_CLIENT_ID,
  redirectUri: 'https://nft-marketplace-temp.vercel.app/',
})

 export async function UnstoppableLogin() {
  try {
    const authorization = await uauth.loginWithPopup() 
    localStorage.setItem("domain", authorization.idToken.sub)
    console.log("login clicked")
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
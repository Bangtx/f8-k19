import {get} from "../../plugins/api.js";

const getProfile = async () => {
  const profile = await get('auth/me')
  console.log(profile)
}

const init = async () => {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')

  if (!accessToken || !refreshToken) {
    window.location.href = '/f8-k19/js/2026-06-11/ex01/pages/login'
  }

  await getProfile()
}


init()
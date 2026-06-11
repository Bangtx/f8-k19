import {login} from '../../plugins/api.js'

const onLogin = async () => {
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value

  const response = await login(username, password)
  const {accessToken, refreshToken} = response

  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)

  // window.location.href("http://localhost:63342/f8-k19/js/2026-06-11/ex01/pages/home/index.html");
  window.location.href = "http://localhost:63342/f8-k19/js/2026-06-11/ex01/pages/home/index.html";
}

const button = document.querySelector('button')
button.addEventListener('click', onLogin)
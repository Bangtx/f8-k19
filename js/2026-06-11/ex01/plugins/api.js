const API_URL = 'https://dummyjson.com'

const getNewAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken')
  if (!refreshToken) {
    alert('get data failed')
    return
  }

  try {
    const response = await fetch(
      `${API_URL}/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: refreshToken
        })
      }
    )

    const data = await response.json()

    const {accessToken, refreshToken} = data

    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
  } catch {
    alert('get data failed')
  }
}

const login = async (username, password) => {
  try {
    const response = await fetch(
      `${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password})
      }
    )

    return await response.json()
  } catch {
    await getNewAccessToken()
  }
}

const post = async (endpoint, body) => {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) {
    alert('get data failed')
    return
  }

  try {
    const response = await fetch(
      `${API_URL}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(body)
      }
    )

    if (response.status === 401) {
      await getNewAccessToken()
      return await post(endpoint, body)
    }

    return await response.json()
  } catch {
    alert('get data failed')
  }
}

const get = async (endpoint) => {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) {
    alert('get data failed')
    return
  }

  try {
    const response = await fetch(
      `${API_URL}/${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    )

    if (response.status === 401) {
      await getNewAccessToken()
      return await get(endpoint)
    }

    return await response.json()
  } catch {
    alert('get data failed')
  }
}

export {
  get, post, login
}
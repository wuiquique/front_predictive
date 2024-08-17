import axios from "axios";

export async function getAccessToken() {
  const data = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
  });

  try {
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function checkToken() {
  let token = localStorage.getItem("authToken");
  let tokenTime = localStorage.getItem("authTime");

  if (!token || !tokenTime || Math.floor(Date.now() / 1000) > tokenTime) {
    let tokenData = await getAccessToken();
    if (tokenData) {
      localStorage.setItem("authToken", tokenData.access_token);
      localStorage.setItem(
        "authTime",
        Math.floor(Date.now() / 1000) + tokenData.expires_in
      );
      return tokenData.access_token;
    } else {
      return null;
    }
  } else {
    return token;
  }
}

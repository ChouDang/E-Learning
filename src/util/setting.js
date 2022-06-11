import axios from "axios";


export const DOMAIN = "elearningnew.cybersoft.edu.vn/swagger/index.html";
export const TokenByClass = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMyIsIkhldEhhblN0cmluZyI6IjIwLzEwLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2NjIyNDAwMDAwMCIsIm5iZiI6MTYzODExODgwMCwiZXhwIjoxNjY2MzcxNjAwfQ.hoaq9WsA187Q0NvdBYPZsn8c2CRg_ZE4mQO5_lUyAL4";
export const Token = "accessToken";
export const GROUPID = "GP01";
export const USER_LOGIN = 'USER_LOGIN'

// setup http req
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000
})

http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    'Authorization': 'Bearer ' + localStorage.getItem(Token),
    'TokenCybersoft': TokenByClass
  }
  return config
}, error => {
  return Promise.reject(error)
})


http.interceptors.response.use(
  (response) =>{
    // Xử lý kết quả trả về từ server
    return response
     
  },
  // Xử lý nếu kết quả trả về bị lỗi
  (error) =>{
    if(error.status === 401){
      // Xử lý log out: clear Storage, đẩy người dùng vào trang login
      
    }
    return Promise.reject(error)
  }
)


// config cookie
export function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
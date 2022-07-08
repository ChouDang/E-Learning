import axios from "axios";
export const DOMAIN = "https://elearningnew.cybersoft.edu.vn/api/";
export const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMyIsIkhldEhhblN0cmluZyI6IjIwLzEwLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2NjIyNDAwMDAwMCIsIm5iZiI6MTYzODExODgwMCwiZXhwIjoxNjY2MzcxNjAwfQ.hoaq9WsA187Q0NvdBYPZsn8c2CRg_ZE4mQO5_lUyAL4";
export const GROUPID = "GP01";
export const USER_LOGIN = 'userLogin';
export const ACCESSTOKEN = 'accessToken';


//config axios 
export const http = axios.create({
	baseURL: "https://elearningnew.cybersoft.edu.vn/api/",
	timeout: 30000,
});

http.interceptors.request.use((config) => {
	config.headers = {
		...config.headers,
		['TokenCybersoft']: TOKEN_CYBERSOFT,
		// ['Authorization']: 'Bearer ' + localStorage.getItem(ACCESSTOKEN)
		['Authorization']: localStorage.getItem("UserClient")
			? `Bearer ${JSON.parse(localStorage.getItem("UserClient")).accessToken}`
			: localStorage.getItem("AdminClient")
				? `Bearer ${JSON.parse(localStorage.getItem("AdminClient")).accessToken}`
				: "",
	}
	return config;
}, (errors) => {
	return Promise.reject(errors)
})


// // config cookie
// export function setCookie(name, value, days) {
//   var expires = "";
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }
// export function getCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(';');
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

// function eraseCookie(name) {
//   document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }
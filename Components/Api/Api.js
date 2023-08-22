
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios'
import qs from 'qs'


import AUTH_CONFIG from '../Constant/Constant';
export function userLogin(email,password) {
	 return axios.post(AUTH_CONFIG.BASE_URL + 'api/login', { "email":email,"password":password}).then(res => res)}



	 export function loginUser(UserMail,otp) {
		return axios.post(AUTH_CONFIG.BASE_URL + 'api/confirmOtp',
		 { "email":UserMail,"otp":otp,}).then(res => res)}

		// export function editprofile(FullName,PhoneNumber,email,Password) {
		
		// 	var data = {
		// 		'name': FullName,
		// 		'phonenumber':PhoneNumber,
		// 		'password': Password,
		// 		'email': email,
		// 	  };
		// 	  var config = {
		// 		method: 'post',
		// 		url: `${AUTH_CONFIG.BASE_URL}api/editprofile`,
		// 		// headers: { 
		// 		//   'Authorization': 'Bearer ' + tokenValue, 
		// 		//   'Content-Type': 'application/x-www-form-urlencoded'
		// 		// },
		// 		data : data
		// 	  };
			  
		// 	  return axios(config);
			  
		// }
		export function  editprofile(Name,Phone,email,Password) {
			return axios.post(AUTH_CONFIG.BASE_URL + 'api/createUser', { "name":Name,"phonenumber":Phone,"password":Password,"email":email, }).then(res => res.data)
		}
		

		export async function logout() {

			var tokenValue = await AsyncStorage.getItem('Token');
			console.log(tokenValue,'tokenValue')
			  var config = {
				method: 'delete',
				url: `${AUTH_CONFIG.BASE_URL}api/logout`,
				headers: { 
				  'Authorization': 'Bearer ' + tokenValue, 
				  'Content-Type': 'application/x-www-form-urlencoded'
				},
				// data : data
			  };
			  
			  return axios(config);
			  
		}


		export async function openNumber() {

			var tokenValue = await AsyncStorage.getItem('Token');
		
			  var config = {
				method: 'get',
				url: `${AUTH_CONFIG.BASE_URL}api/openNumber`,
				headers: { 
				  'Authorization': 'Bearer ' + tokenValue, 
				  'Content-Type': 'application/x-www-form-urlencoded'
				},
				
			  };
			  
			  return axios(config);
			  
		}

		








		// export async function Amount(TrnsStatus,TrnsId,ResponseCode,TrnsRef,Amount) {

		// 	var tokenValue = await AsyncStorage.getItem('Token');
		// 	console.log(tokenValue,'tokenValue')
		// 	var data = {
		// 		'status':TrnsStatus ,
		// 		'txnId':TrnsId,
		// 		'responseCode':ResponseCode,
		// 		'txnRef':TrnsRef,
		// 		'amount':Amount,
		// 	  }
		// 	  var config = {
		// 		method: 'post',
		// 		url: `${AUTH_CONFIG.BASE_URL}api/transaction`,
		// 		headers: { 
		// 		  'Authorization': 'Bearer ' + tokenValue, 
		// 		  'Content-Type': 'application/x-www-form-urlencoded'
		// 		},
		// 		data : data
		// 	  };
			  
		// 	  return axios(config);
			  
		// }
		



		// export async function PlayGame(numberObj,TAmount,Gametype,Category) {

		// 	var tokenValue = await AsyncStorage.getItem('Token');
		// 	// console.log(tokenValue,'tokenValue')
		// 	var data = qs.stringify({
		// 		'number': numberObj,
		// 		'amount':TAmount,
		// 		'category': Category,
		// 		'gameType': Gametype,
		// 	  })
		// 	  var config = {
		// 		method: 'post',
		// 		url: `${AUTH_CONFIG.BASE_URL}api/playgame`,
		// 		headers: { 
		// 		  'Authorization': 'Bearer ' + tokenValue, 
		// 		  'Content-Type': 'application/x-www-form-urlencoded'
		// 		},
		// 		data : data
		// 	  };
			  
		// 	  return axios(config);
			  
		// }

		export async function  PlayGame(numberObj, TAmount,Gametype,category) {
			var tokenValue = await AsyncStorage.getItem('Token');
			console.log('Token',tokenValue);
			console.log(category,Gametype);
			axios.defaults.headers.common['Authorization'] = tokenValue;

			axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
			return axios.post(AUTH_CONFIG.BASE_URL + 'api/playgame',
			 {
				'number': numberObj,
				'amount':TAmount,
				'category': category,
				'gameType': Gametype,
				'token':tokenValue,
			  }).then(res => res.data)
		}

		export async function Amount(TrnsStatus,TrnsId,ResponseCode,TrnsRef,Amount) {
			var tokenValue = await AsyncStorage.getItem('Token');
			console.log(tokenValue,'tokenValue')
			axios.defaults.headers.common['Authorization'] = tokenValue;
			axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
			return axios.post(AUTH_CONFIG.BASE_URL + 'api/transaction',
			{
				'status':TrnsStatus ,
				'txnId':TrnsId,
				'responseCode':ResponseCode,
				'txnRef':TrnsRef,
				'amount':Amount,
				'token':tokenValue,
			  }).then(res => res.data)
		}

		// export async function  GameHistory() {
		// 	var tokenValue = await AsyncStorage.getItem('Token');
		// 	console.log('Token',tokenValue);
		// 	// console.log(category,Gametype);
		// 	axios.defaults.headers.common['Authorization'] = tokenValue;

		// 	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		// 	return axios.get(AUTH_CONFIG.BASE_URL + 'api/playgame',
		// 	 {
		// 		// 'number': numberObj,
		// 		// 'amount':TAmount,
		// 		// 'category': category,
		// 		// 'gameType': Gametype,
		// 		'token':tokenValue,
		// 	  }).then(res => res.data)
		// }

		

		export async function GameHistory() {

			var tokenValue = await AsyncStorage.getItem('Token');
			console.log(tokenValue,'tokenValue')
			
			  var config = {
				method: 'get',
				url: `${AUTH_CONFIG.BASE_URL}api/playgame`,
				headers: { 
				  'Authorization': 'Bearer ' + tokenValue, 
				  'Content-Type': 'application/x-www-form-urlencoded'
				},
				// data : data
			  };
			  
			  return axios(config);
			  
		}

		export async function TransectionHistory() {

			var tokenValue = await AsyncStorage.getItem('Token');
			console.log(tokenValue,'tokenValue')
			
			  var config = {
				method: 'get',
				url: `${AUTH_CONFIG.BASE_URL}api/transaction`,
				headers: { 
				  'Authorization': 'Bearer ' + tokenValue, 
				  'Content-Type': 'application/x-www-form-urlencoded'
				},
				// data : data
			  };
			  
			  return axios(config);
			  
		}
		// export function logout(Token) {
		// 	return axios.delete(AUTH_CONFIG.BASE_URL + 'api/logout', { "token":Token}).then(res => res)}


// 		export async function logout () {
// 		// 	var tokenValue = await AsyncStorage.getItem('Token');
// 		// console.log(tokenValue,'tokenValue')
// 			return axios.post(AUTH_CONFIG.BASE_URL + 'api/logout', { "token":token}).then(res => res)}
// // 	var data = JSON.stringify({
// 		'number': mobileNumber
// 	  });
// 	  var config = {
// 		method: 'post',
// 		url: 'http://192.168.1.134:8080/api/generateOtp',
// 		headers: { 
// 		  'Content-Type': 'application/x-www-form-urlencoded'
// 		},
// 		data : data
// 	  };
	  
// 	  axios(config)
// 	  .then(function (response) {
// 		console.log(JSON.stringify(response.data));
// 		return response.data
// 	  })
// 	  .catch(function (error) {
// 		console.log(error);
// 		throw error;
// 	  });
// }

// export function customerRegister(data) {
// 	return axios.post(AUTH_CONFIG.BASE_URL + 'api/v1/admin/auth/register', data);
// }

// export function advisorRegister(data) {
// 	return axios.post(AUTH_CONFIG.BASE_URL + 'api/v1/admin/auth/registerAdvisor', data);
// }

// export function userList(page,per_page) {  
// 	return axios.get(AUTH_CONFIG.BASE_URL +'api/v1/admin/auth/users',{"page": page,"per_page": per_page}).then(res => res.data)
// }
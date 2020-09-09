const headers = {
	'Accept': 'application/json',
  'Content-Type': 'multipart/form-data'
};



export function uploadFile(email , file , name , directory ){

	console.log(email);
	console.log(file);
	let data = new FormData();
	data.append('email', email)
	data.append('file', file);
	//data.append(file);
    

	

return  function (dispatch, error) {
    fetch('http://localhost:3002/uploadfile', {
				method: 'POST',
				body: data,
        credentials: 'include', 
    }).then( function(response) {
			console.log('Response', response);

                response.json().then(res => {

			console.log("Response after upload to data " , res);
			dispatch({type : 'FILE_UPLOAD_SUCCESS' , payload : res})
			})
		})
	.catch(function (error) {
				dispatch({type : 'FILE_UPLOAD_FALIURE' , payload : error})
    })    
} 
}
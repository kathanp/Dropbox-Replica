const initialState = {
	fileUploader : false ,
    error : '' ,
    listOfFiles : [] ,
	listOfRecentFiles : [],
}



const _reducer =  (state=initialState , action ) => {
switch(action.type){
    case 'FILE_UPLOAD_SUCCESS' : {
        return {...state , listOfFiles : action.payload.filelist, error : action.payload.error , listOfRecentFiles : action.payload.recent_files  };
    }

    case 'FILE_UPLOAD_FALIURE' : {
        console.log('Negative response after file upload');
        return {...state , error : action.payload}
}
}
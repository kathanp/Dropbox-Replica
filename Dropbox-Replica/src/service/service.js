const headers = {
    'Accept': 'application/json'
};

export function getData(payload) {
    console.log(payload)
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'GET',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            }
        }).then(response => {
            response.json().then((res) => {
                console.log(res);
            })
        }).catch(error => {
            console.log(error) ;
        });
    };
}
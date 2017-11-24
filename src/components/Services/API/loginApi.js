

export function callLoginAPI(params) {
    return fetch('http://localhost/apiLaravel/api/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        .then((response) => response.json())
        .then((responseData) => {
            result = JSON.stringify(responseData)
        })
        .catch((error) => {
            console.error(error);
            Alert.alert('Alert Title failure' + JSON.stringify(error))
        });
}

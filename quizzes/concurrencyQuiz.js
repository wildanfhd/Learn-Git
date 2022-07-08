class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isOffline) {
                reject(new NetworkError('Gagal mendapatkan data dari internet.'));
            } else {
                resolve({name: 'SoYeon', age: 23});
            }
        }, 750);
    });
}

async function gettingUsername() {
    try {
        const fetchUser = await fetchingUserFromInternet(false);
        console.log(fetchUser);
    } catch(error) {
        return error.message;
    }
}

gettingUsername();
const Storage = {
    'saveData': (key, data) => {
        if (!key) {
            console.log(`The key ${key} doesn't exist`);
            return false;
        }
        if (!data) 
            return localStorage.setItem(key, JSON.stringify([]));
        return localStorage.setItem(key, JSON.stringify(data));
    },
    'getData': (key) => {
        if (!key) {
            console.log(`The key ${key} doesn't exist`);
            return false;
        }

        return JSON.parse(localStorage.getItem(key));
    },
    'delete': (key) => {
        if (!key) {
            console.log(`The key ${key} doesn't exist`);
            return false;
        }

        return localStorage.removeItem(key);
    }
};

export { Storage };
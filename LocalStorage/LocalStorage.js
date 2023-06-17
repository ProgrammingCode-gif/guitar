class LocalStorageInit {
    get(id) {
        if(!localStorage.getItem('products')) {
            localStorage.setItem('products', '[]')
        }

        const localGuitar = localStorage.getItem('products');
        return JSON.parse(localGuitar);
    }

    set(id) {
        const localInfo = localStorageInit.get();

        if(localInfo.findIndex(el => el === id) != -1) {
            let index = localInfo.findIndex(el => el === id);
            localInfo.splice(index, 1)
            localStorage.setItem('products', JSON.stringify(localInfo));
        } else {
            localInfo.push(id);
            localStorage.setItem('products', JSON.stringify(localInfo))
        }

        return localInfo;
    }
}

const localStorageInit = new LocalStorageInit();
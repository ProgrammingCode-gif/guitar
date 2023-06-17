class Loader {
    render() {
        const html = `<div class="loader__container"><div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div/>`;

        ROOT_LOADER.innerHTML = html;
    }

    clear() {
        ROOT_LOADER.innerHTML = '';
    }
}

const loaderComponent = new Loader();
class Product{
    constructor() {
        this.btnAddText = 'Добавить в корзину';
        this.btnRemoveText = 'Удалить из корзины';
        this.classNameActive = 'product__element-btn_active'
    }

    

    handlePurchase(id, btnEl) {
        const info = localStorageInit.set(id);

        if(info.includes(id)) {
            this.btnText = 'Удалить из корзины';
            btnEl.classList.add(this.classNameActive);
            btnEl.innerHTML = this.btnText;
        } else {
            this.btnText = 'Добавить в корзину';
            btnEl.innerHTML = this.btnText;
            btnEl.classList.remove(this.classNameActive);
        }

        headerComponent.changeNum(localStorageInit.get().length)
    }

    render() {

        const productsStore = localStorageInit.get();

        let htmlProduct = ``;
        BD.forEach(({ name, price, image, id }) => {
            let activeText = '';
            let activeClass = '';

            if(productsStore.includes(id)) {
                activeText = this.btnRemoveText;
                activeClass = this.classNameActive;
            } else {
                activeText = this.btnAddText
                activeClass = '';
            }

            htmlProduct += `<div class="product__element">
                <h3 class="product__element-name">${name}</h3>
                <img src="${image}" class="product__element-img">
                <p class="product__element-price">${price.toLocaleString()}₽</p>
                <button class="product__element-btn btn-grad ${activeClass}" onclick="products.handlePurchase(${id}, this)">${activeText}</button>
            </div>`
        })
        
        let html = `
            <div class="produt__container">
                ${htmlProduct}
            </div>
        `
        
        ROOT_PRODUCT.innerHTML = html;
    }
}

const products = new Product();
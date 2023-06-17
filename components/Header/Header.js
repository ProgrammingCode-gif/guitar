class Header {
    openShopping() {
        shoppingComponent.render()
    }

    getAmount() {
        return localStorageInit.get().length;
    }

    render() {

        let amountOfProducts = this.getAmount();

        const html = `
            <div class="header__container">
                <div class="header__content">
                    <img class="header__content-icon" onclick="headerComponent.openShopping()" src="components/Header/img/shop.svg">
                    <p class="header__content-number">${amountOfProducts}</p>
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;

    }

    changeNum(num) {
        ROOT_HEADER.querySelector('.header__content-number').innerHTML = num;
    }
}

const headerComponent = new Header();

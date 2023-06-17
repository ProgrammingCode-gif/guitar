class Shopping {
    render() {
        let htmlEl = ``;
        let totalPrice = 0;

        localStorageInit.get().forEach((el) => {
            const indexOfGuitar = BD.findIndex(guitar => guitar.id == el);
            const {name, price} = BD[indexOfGuitar]
            htmlEl += `
                <div class="shopping__element">
                    <tr class="shopping__element-name">${name}</tr>
                    <tr class="shopping__element-price">${price}₽</tr>
                </div>
            `
            totalPrice += price
        })

        let html = `
            <div class="shopping__container">
                <img onclick="shoppingComponent.clear()" src="components/Shopping/img/close.svg" class="shopping-close">
                ${htmlEl}
                <tr>Всего: ${totalPrice}₽</tr>
            </div>
        `

        ROOT_SHOPPING.innerHTML = html;

    }

    clear() {
        ROOT_SHOPPING.innerHTML = '';
    }
}

const shoppingComponent = new Shopping()


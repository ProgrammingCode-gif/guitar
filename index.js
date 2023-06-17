function render() {
    headerComponent.render();
    products.render();
    loaderComponent.clear()
}

loaderComponent.render()
BD = null;

fetch('https://mocki.io/v1/c9c6e840-a436-4bbb-a8d3-8dbfb3e7b1a9')
    .then(data => data.json())
    .then(body => {
        setTimeout(() => {
            BD = body
            render();
        }, 2000)
    })
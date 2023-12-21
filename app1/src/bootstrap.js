import faker from 'faker';

const mount = (el) => {
    let items = '';
    for (let i = 0; i<19; i++) {
        const item = faker.commerce.productName();
        // console.log('item: ', item);
        items += `<div>${item}</div>`;
    }
    // console.log('items:', items)
    el.innerHTML = items;
}
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#app1-list');
    if(el) {
        mount(el)
    }
}
export { mount };
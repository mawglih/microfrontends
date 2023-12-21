import faker from 'faker';

const app2Text = 'This is coming from app2';
console.log(app2Text);

const mount = (el) => {
    const textApp2 = `<div>Yours today number is ${faker.random.number()}</div>`;
    el.innerHTML = textApp2;
}
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#app2-display');
    if(el) {
        mount(el);
    }
};

export { mount };
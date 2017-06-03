

Vue.component(
    'modal', {
        template: '#modal-template'
    });

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        tasks: [
            {id: 1, name: 'let\'s try Vue.js', detail: 'make simple Vue.js app, study how to code vue.js, etc.'},
            {id: 2, name: 'learn JavaScript', detail: 'study JS, CoffeeScript, ES6, TypeScript.'}
        ],
        showModal: false
    }
});

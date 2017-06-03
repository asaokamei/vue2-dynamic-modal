var Hub = new Vue();

Vue.component(
    'modal', {
        template: '#modal-template',
        data: function() {
            return {
                active: false,
                task: {
                    id: '',
                    name: '',
                    detail: ''
                }
            }
        },
        methods: {
            open: function (task) {
                this.active = true;
                this.task = task;
            },
            close: function () {
                this.active = false;
            }
        },
        mounted: function() {
            this.$nextTick(function () {
                Hub.$on('open-modal', this.open);
                Hub.$on('close-modal', this.close);
            }.bind(this));
        }
    });

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        tasks: [
            {id: 1, name: 'let\'s try Vue.js', detail: 'make simple Vue.js app, study how to code vue.js, etc.'},
            {id: 2, name: 'learn JavaScript', detail: 'study JS, CoffeeScript, ES6, TypeScript.'}
        ]
    },
    methods: {
        openModal: function (task) {
            Hub.$emit('open-modal', task);
        },
        closeModal: function () {
            Hub.$emit('close-modal');
        }
    }
});

const app = new Vue({
    el: "#app",
    data: {
        saludo: 'soy ciclo de vida de vue'
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        // Al crear métodos, observadores y eventos, pero aún o accede al DOM
        // Aún no sepuede acceder a 'el'
        console.log('created');
    },
    beforeMount() {
        // Se ejecuta antes de insertar al DOM
        console.log('beforeMount');
    },
    mounted() {
        // se ejecuta al insertar en DOM
        console.log('mounted');
    },
    beforeUpdate() {
        // Al detectar un cambio
        console.log('beforeUpdate');
    },
    updated() {
        // Al realizar los cambios
        console.log('updated');
    },
    beforeDestroy() {
        // Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed() {
        // se destruye toda la instancia
        console.log('destroyed');
    },
    methods: {
        destruir() {
            this.$destroy();
        }
    }

})
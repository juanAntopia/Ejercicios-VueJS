Vue.component('hijo', {
    template: //html
        `
            <div class="py-5 bg-success">
                <h4>Componente hijo: {{ numero }}</h4>
                <h6>{{ nombre }}</h6>
            </div>
        `,
    props: ['numero'],
    data() {
        return {
            nombre: 'Ignacio'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    }
    
})
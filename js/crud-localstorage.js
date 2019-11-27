const app = new Vue({
    el: '#app',
    data: {
        titulo: 'CRUD con Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        guardarObjeto: function () {
            return localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        agregarTarea: function () {
            // console.log('diste click', this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })

            this.nuevaTarea = '';

            this.guardarObjeto();

        },
        editarTarea: function (index) {
            this.tareas[index].estado = true;

            this.guardarObjeto();
        },
        eliminar: function (index) {
            this.tareas.splice(index, 1);

            this.guardarObjeto();
        }
    },
    created: function () {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosDB === null) {
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    }
})
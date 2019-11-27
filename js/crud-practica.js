const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Gym Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        setearItem: function () {
            return localStorage.setItem('tarea', JSON.stringify(this.tareas));
        },
        agregarTarea: function () {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })

            this.nuevaTarea = "";
            this.setearItem();
            // console.log(this.tareas)
        },
        cambiarEstado: function (index) {
            this.tareas[index].estado = true
            this.setearItem();
        }

    },
    created: function () {

        var datol = JSON.parse(localStorage.getItem('tarea'));

        if (datol === null) {
            this.tareas = [];
        } else {
            this.tareas = datol;
        }

    }
})
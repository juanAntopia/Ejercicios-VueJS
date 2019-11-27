const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Frutas ricas',
        movieTitle: 'Peliculas',
        frutas: [
            { nombre: 'Manzana', cantidad: 5 },
            { nombre: 'Piña', cantidad: 0 },
            { nombre:  'Platano', cantidad: 10}
        ],
        nuevaFruta: '',
        total:0,
        peliculas: [
            { nombre: 'Batman V Superman', year: 2016, cantidad: 6},
            { nombre: 'Spiderman 3', year: 2008, cantidad: 2},
            { nombre: 'Los picapiedra', year: 1976, cantidad: 0},
            { nombre: 'Salvando al soldado Ryan', year: 1998, cantidad: 1},
        ],
        nuevaPelicula: '',
        totalMovies: 0,
    },
    methods: {
        agregarFruta() {
            console.log('Agregaste una fruta');
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
            this.nuevaFruta = '';
        },

        agregarPelicula() {
            console.log('agregaste una pelicula');
            this.peliculas.push({
                nombre: this.nuevaPelicula,
                year: 2000,
            })
        },
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas){
                this.total += fruta.cantidad
            }
            return this.total;
        },

        sumarPeliculas() {
            this.totalMovies = 0;

            for (pelicula of this.peliculas){
                this.totalMovies += pelicula.cantidad
            }

            return this.totalMovies;
        }

    }
})
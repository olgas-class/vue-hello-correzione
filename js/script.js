const {createApp} = Vue;

createApp({
    data() {
        return {
            myTitle: "Hello world",
            myImage: {
                url: "img/milano.jpg",
                text: "Duomo di Milano"
            },
            isRounded: false,
            isGray: false
        }
    },
    methods: {
        handleImageClick: function() {
            // l'immagine deve avere i bordi arrotondati
            // this.imageClass = "border-radius";
            this.isRounded = !this.isRounded;
        },
        handleButtonClick: function() {
            // this.imageClass += " gray-scale";
            this.isGray = !this.isGray;
        }
    }
}).mount("#app");
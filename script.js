new Vue({
    el: '#app',
    data: {
        angka1: 0,
        angka2: 0,
        hasil: 0,
        demo2: "",
    },
    methods: {
        tambah() {
            this.hasil = this.angka1 + this.angka2;
        },
        kurang() {
            this.hasil = this.angka1 - this.angka2;
        },
        kali() {
            this.hasil = this.angka1 * this.angka2;
        },
        bagi() {
            if (this.angka2 === 0) {
                alert("Pembagian dengan 0 tidak diizinkan");
            } else {
                this.hasil = this.angka1 / this.angka2;
            }
        },
        appendToDemo2(value) {
            this.demo2 += value;
        },
        calculateResult() {
            try {
                this.demo2 = eval(this.demo2);
            } catch (error) {
                this.demo2 = "Error";
            }
        },
        clearInput() {
            this.demo2 = "";
        },
    },
});
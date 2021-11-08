const MONTH_NAMES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
const DAYS = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
const opFecha = { year: 'numeric', month: 'short', day: 'numeric', firstDayOfWeek: '2' };

function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

function app() {
    return {
        showDatepicker: false,
        datepickerValue: "",
        month: "",
        year: "",
        weekday: "",
        no_of_days: [],
        blankdays: [],
        days: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],

        initDate() {
            let today = new Date();
            this.month = today.getMonth();
            this.year = today.getFullYear();
            this.datepickerValue = new Date(
                this.year,
                this.month,
                today.getDate()
            ).toLocaleDateString('es-ES', opFecha);
        },

        isToday(date) {
            const today = new Date();
            const d = new Date(this.year, this.month, date);

            return today.toDateString() === d.toLocaleDateString() ? true : false;
        },

        getDateValue(date) {
            let selectedDate = new Date(this.year, this.month, date);
            this.datepickerValue = selectedDate.toLocaleDateString('es-ES', opFecha);

            this.$refs.date.value =
                selectedDate.getFullYear() +
                "-" +
                ("0" + selectedDate.getMonth()).slice(-2) +
                "-" +
                ("0" + selectedDate.getDate()).slice(-2);

            console.log(this.$refs.date.value);

            this.showDatepicker = false;
        },

        getNoOfDays() {
            let daysInMonth = new Date(
                this.year,
                this.month + 1,
                0
            ).getDate();

            // find where to start calendar day of week
            let dayOfWeek = new Date(this.year, this.month).getDay();
            let blankdaysArray = [];
            for (var i = 1; i <= dayOfWeek; i++) {
                blankdaysArray.push(i);
            }

            let daysArray = [];
            for (var i = 1; i <= daysInMonth; i++) {
                daysArray.push(i);
            }

            this.blankdays = blankdaysArray;
            this.no_of_days = daysArray;
        },
    };
}

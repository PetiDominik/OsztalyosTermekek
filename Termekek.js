import Termek from "./Termek.js";
import { DATAS } from "./datas.js";


class Termekek {
    #kedvencek = [];

    constructor() {
        const SZULO = $("#datas");
        DATAS.forEach(sor => {
            new Termek(sor, SZULO);
        });

        $(window).on("KedvencGomb", (event) => {
            const TERMEK = event.detail;
            if (this.#kedvencek.includes(TERMEK)) {
                return;
            }

            this.#kedvencek.push(TERMEK);
            this.#reloadKedvencek();
        });
    }

    #reloadKedvencek() {
        const TAROLO = $("#kedvencek");
        let txt = "";

        for (const termek of this.#kedvencek) {
            txt += termek.createHTMLCode(true);
        }
        TAROLO.html(txt);
    }
}
export default Termekek
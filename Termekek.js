import Termek from "./Termek.js";
/* import { DATAS } from "./datas.js"; */
import Adatkezelo from "./Adatkezelo.js";


class Termekek {
    #kedvencek = [];
    constructor() {
        const BEOLVASO = new Adatkezelo();
        BEOLVASO.getData("http://localhost:3000/datas", this.#adatbeolvasKesz);
        

        $(window).on("KedvencGomb", (event) => {
            const TERMEK = event.detail;
            if (this.#kedvencek.includes(TERMEK)) {
                return;
            }

            this.#kedvencek.push(TERMEK);
            this.#reloadKedvencek();
        });

        $(window).on("torlesGomb", (event) => {
            const TARGET = event.detail;
            BEOLVASO.removeData("http://localhost:3000/datas", TARGET.getId(), this.getData, this.#adatbeolvasKesz);
        });
    }

    #adatbeolvasKesz(data) {
        const SZULO = $("#datas");
        SZULO.html("");

        if (data.length === 0) {
            SZULO.html("<h1>Nincs itt semmi ☹</h1>")
        } else {
            data.forEach(sor => {
                new Termek(sor, SZULO);
            });
        }
    }

    #reloadKedvencek() {
        const TAROLO = $("#kedvencek");
        let txt = "";

        for (const termek of this.#kedvencek) {
            txt += termek.createHTMLCode(true, this.#kedvencek);
        }
        TAROLO.html(txt);

    }
}
export default Termekek
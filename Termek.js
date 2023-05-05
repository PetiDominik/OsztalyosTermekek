class Termek {
    #adat = {};
    #div;
    #kedvencButton
    #deleteButton;
    constructor(adat, szuloElem) {
        this.#adat = adat;
        szuloElem.append(this.createHTMLCode());
        
        this.#div = $(".termek:last-child");
        this.#kedvencButton = $(".termek:last-child .kedvenc");
        this.#deleteButton = $(".termek:last-child .torol").eq(0);

        this.#kedvencButton.on("click", () => {
            this.#gombTrigger("KedvencGomb");
            this.#div.html()
            /* console.log(text); */
            if (true) {
                this.#div.html(this.#div.html().replace("✩", "★"));
            }
        });

        this.#deleteButton.on("click", () => {
            this.#gombTrigger("torlesGomb");
        });
    }

    createHTMLCode(disableButton = false) {
        let txt = "";
        for (const key in this.#adat) {
            txt += `<p>${this.#adat[key]}</p>`;
        }
        let btn = disableButton ? "" : `<button class="kedvenc">Kedvencekhez adás ✩</button><button class="torol">Törlés</button>`;
        return `<div class="termek">
                    ${txt}
                    ${btn}
                </div>`;
    }

    #gombTrigger(nev) {
        const EVENT = new CustomEvent(nev, {
            detail: this
        });
        window.dispatchEvent(EVENT);
    }

    getId() {
        return this.#adat.id;
    }
}

export default Termek
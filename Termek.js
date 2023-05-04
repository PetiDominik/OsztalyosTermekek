class Termek {
    #adat = {};
    #div;
    #button;
    constructor(adat, szuloElem) {
        this.#adat = adat;
        szuloElem.append(this.createHTMLCode());
        
        this.#div = $(".termek:last-child");
        this.#button = $(".termek:last-child button");
        
        this.#button.on("click", () => {
            this.kedvenGombTrigger();
        });
    }

    createHTMLCode(disableButton = false) {
        let txt = "";
        for (const key in this.#adat) {
            txt += `<p>${this.#adat[key]}</p>`;
        }
        let btn = disableButton ? "" : "<button>Kedvencekhez adás ✩</button>";
        return `<div class="termek">
                    ${txt}
                    ${btn}
                </div>`;
    }

    kedvenGombTrigger() {
        const EVENT = new CustomEvent("KedvencGomb", {
            detail: this
        });
        window.dispatchEvent(EVENT);
    }
}

export default Termek
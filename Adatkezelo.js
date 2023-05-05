
class Adatkezelo {
    #datas;
    constructor() {
        this.#datas = [];
    }
    getDatas() {
        return this.#datas;
    }

    getData(endPoint, callbackFn) {
        fetch(endPoint, {
            method : "GET",
            headers : {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            this.#datas = data;
            callbackFn(data);
        })
        .catch((err) => console.log(err));
    }

    removeData(endPoint, id, callbackFn, callbackCallbackFn) {
        fetch(`${endPoint}/${id}`, {
            method: 'DELETE',
        })
        .then((res) => {
            callbackFn(endPoint, callbackCallbackFn);
        })
        .then(res => console.log(res))
    }
}

export default Adatkezelo;
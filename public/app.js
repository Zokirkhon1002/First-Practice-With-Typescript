import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payments.js";
import { ListTemplate } from "./classes/ListTemplates.js";
// form
const form = document.querySelector(".new-item-form"); /**returns form with it's childs as tag*/
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (type.value.length &&
        tofrom.value.length &&
        details.value.length &&
        amount.value.length) {
        let values = [
            tofrom.value,
            details.value,
            amount.valueAsNumber,
        ];
        let doc;
        if (type.value.toLowerCase() === "invoice") {
            doc = new Invoice(...values);
        }
        else {
            doc = new Payment(...values);
        }
        list.render(doc, type.value, "end");
        setTimeout(() => {
            tofrom.value = "";
            details.value = "";
            amount.value = "";
        }, 200);
    }
    else {
        alert("Please fill out all empty fields");
    }
});

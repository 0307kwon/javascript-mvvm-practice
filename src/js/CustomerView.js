import CustomerViewModel from "./CustomerViewModel.js";

class View {
  initialize() {
    this.render();
    this.initEvent();
  }

  render() {}

  initEvent() {}
}

export default class CustomerView extends View {
  constructor() {
    super();
    this.customerViewModel = new CustomerViewModel();
    this.customerViewModel.addListener(this);
  }

  render() {
    document.querySelector(".main").innerHTML = `
    <ul class="js-customer-list">
    </ul>
    <form class="js-customer-form">
        <input type="text" placeholder="이름" class="js-customer-form__name" /> <br />
        <input type="email" placeholder="이메일" class="js-customer-form__email" /> <br />
        <button type="submit">제출하기</button>
      </form>
    `;

    this.$list = document.querySelector(".js-customer-list");
    this.$form = document.querySelector(".js-customer-form");
    this.$name = document.querySelector(".js-customer-form__name");
    this.$email = document.querySelector(".js-customer-form__email");

    this.#renderCustomerList();
  }

  initEvent() {
    this.$form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (this.customerViewModel.save()) {
        alert("사용자 정보가 등록되었습니다");
        this.$name.value = "";
        this.$email.value = "";
        this.#renderCustomerList();
      }
    });

    this.#addInputEvent("name");
    this.#addInputEvent("email");

    this.customerViewModel.name = "얍얍";
  }

  update(field, value) {
    this["$" + field].value = value;
  }

  #renderCustomerList() {
    const customerList = this.customerViewModel.customerList;
    const template = [...customerList]
      .map((customer) => {
        return `<li>이름 : ${customer.name} 이메일 : ${customer.email}</li>`;
      })
      .join("");
    this.$list.innerHTML = template;
  }

  #addInputEvent(field) {
    this["$" + field].addEventListener("change", (event) => {
      const value = event.target.value;
      this.customerViewModel[field] = value;
    });

    this["$" + field].addEventListener("keyup", (event) => {
      const value = event.target.value;
      this.customerViewModel[field] = value;
    });
  }
}

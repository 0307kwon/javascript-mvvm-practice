import CustomerModel from "./CustomerModel.js";

class ViewModel {
  constructor() {
    this._listeners = [];
  }

  addListener(view) {
    this._listeners.push(view);
  }

  notify(field, value) {
    this._listeners.forEach((view) => {
      view.update(field, value);
    });
  }
}

export default class CustomerViewModel extends ViewModel {
  constructor() {
    super();
    this.customerModel = new CustomerModel();
  }

  get customerList() {
    return CustomerModel.list;
  }

  get name() {
    return this._name || "";
  }

  set name(value) {
    this._name = value;
    this.notify("name", value);
  }

  get email() {
    return this._email || "";
  }

  set email(value) {
    this._email = value;
    this.notify("email", value);
  }

  save() {
    "name,email".split(",").forEach((field) => {
      this.customerModel[field] = this["_" + field];
    });

    CustomerModel.add(this.customerModel);
    this.customerModel = new CustomerModel();

    return true;
  }
}

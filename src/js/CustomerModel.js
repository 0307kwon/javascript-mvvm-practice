export default class CustomerModel {
  constructor() {
    this.name = null;
    this.email = null;
  }

  static add(customerModel) {
    if (!(customerModel instanceof CustomerModel)) {
      console.error("customer 정보가 CustomerModel의 인스턴스가 아닙니다.");
      return;
    }

    CustomerModel.list.add(customerModel);
    console.log(CustomerModel.list);
  }
}

CustomerModel.list = new Set();

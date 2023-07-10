import { makeAutoObservable } from "mobx";
const limit = 10;

class Items {
  data = [];
  page = 1;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  addPage() {
    this.page = +1;
  }

  fetchNewItems() {
    this.loading = true;

    fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${this.page}&_limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => (this.data = [...this.data, ...data]))
      .finally(() => {
        this.loading = false;
      });
  }
}

const storeItems = new Items();

export default storeItems;

import { action, observable } from "mobx";

export class CounterStore {
  @observable
  value: number = 0;

  @action
  async increment() {
    this.value += 1;
  }

  @action
  async decrement() {
    this.value -= 1;
  }
}

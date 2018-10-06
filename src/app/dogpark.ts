export class Dogpark {
  id: number;
  title = '';
  complete = false;
  name = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

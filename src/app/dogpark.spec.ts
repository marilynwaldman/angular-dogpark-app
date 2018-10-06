import {Dogpark} from './dogpark';

describe('Dogpark', () => {
  it('should create an instance', () => {
    expect(new Dogpark()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const dogpark = new Dogpark({
      title: 'hello',
      complete: true,
      name: 'doggy',
    });
    expect(dogpark.title).toEqual('hello');
    expect(dogpark.complete).toEqual(true);
    expect(dogpark.name).toEqual('doggy');
  });
});

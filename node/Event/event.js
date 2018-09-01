/**
 *
 *  Event
 */

 const EventEmmiter = require('events');


class Person extends EventEmmiter {
  constructor(name) {
    super();
    this.name = name;
    this.age = 0;
    this.group();
  }

  group() {
    setInterval(() => {
      this.age++;
      this.emit('group');
    }, 1000)
  }

}

const p1 = new Person('fuck');
p1.addListener('group', () => {
  console.log('长大了一岁')
});

// document.body.addEventListener('click')
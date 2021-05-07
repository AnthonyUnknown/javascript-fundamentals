describe('Prototype', () => {
  it('Should use Function constructor without prototype', () => {
    // TODO: implement
    function User(name) {
      return {
        name: name,
        sayHello () {
          return "Hello, " + this.name
        }
      }
    }

    const user1 = new User('user1');
    const user2 = new User('user2');
    

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello !== user2.sayHello).toBe(true);
  });

  it('Should use prototype', () => {
    // TODO: implement
    function User(name) {
      this.name = name;
    }

    User.prototype.sayHello = function () {
      return "Hello, " + this.name
    }
    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello === user2.sayHello).toBe(true);
  });

  it('Create class ArticleList with 2 methods add and articleCount', () => {
    // TODO: implement
    class ArticleList {
        constructor () {
          this.list = []
        }
        add (stringPush) {
          return this.list.push(stringPush);
        }
        articleCount () {
          return this.list.length;
        }
    }
    const list1 = new ArticleList();
    const list2 = new ArticleList();
    list1.add('aaaa');
    list2.add('bbb');
    expect(list1.list.length).toBe(1);
  });

  it('Extend using prototype', () => {
    /*
      Component should has following methods:
      render -  returns empty string
      getData - return data
      constructor - accept object width property data, that should be returned from getData
    */

    // TODO: implement
    class Component {
      constructor(obj) {
        this.data = obj.data;
      }
      render () {
        return "";
      }
      getData()  {
        return this.data;
      }
      setData(obj) {
        Object.assign(this.data, obj);
      }
    };

    /*
       UserComponent should extends Component
       override render method
       add 2 following methods:
       login - set data.name
       logout - set data.name undefined
     */


    // TODO: implement
    class UserComponent extends Component {
      render () {
        if (this.data.name === undefined) {
          this.data.name = "guest"
          return `${this.data.msg}, ${this.data.name}!`
        } else {
          return `${this.data.msg}, ${this.data.name}!`
        }
      }
      login (name) {
        this.data.name = name;
      };
      logout () {
        this.data.name = undefined;
      }

    }

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should extend Child class from Parent ', () => {
    // Component and  UserComponent has requirement from previous test

    // TODO: implement
    function extend(Child, Parent) {
      var F = function() { };
      F.prototype = Parent.prototype;

      Child.prototype = new F();
      Child.prototype.constructor = Child;
      Child.super = Parent.prototype;
    }

    // TODO: implement
    class Component {
      constructor(obj) {
        this.data = obj.data;
      }
      render () {
        return "";
      }
      getData()  {
        return this.data;
      }
      setData(obj) {
        Object.assign(this.data, obj);
      }
    };
    
    // TODO: implement
    // NOTE: for inheritance should be used extend method
    class UserComponent {
      render () {
        if (this.data.name === undefined) {
          this.data.name = "guest"
          return `${this.data.msg}, ${this.data.name}!`
        } else {
          return `${this.data.msg}, ${this.data.name}!`
        }
      }
      login (name) {
        this.data.name = name;
      };
      logout () {
        this.data.name = undefined;
      }

    }

    extend(UserComponent, Component);

    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });



    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should use Class declaration for Component and UserComponent', () => {
    // TODO implement Component and UserComponent from previous tasks using Class declaration
    let Component = class MyClass {
      render () {
        if (this.data.name === undefined) {
          this.data.name = "guest"
          return `${this.data.msg}, ${this.data.name}!`
        } else {
          return `${this.data.msg}, ${this.data.name}!`
        }
      }
      login (name) {
        this.data.name = name;
      };
      logout () {
        this.data.name = undefined;
      }

    }

    let UserComponent = class MyClass1 extends Component {
      render () {
        if (this.data.name === undefined) {
          this.data.name = "guest"
          return `${this.data.msg}, ${this.data.name}!`
        } else {
          return `${this.data.msg}, ${this.data.name}!`
        }
      }
      login (name) {
        this.data.name = name;
      };
      logout () {
        this.data.name = undefined;
      }

    }

    // TODO: write own test, see previous task as example
    expect(userComponent.render()).toBe('Hello, Tom!');
  });

  it('Should use Object.create for extending one object from another', () => {
    // DON'T CHANGE
    const greetings = {
      msg: 'Hello',
      name: 'guest',

      greetings: function() {
        return `${this.msg}, ${this.name}!`;
      }
    };

    let helloTom = Object.create(greetings, {
      name: "Tom"
    });
    let greetingsBob = Object.create(greetings, {
      msg: "Greetings",
      name: "Bob"
    });

    expect(helloTom.greetings()).toBe('Hello, Tom!');
    expect(greetingsBob.greetings()).toBe('Greetings, Bob!');
    expect(greetings.greetings()).toBe('Hello, guest!');
  });
});

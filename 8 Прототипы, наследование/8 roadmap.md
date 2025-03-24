Как осуществить прототипное наследование?

- для объектов `__proto__`
- для функций prototype
- Object.create()

Как осуществить наследование свойства в this?

Когда мы создаём объект или класс, свойства, определённые в this, принадлежат конкретному экземпляру. Чтобы наследовать их, нужно явно вызывать родительский конструктор. Рассмотрим несколько способов.

```js
function Parent(name) {
  this.name = name;
}

function Child(name, age) {
  Parent.call(this, name); // Наследуем свойство name
  this.age = age;
}

const kid = new Child("Alice", 10);
console.log(kid.name); // "Alice"
console.log(kid.age); // 10
```

Как создать объект без прототипа?

Object.create(null)

Как изменить прототип у созданного объекта?

`user.__proto__ = {}` Object.setPrototypeOf(obj, prototype)

Как получить прототип у объекта/числа/строки/функции?

Object.getPrototypeOf()

`__proto__`

// Write an object with getter/setter field name.

const obj = {
  _name: [], // ['name', length][]
  set name(value) {
    value = value.split(",");
    value.forEach((element, index) => {
      let tempName = [element, element.length];
      obj._name.push(tempName);
    });
  },
  get name() {
    return obj._name;
  },
};

obj.name = "Armen,Hakob,Karlen";

console.log(obj.name);

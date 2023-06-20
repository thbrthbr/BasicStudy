function fishbread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = "flour";
}

let bread1 = new fishbread("cream", 1200);

function user(name) {
  console.log(new.target);
  this.name = name;
}

let result1 = new user("john");
console.log(result1);

function user2(name) {
  if (!new.target) {
    //이걸 해주면 new 하고 객체를 만들지 않아도 객체가 생성됨
    return new user2(name);
  }
  this.name = name;
}

let result2 = user2("john");
console.log(result2);

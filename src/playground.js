const pie = {
  type: "Apple",
};

const userAccount = {
  name: "Kieron",
  id: 0,
};

const purchaseOrder = {
  owner: userAccount,
  item: pie,
};

const allOrders = [purchaseOrder];

console.log(purchaseOrder);
console.log(allOrders[0].owner.id);

const person = { first: "John", last: "Doe" };
const hello2 = ({ first, last }) => `Hello ${first} ${last}!`;
hello2(person); // error!

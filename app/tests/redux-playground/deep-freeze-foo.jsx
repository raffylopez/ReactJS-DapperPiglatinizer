var deepFreezeStrict = require('deep-freeze-strict')

var item = {
  test: "message"
}
item.test = "aloha"
deepFreezeStrict(item)
item.test = "hullo"

var recv = (item) => {
  item.asdfsadf = "dfasdfsadf"
  console.log(item)
}

console.log(item.test)
recv(deepFreezeStrict(item))

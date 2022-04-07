var web3 = require("web3")
var web3 = new web3(new web3.providers.HttpProvider("http://127.0.0.1:7545"))
web3.eth.call({
     from: "0xcA32b5f7fF8505d09D3897E22f07bB7C81EBC177",
     to: "0xd9145CCE52D386f254917e481eB44e9943F39138",
     data: web3.utils.sha3("myUint()").substr(0, 10)
}).then((res) => console.log(res))

console.log("decoded output is", web3.utils.sha3("myUint()"))
console.log("function signature is", web3.utils.sha3("myUint()").substr(0, 10))

var contract_2 = new web3.eth.Contract([
     {
          "constant": false,
          "inputs": [
               {
                    "internalType": "uint256",
                    "name": "_myUint",
                    "type": "uint256"
               }
          ],
          "name": "setUint",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
     },
     {
          "constant": true,
          "inputs": [],
          "name": "myUint",
          "outputs": [
               {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
               }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
     }
], "0x9F96006C58aDd0982802853f9574bE4264732e79")

console.log(contract_2)

var func = contract_2.methods.myUint()
console.log(func)

func.call().then(console.log)

contract_2.methods.setUint(56).send({ from: "0xD881C4E82DCe667B98fC1feBc98C0E65F89b10AB" }).then(console.log)
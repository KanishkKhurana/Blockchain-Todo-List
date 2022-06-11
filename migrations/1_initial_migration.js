const Migrations = artifacts.require("Migrations");
const TodoList = artifacts.require("../contracts/TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(TodoList);
};



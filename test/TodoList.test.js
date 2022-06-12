const TodoList = artifacts.require("../contracts/TodoList.sol");

contract("TodoList", (accounts) => {
    before(async () => {
        this.todolist = await TodoList.deployed(); //before any test runs , essentially get a copy of the deployed smart contract
    })

    it('deploys successfully', async () => {
        const address = await this.todolist.address;
        assert.notEqual(address, 0x0);
        assert.notEqual(address, '');
        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
    })

    it('lists tasks', async () => {
        const taskCount = await this.todolist.TaskCount();
        const task = await this.todolist.tasks(taskCount);
        assert.equal(task.id.toNumber(), taskCount.toNumber());
    })
})
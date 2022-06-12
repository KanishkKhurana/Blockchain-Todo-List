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

    it('creates task', async () => {
        const result = await this.todolist.createTask('A new task');
        const taskCount = await this.todolist.TaskCount();
        assert.equal(taskCount, 2);
        const event = result.logs[0].args;
        assert.equal(event.id.toNumber(), 2);
        assert.equal(event.content, 'A new task');
        assert.equal(event.completed, false);
    })

    it('toggles task', async () => {
        const result = await this.todolist.toggleCompleted(1);
        const task = await this.todolist.tasks(1);
        assert.equal(task.completed, true);
        const event = result.logs[0].args;
        assert.equal(event.id.toNumber(), 1);
        assert.equal(event.completed, true);
    })
})
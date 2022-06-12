//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0;

contract TodoList{
    uint public TaskCount=0;

    struct Task{
        uint id;
        string content;
        bool completed;
    }

    constructor() public {
        createTask("Hello Blockchain");
    }

    mapping(uint => Task) public tasks;

    event TaskCreated(
        uint id, 
        string content,
        bool completed
    );

    event taskCompleted(
        uint id, 
        bool completed
    );

    function createTask(string memory _content) public {
        TaskCount++;
        tasks[TaskCount] = Task(TaskCount, _content, false);
        emit TaskCreated(TaskCount, _content, false);
    }

    function toggleCompleted(uint _id) public {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
        emit taskCompleted(_id, _task.completed);
    }
}
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

    function createTask(string memory _content) public {
        TaskCount++;
        tasks[TaskCount] = Task(TaskCount, _content, false);
    }
}
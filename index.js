
const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,

    completeTask: function()  {
      this.complete = true;
    },

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", 'clean charlies box'); // task 0
const task2 = newTask("Do Laundry", 'whites and darks'); // task 1

console.log(task1.title);


task1.logTaskState();
task1.completeTask();
task1.logTaskState();

task2.logTaskState();
task2.completeTask();
task2.logTaskState();


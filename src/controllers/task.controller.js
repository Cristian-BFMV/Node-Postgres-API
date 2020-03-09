import Task from "../models/Taks";

export function createTask(req, res) {
  try {
    const { name, done, projectid } = req.body;
    const newTask = Task.create(
      {
        name,
        done,
        projectid
      },
      {
        fields: ["name", "done", "projectid"]
      }
    );
    res.status(200).json({
      message: "Task create succesfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong"
    });
  }
}

export async function getTasks(req, res) {
  const tasks = await Task.findAll({
    attributes: ["id", "projectid", "name", "done"],
    order: [["id", "DESC"]]
  });
  res.status(200).json({
    tasks
  });
}
export async function getOneTask(req, res) {
  const { id } = req.params;
  const task = await Task.findOne({
    where: {
      id
    },
    attributes: ["id", "projectid", "name", "done"]
  });

  res.status(200).json({
    task
  });
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { projectid, name, done } = req.body;
  /**No parece ser necesario :/ */
  const task = await Task.findOne({
    attributes: ["name", "projectid", "id"],
    where: {
      id
    }
  });
  const updatedTask = await task.update(
    {
      name,
      done,
      projectid
    },
    {
      where: {
        id
      }
    }
  );
  res.status(200).json({
    message: "Task updated",
    updatedTask
  });
}
export async function deleteTask(req, res) {
  const { id } = req.params;
  await Task.destroy({
    where: {
      id
    }
  });
  res.status(200).json({
    message: "Task deleted succesfully"
  });
}
export async function getTaskByProject(req, res) {
  const { projectid } = req.params;
  const tasks = await Task.findAll({
    where: {
      projectid
    },
    attributes: ["id", "projectid", "name", "done"]
  });
  res.status(200).json({
    tasks
  });
}

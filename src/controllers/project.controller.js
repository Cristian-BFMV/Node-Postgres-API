import Project from "../models/Project";

export async function getProjects(req, res) {
  try {
    /** Obteniendo todos los datos en la tabla projects a través del modelo del ORM*/
    const projects = await Project.findAll();
    res.status(200).json({
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong"
    });
  }
}

export async function getOneProject(req, res) {
  try {
    /**Obteniendo los query params desde la petición */
    const { id } = req.params;
    /**Obteniendo el proyecto a través del id */
    const project = await Project.findOne({
      where: {
        id
      }
    });
    res.status(200).json({
      project
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createProject(req, res) {
  try {
    /**Obteniendo los datos desde el body de la petición */
    const { name, priority, description, deliverydate } = req.body;
    /**Creando un proyecto a través del modelo creado con el ORM */
    let newProject = await Project.create(
      {
        name,
        priority,
        description,
        deliverydate
      },
      /**Define que campos vamos a insertar en la tabla */
      {
        fields: ["name", "priority", "description", "deliverydate"]
      }
    );
    /**Vefica que se haya creado el proyecto y envia la respuesta al cliente */
    if (newProject) {
      res.status(200).json({
        message: "Project created succesfully",
        data: newProject
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {}
    });
  }
}

export async function deleteProject(req, res) {
  const { id } = req.params;
  const deleteRowCount = await Project.destroy({
    where: {
      id
    }
  });
  res.status(200).json({
    message: "Project deleted succesfully"
  });
}

export async function updateProject(req, res) {
  try {
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;
    const projects = await Project.findAll({
      attributes: ["id", "name", "priority", "description", "deliverydate"],
      where: {
        id
      }
    });
    if (projects.length > 0) {
      projects.forEach(async project => {
        await project.update({
          name,
          priority,
          description,
          deliverydate
        });
      });
    }

    return res.status(200).json({
      message: "Project updated succesfully",
      data: projects
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong"
    });
  }
}

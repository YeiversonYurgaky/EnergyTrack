const { CreateUser, FindAllUser } = require("../repository/userRepository");
const UserModel = require("../models/UsuariosModels");

// Registrar/Crear usuarios
async function create(req, res) {
  const params = req.body;

  const user = new UserModel();

  if (
    !params.nombres ||
    !params.apellidos ||
    !params.usuario ||
    !params.password
  ) {
    res.status(404).send({ message: "Todos los campos son requeridos" });
    return;
  }

  user.nombres = params.nombres;
  user.apellidos = params.apellidos;
  user.usuario = params.usuario;
  user.email = params.email;
  user.password = params.password;

  const response = await CreateUser(user);
  res.status(response.status).send(response);
}
// Mostar todos los usuarios
async function findAll(req, res) {
  const response = await FindAllUser();
  res.status(response.status).send(response);
}

// login Controller
async function login(req, res) {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    res
      .status(400)
      .send({ message: "El usuario y la contraseña son requeridos." });
    return;
  }

  const user = await UserModel.findOne({ usuario });

  if (!user) {
    res.status(404).send({ message: "Usuario no encontrado." });
    return;
  }

  if (user.password === password) {
    res.status(200).send({ message: "Inicio de sesión exitoso." });
  } else {
    res.status(401).send({ message: "Contraseña incorrecta." });
  }
}

module.exports = {
  create,
  findAll,
  login,
};

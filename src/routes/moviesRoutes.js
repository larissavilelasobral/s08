const controllers = require("../controllers/moviesControllers")

const express = require("express"); //importa
const router = express.Router(); //instanciar

router.get("/", controllers.inicio);
router.get("/todos", controllers.getAll);
router.get("/titulo", controller.getByTitle);
router.get("/genero", controller.getByGenre);
router.get("/:id", controller.getById);

module.exports = router
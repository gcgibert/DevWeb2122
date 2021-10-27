module.exports = app => {
    const controlador = require("../controladores/controller.js");

    var router = require("express").Router();

    router.post("/", controlador.create);

    router.get("/", controlador.findAll);

    router.get("/published", controlador.findAllPublished);

    router.get("/:id", controlador.findOne);

    router.put("/:id", controlador.update);

    router.delete("/:id", controlador.delete);

    router.delete("/", controlador.deleteAll);

    app.use('/api/disciplinas', router);
};
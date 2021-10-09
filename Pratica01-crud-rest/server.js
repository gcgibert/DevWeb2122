const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.json({mensagem: "Bem-vindo à primeira aplicação CRUD-REST"})
});

require("./rotas/crudrest.rotas")(app);

const PORTA = process.env.PORTA || 8080;

app.listen(PORTA, () => {
    console.log(`O servidor está a ouvir na porta ${PORTA}`);
});

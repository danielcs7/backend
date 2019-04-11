//http://localhost:3000/boxes

GET => USADO PARA BUSCAR ALGUMA INFORMAÇÃO
POST => USADO PARA CRIAR ALGUMA INFORMAÇÃO
PUT => USADO PARA ALTERAR INFORMAÇÃO
DELETE => USADO PARA DELETAR A INFORMAÇÃO

routes.get("/teste", (req, res) => {
return res.send("Hello World");
});

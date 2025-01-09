//1- importando o fastifay
import Fastify from "fastify";

const fastify = Fastify({
    logger: true
});

//2- Declarando a rota
fastify.get('/', (request, response) => {
    return {message: 'OI! Chamado a partir da raiz!'}
});

//3- Inicializar o servidor
fastify.listen({port: 3000});

//4 - Executando o server.js para perceber as mudanças usar a flag --watch
// 
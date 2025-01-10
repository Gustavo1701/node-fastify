//1- importando o fastifay
import Fastify from "fastify";
import { pasteis } from "./db/db.pasteis.js";

const fastify = Fastify({
    logger: true
});

//2- Declarando a rota
fastify.get('/', (request, response) => {
    return {message: 'OI! Chamado a partir da raiz!'}
});

fastify.get('/pasteis', (request, response) => {
    return {
        data: pasteis,
        qtd: pasteis.length,
        message: 'Retornou todos os pasteis!'
    }
});

fastify.post('/pastel', (request, response) => {
   
    const pastel = request.body;

    const pastelExistente = pasteis.find(p => p.id === pastel.id);

    if(pastelExistente){
        return response.status(400).send({
            message: `O pastel de id: ${pastel.id} já existe`
        });
    } 

    pasteis.push(pastel);

    return{
        messege: 'Pastel adicionado com sucesso!',
        qtd: pasteis.length,
        data: pasteis,
    }
});

// fastify.get('/pastel/:id', (request, response) => {
//     const id = parseInt(request.params.id);

//     const produto = 
// });

//3- Inicializar o servidor
fastify.listen({port: 3000});

//4 - Executando o server.js para perceber as mudanças usar a flag --watch
// 
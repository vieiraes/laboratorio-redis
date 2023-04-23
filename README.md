# laborartorio-redis

Laboratorio de testes para o aprendizado do funcionamento da ferramanta Redis


O lab simula um delay no response de um endpoint, e quando adicionamos a camada de Redis, deve se ver claramente que o tempo de resposta é reduzido drasticamente.
</br></br>

## Tools
Ferramentas para manuesear as chaves no Redis

Ferramenta oficial
https://redis.com/redis-enterprise/redis-insight/#insight-form

Extensao do VSCode para manusear as chaves do Redis
https://github.com/cweijan/vscode-database-client

</br></br>


## Como utilizar

Suba a estrutura de redis em docker como comando 
</br></br>
```
yarn docker:up
```
Isto subirá uma instancia docker do redis padrão na configuração 120.0.0.1:6379

</br></br></br>


Rode a aplicação com o comando 
```
yarn dev
```

## Rotas de testes

### GET /products
- lista todos os ítens do BD
</br>

### GET /products/:id
- rota com uma simulação de delay de acessoa o banco de dados
- ao executar a mesma rota pela primeira vez, o tempo de resposta deve ser aleatoriamente de até 5segundos, e um cache no Redis será criado para este mesmo ID de product

- ao executar pela segunda vez, a rota retornará a resposta do item buncando as informações do Redis. nisto o tempo de resposta cairá drasticamente


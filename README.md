```shell
pnpm init 

pnpm add fastify 

pnpm add -D typescript @types/node tsx

npx tsc --init 

docker login -u registry-user triggerdev-registry.localhost # essa url deve estar no hosts
cat ~/.docker/config.json # dá pra ver os registries nos quais estamos logados

npx trigger.dev@latest login -a http://triggerdev.localhost # essa url deve estar no hosts

pnpm dlx trigger.dev@latest init -p proj_gxtoicdyotbsfuevfkhu -a http://triggerdev.localhost # >>> erro
npx trigger.dev@latest init -p proj_gxtoicdyotbsfuevfkhu -a http://triggerdev.localhost # >>> ok

npx trigger.dev@latest dev
```
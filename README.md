```shell
pnpm init 

pnpm add fastify 

pnpm add -D typescript @types/node tsx

npx tsc --init 

docker login -u registry-user triggerdev-registry.localhost # essa url deve estar no hosts
docker login -u registry-user https://scenes-bright-binary-fundamental.trycloudflare.com
cat ~/.docker/config.json # dá pra ver os registries nos quais estamos logados

npx trigger.dev@latest login -a http://triggerdev.localhost # essa url deve estar no hosts

pnpm dlx trigger.dev@latest init -p proj_gxtoicdyotbsfuevfkhu -a http://triggerdev.localhost # >>> erro
npx trigger.dev@latest init -p proj_gxtoicdyotbsfuevfkhu -a http://triggerdev.localhost # >>> ok
npx trigger.dev@latest init -p proj_lovsjlbvulcilwlxfthf -a https://written-pavilion-pulled-suited.trycloudflare.com # >>> ok

npx trigger.dev@latest dev
npx trigger.dev@latest deploy -a http://triggerdev.localhost --skip-sync-env-vars --self-hosted # ainda não funcionou!!!!
```

# CLOUDFLARE tunnel

Instalar cloudflared: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/

Criar tunel: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/do-more-with-tunnels/trycloudflare/

 cloudflared tunnel --url http://localhost:8030 -> https://pray-adjusted-yarn-newspaper.trycloudflare.com

 cloudflared tunnel --url http://localhost:8050 -> https://scenes-bright-binary-fundamental.trycloudflare.com
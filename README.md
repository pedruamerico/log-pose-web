# Log Pose — Landing

Landing page single-page do **Log Pose**, um instalador/catálogo curado de apps para Windows (baseado em winget).

Construída em **Next.js (App Router) + TypeScript + Tailwind CSS v4**, com fontes self-hosted via `next/font`.

## Estrutura

```
log-pose-web/
└── app/        ← o projeto Next.js (Root Directory na Vercel)
```

> A pasta `design_handoff_log_pose_landing/` (referência de design) não é versionada.

## Rodar localmente

```bash
cd app
npm install
npm run dev      # http://localhost:3000
```

Outros scripts: `npm run build` (build de produção) · `npm start` (servir o build) · `npm run lint`.

## Deploy na Vercel

1. Em [vercel.com/new](https://vercel.com/new), importe o repositório `pedruamerico/log-pose-web`.
2. **Importante:** defina **Root Directory = `app`** (o projeto não está na raiz).
3. Framework Preset: **Next.js** (detectado automaticamente). Build/Output ficam no padrão.
4. Deploy. Cada `git push` na branch `main` dispara um novo deploy.

## Download do app

Os botões "Baixar" apontam para os releases em
[github.com/pedruamerico/log-pose/releases](https://github.com/pedruamerico/log-pose/releases).
O link fica em [`app/src/app/components.tsx`](app/src/app/components.tsx).

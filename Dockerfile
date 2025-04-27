# Étape 1 : Build de l'application
FROM node:20-alpine AS builder

# Dossier de travail
WORKDIR /app

# Copie les fichiers de dépendances
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Installe les dépendances
RUN npm install

# Copie tout le reste
COPY . .

# Build de l'application Next.js
RUN npm run build

# Étape 2 : Image finale pour exécuter l'app
FROM node:20-alpine AS runner

# Définir NODE_ENV à production
ENV NODE_ENV=production

# Crée un dossier non-root sécurisé
WORKDIR /app

# Copie uniquement les fichiers nécessaires
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/node_modules node_modules

# Par défaut, Next écoute sur le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]

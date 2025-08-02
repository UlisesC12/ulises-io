#!/bin/bash

echo "🚀 Empezando el despliegue para ulises.io..."

# 1. Descargar los últimos cambios
echo "📥 Descargando cambios desde Git..."
git pull origin main

# 2. Instalar dependencias
echo "📦 Instalando/actualizando dependencias..."
npm install

# 3. Construir la aplicación
echo "🏗️  Construyendo la aplicación de producción..."
npm run build

# 4. Corregir permisos
echo "🔒 Corrigiendo permisos de archivos..."
sudo chown -R www-data:www-data .

# 5. Recargar la aplicación con PM2
echo "🔄 Recargando la aplicación como usuario www-data..."
sudo -u www-data PM2_HOME=$(pwd)/.pm2 pm2 reload ulises-io-app

echo "✅ ¡Despliegue de ulises.io completado!"
Write-Host "🚀 Starting Auto Deploy..." -ForegroundColor Green

# Go to project folder
cd D:\jewelone-nextjs

Write-Host "📥 Pulling Latest Code..." -ForegroundColor Yellow
git fetch origin
git reset --hard origin/main

Write-Host "📦 Installing Dependencies..." -ForegroundColor Yellow
npm install --legacy-peer-deps

Write-Host "🏗 Building Project..." -ForegroundColor Yellow
npm run build

Write-Host "♻ Restarting PM2..." -ForegroundColor Yellow
pm2 restart all
pm2 save

Write-Host "✅ Deploy Completed Successfully!" -ForegroundColor Green

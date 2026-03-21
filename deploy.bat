@echo off
REM Navigate to the project directory
cd D:\jewelone-nextjs

REM Pull the latest code from GitHub
git pull origin main

REM Install dependencies
npm install

REM Build the Next.js app
npm run build

REM Restart the application with PM2
pm2 restart JewelOneWebsite

REM Confirm deployment success
echo Deployment completed successfully!
pause

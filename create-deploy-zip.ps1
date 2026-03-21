$zipName = "jewelone-deployment.zip"
$files = @(
    ".next",
    "public",
    "package.json",
    "package-lock.json",
    "next.config.js",
    "ecosystem.config.js",
    ".env"
)

Write-Host "Creating $zipName..."
Compress-Archive -Path $files -DestinationPath $zipName -Force
Write-Host "Successfully created $zipName"

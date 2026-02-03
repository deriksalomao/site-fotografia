# Script PowerShell para converter JPG para WebP em lote
# Requer ImageMagick instalado (https://imagemagick.org/)

param(
    [string]$SourceFolder = "src\assets\images\portfolio",
    [int]$Quality = 90
)

# Verificar se ImageMagick está instalado
if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
    Write-Host "ImageMagick não encontrado. Instale em https://imagemagick.org/"
    exit 1
}

# Caminho completo da pasta
$FullPath = Join-Path $PSScriptRoot $SourceFolder

if (-not (Test-Path $FullPath)) {
    Write-Host "Pasta não encontrada: $FullPath"
    exit 1
}

# Converter todas as imagens JPG
Get-ChildItem $FullPath -Filter *.jpg | ForEach-Object {
    $WebPPath = $_.FullName -replace "\.jpg$", ".webp"
    Write-Host "Convertendo $($_.Name) para WebP..."
    & magick $_.FullName -quality $Quality $WebPPath
}

Write-Host "Conversão concluída!"

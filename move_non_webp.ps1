# Script PowerShell para mover arquivos que não são .webp para uma pasta separada

param(
    [string]$SourceFolder = "src\assets\images\portfolio",
    [string]$TargetFolder = "src\assets\images\portfolio\originals"
)

# Caminho completo
$FullSource = Join-Path $PSScriptRoot $SourceFolder
$FullTarget = Join-Path $PSScriptRoot $TargetFolder

# Criar pasta de destino se não existir
if (-not (Test-Path $FullTarget)) {
    New-Item -ItemType Directory -Path $FullTarget | Out-Null
    Write-Host "Pasta criada: $TargetFolder"
}

# Mover arquivos que não são .webp
Get-ChildItem $FullSource -File | Where-Object { $_.Extension -ne ".webp" } | ForEach-Object {
    $TargetPath = Join-Path $FullTarget $_.Name
    Move-Item $_.FullName $TargetPath
    Write-Host "Movido: $($_.Name) -> $TargetFolder"
}

Write-Host "Movimentação concluída! Arquivos não-WebP estão em $TargetFolder"

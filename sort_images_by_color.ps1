# Script PowerShell para ordenar imagens WebP por cor dominante (usando ImageMagick)

param(
    [string]$Folder = "src\assets\images\portfolio"
)

# Verificar ImageMagick
if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
    Write-Host "ImageMagick não encontrado. Instale em https://imagemagick.org/"
    exit 1
}

$FullPath = Join-Path $PSScriptRoot $Folder

if (-not (Test-Path $FullPath)) {
    Write-Host "Pasta não encontrada: $FullPath"
    exit 1
}

# Criar diretório temporário
$TempDir = Join-Path $PSScriptRoot "temp_sort_images"
if (Test-Path $TempDir) {
    Remove-Item $TempDir -Recurse -Force
}
New-Item -ItemType Directory -Path $TempDir | Out-Null

# Array para armazenar imagens com suas cores
$ImageColors = @()

Get-ChildItem $FullPath -Filter *.webp | ForEach-Object {
    # Extrair cor média da imagem
    $ColorOutput = & magick $_.FullName -scale 1x1 -format "%[pixel:p{0,0}]" info:
    
    # Mover para temp com nome único
    $TempName = "temp-{0}.webp" -f $_.Name
    $TempPath = Join-Path $TempDir $TempName
    Move-Item $_.FullName $TempPath
    
    $ImageColors += [PSCustomObject]@{
        TempPath = $TempPath
        Color = $ColorOutput
        OriginalName = $_.Name
    }
    
    Write-Host "Analisando: $($_.Name) - Cor: $ColorOutput"
}

# Ordenar por cor (alfabeticamente pela string RGB)
$SortedImages = $ImageColors | Sort-Object Color

# Renomear em ordem de cor
$Counter = 1
foreach ($Item in $SortedImages) {
    $NewName = "foto-{0:D3}.webp" -f $Counter
    $NewPath = Join-Path $FullPath $NewName
    
    Move-Item $Item.TempPath $NewPath
    Write-Host "Renomeado: $($Item.OriginalName) -> $NewName (Cor: $($Item.Color))"
    
    $Counter++
}

# Remover diretório temporário
Remove-Item $TempDir -Recurse -Force

Write-Host "Ordenação por cor concluída! $($ImageColors.Count) arquivos processados."

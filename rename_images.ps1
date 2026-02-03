# Script PowerShell para renomear imagens WebP em ordem sequencial

param(
    [string]$Folder = "src\assets\images\portfolio",
    [string]$Prefix = "foto"
)

# Caminho completo
$FullPath = Join-Path $PSScriptRoot $Folder

if (-not (Test-Path $FullPath)) {
    Write-Host "Pasta não encontrada: $FullPath"
    exit 1
}

# Obter arquivos WebP ordenados por nome
$Files = Get-ChildItem $FullPath -Filter *.webp | Sort-Object Name

$Counter = 1
foreach ($File in $Files) {
    $NewName = "{0}-{1:D3}.webp" -f $Prefix, $Counter
    $NewPath = Join-Path $FullPath $NewName
    
    Rename-Item $File.FullName $NewPath
    Write-Host "Renomeado: $($File.Name) -> $NewName"
    
    $Counter++
}

Write-Host "Renomeação concluída! $Counter arquivos processados."

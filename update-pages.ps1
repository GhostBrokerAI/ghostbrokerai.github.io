$files = Get-ChildItem "C:\dev\ghostbrokerai.github.io\*.html"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    if ($content -notmatch 'components\.js') {
        $content = $content -replace '</body>', '<script src="/js/components.js"></script></body>'
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "Updated: $($file.Name)"
    } else {
        Write-Host "Already has script: $($file.Name)"
    }
}

@echo off

chcp 65001 > nul

if "%1"=="" (
	echo Please provide a file to convert to webp.
	pause
	exit
)

for %%F in (%1) do (
    set "fileName=%%~nF"
    set "fileExt=%%~xF"
)
set "newPath=%~dp1%fileName%.webp"

echo Converting %1 to %newPath%

ffmpeg -hide_banner -i %1 -c:v libwebp -lossless 1 -map_metadata -1 -y %newPath%

pause

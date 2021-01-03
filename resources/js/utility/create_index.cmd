@echo off

copy nul index.js > nul
for /D /r %%G in ("*") DO (
  echo export { default as %%~nxG } from './%%~nxG';>> index.js
)

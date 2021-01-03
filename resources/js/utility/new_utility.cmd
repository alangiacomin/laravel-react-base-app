@echo off

mkdir %1

set indexFile=%1\index.js
copy nul %indexFile% > nul

echo const %1 = (vars) =^> {>>%indexFile%
echo   const a = 1;>>%indexFile%
echo   return a;>>%indexFile%
echo };>>%indexFile%
echo.>>%indexFile%
echo export default %1;>>%indexFile%

set testFile=%1\%1.test.js
copy nul %testFile% > nul

echo /*>>%testFile%
echo import %1 from '.';>>%testFile%
echo.>>%testFile%
echo describe('Utility: %1', () =^> {>>%testFile%
echo   test('description', () =^> {>>%testFile%
echo     const result = %1(null);>>%testFile%
echo     expect(result).toMatch('');>>%testFile%
echo   });>>%testFile%
echo });>>%testFile%
echo */>>%testFile%

**Automated test report**

The results of the coverage are as follows:

PASS  ./Tcode.test.js
  ✓ Test troupe details (2 ms)
  ✓ Test writing troupe details to file

 PASS  ./code.test.js
  ✓ Test musician details (1 ms)
  ✓ Test musician string
  ✓ Test guitarist details (1 ms)
  ✓ Test guitarist summary
  ✓ Test bassist details
  ✓ Test bassist summary (1 ms)
  ✓ Test percussionist details
  ✓ Test percussionist summary
  ✓ Test flautist details (1 ms)
  ✓ Test flautist summary

 PASS  ./functions.test.js
  ✓ Name should be between 3-30 characters (1 ms)
  ✓ Number of instruments should be between 1-5
  ✓ Genre should be rock/pop/jazz
  ✓ Hourly rate should be >50
  ✓ Duration should be between 0.5 and 3 hours
  ✓ Cost should be the product of rate and duration

--------------|---------|----------|---------|---------|----------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s    
--------------|---------|----------|---------|---------|----------------------
All files     |   85.56 |    78.57 |   92.86 |    87.5 |                      
 Tcode.js     |   76.32 |    61.54 |   77.78 |   80.56 | 21,32,43,54,65,77,83 
 code.js      |   92.86 |      100 |     100 |   92.86 | 16,27,38             
 functions.js |      90 |    92.31 |     100 |      90 | 25                   
--------------|---------|----------|---------|---------|----------------------
Test Suites: 3 passed, 3 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        0.48 s, estimated 1 s
Ran all test suites.


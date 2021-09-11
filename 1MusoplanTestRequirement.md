**Testing requirements report**

This report has been created in line with my discussion with the product manager. As per the discussion with the manager, there are three types of testing needed:
1) Functional - manual unit testing
2) Functional - automated unit testing
3) Systems - manual data flow testing

The testing requirements are that we need to test the Musician and Troupe class methods and functions in our code. The scenarios that we will need to test for, are as follows:

1) When a musician is created, the test will validate if the user inputs meet the specifications. For instance, in Musician class we'll check that -
Selected musician is a guitarist, bassist, percussionist, or flautist. Once that is decided, we check if
- Musician name is between 3 and 30 characters
- Years of instrument playing is non-negative
- Hourly rate is over 50
The values should be processed only when they meet these criteria

2) When a Troupe is created, the test will validate if the user inputs meet the specifications. For instance, in Troupe class we'll check that 
- Troupe name is between 3 and 30 characters
- Troupe has between 2-5 musicians
- Genre is either 'rock' or 'jazz' or 'pop'
- Minimum duration in hours is between 0.5 and 3
The values should be processed only when they meet these criteria

3) Calculate the cost of deploying the troupe for a number of hours

4) Read a list of troupe names to be populated from a file

5) Write a list of the detailed descriptions for all troupes to a given filename

We will consider the following organizational requirements:
* We will do manual unit testing of functions
* We will use Jest for automated testing of functions
* Our automated tests should have 75% coverage of functions
* Our software test plan must include test cases with both valid and purposefully invalid inputs
* Test progress report will include \a JUnit xml document of the automated testing results
* Testing requirements report will be added to the test directory of our Musoplan repository for compliance with Globex's requirements of VCS use.

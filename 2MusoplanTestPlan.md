Activity 2
Prepare a test plan for MusoPlan in a markdown document, the test plan should include

The types of testing required
Software required to perform testing
Data structures required during testing
Test cases, which should include
User requirement being tested
Inputs required to test functionality
Expected outcome of the test
A good test plan will include at least three test case design techniques, be compliant with all organisational requirements, and implement industry best practices. 

Include your test plan in your test directory of the MusoPlan repository. 

Commit your test plan to the repository.



**Musoplan Test Plan**

The types of testing required:
As per the discussion with the manager, there are three types of testing needed:
1) Functional - manual unit testing
2) Functional - automated unit testing
3) Systems - manual data flow testing

Software required to perform testing:
We will be using Jest to perform automated testing of the functions used in the code

Data structures required during testing:
The data structures required during testing are- Functions and Class Methods.

The test cases are listed below:

**Example:**

Identifier/Title:Login to the website 

Test Case/Description:User should be able to successfully log in to their account on the website

Preconditions: 
User must already be registered and use their correct login details

Input Values:
Username and Password

Test Steps:
Open website or app
Enter the username and password in the appropriate fields Click “login”

Expected Result:
The user should log in successfully

---

2. 
Identifier:

Test Case:

Preconditions:

Input Values:

Execution Steps:

Output Values:

Postconditions:


---
1. 
Identifier/Title :
Check Musician name

Test Case/Description:
User should be prompted to give musician name. If the  name is between 3 and 30 characters, it should get accepted. If not, the user will be re-prompted to give a valid input.

Preconditions: 
User will be prompted to enter musician name and the character limit will be specified in the prompt message.

Input Values:
1) aa
2) abcdefghijklmnopqrstuvwxyz0123456789
3) TheBeatles

Test Steps:
Open the terminal and write node "filename" to execute the musician file which will thereby prompt the user for inputs

Expected Result for the above listed input values:
1) The user will be re-prompted to enter musician name within the specified character limit because he/she entered less than 3 characters
2) The user will be re-prompted to enter musician name within the specified character limit because he/she entered above 30 characters
3) The program will accept the value and move onto the next question prompt

---

2. 
Identifier/Title :
Check Musician years of experience

Test Case/Description:
User should be prompted to give musician years of experience. If the  value is a non-negative number, it should get accepted. If not, the user will be re-prompted to give a valid input.

Preconditions: 
User will be prompted to enter musician experience (in years) and the value constraint will be specified in the prompt message.

Input Values:
1) -2
2) 0.3
3) 5a

Test Steps:
Open the terminal and write node "filename" to execute the musician file which will thereby prompt the user for inputs

Expected Result for the above listed input values:
1) The user will be re-prompted to enter musician's years of experience as a positive number value
2) The program will accept the value and move onto the next question prompt
3) The user will be re-prompted to enter musician's years of experience as a positive number value

---
3. 
Identifier/Title :
Check Musician's hourly rate

Test Case/Description:
User should be prompted to give musician hourly rate. If the  value is a number greater than 50, it should get accepted. If not, the user will be re-prompted to give a valid input.

Preconditions: 
User will be prompted to enter musician's hourly rate and the value constraint will be specified in the prompt message.

Input Values:
1) 35
2) 5a
3) 75

Test Steps:
Open the terminal and write node "filename" to execute the musician file which will thereby prompt the user for inputs

Expected Result for the above listed input values:
1) The user will be re-prompted to enter musician's hourly rate as a positive number greater than 50
2)The user will be re-prompted to enter musician's hourly rate as a positive number greater than 50
3) The program will accept the value and move onto the next menu

---

4. 
Identifier/Title :
Display Musician details

Test Case/Description:
User should be able to feed in Musician details and view the description in the standard organizational format.

Preconditions: 
User inputs must have been checked against pre-fed constraints.

Input Values:
User inputs

Test Steps:
Open the terminal and give inputs to the program in line with given prompts

Expected Result:
The user would be able to view the inputted values

Postconditions:
Depending on the output of choice, the values will be display on terminal or text file. In the case of a text file output, the user will have to access the file using 'nano' or 'cat' commands.

---
5.
Identifier/Title :
Check Troupe name

Test Case/Description:
User should be prompted to give troupe name. If the  name is between 3 and 30 characters, it should get accepted. If not, the user will be re-prompted to give a valid input.

Preconditions: 
User will be prompted to enter troupe name and the character limit will be specified in the prompt message.

Input Values:
1) aa
2) abcdefghijklmnopqrstuvwxyz0123456789
3) TheBeatles

Test Steps:
Open the terminal and write node "filename" to execute the troupe file which will thereby prompt the user for inputs

Expected Output for the above listed input values:
1) The user will be re-prompted to enter troupe name within the specified character limit because he/she entered less than 3 characters
2) The user will be re-prompted to enter troupe name within the specified character limit because he/she entered above 30 characters
3) The program will accept the value and move onto the next question prompt

---
5.
Identifier/Title :
Check Troupe's number of instruments

Test Case/Description:
User should be prompted to give troupe's number of instruments. If the count is an integer between 1 and 5, it should get accepted. If not, the user will be re-prompted to give a valid input.

Preconditions: 
User will be prompted to enter troupe's number of instruments and the limit will be specified in the prompt message.

Input Values:
1) 0
2) 4.5
3) 3

Test Steps:
Open the terminal and write node "filename" to execute the troupe file which will thereby prompt the user for inputs

Expected Output for the above listed input values:
1) The user will be re-prompted to enter troupe instrument count within the specified character limit because he/she entered outside the 1-5 range
2) The program will accept the value and move onto the next question prompt because when converted to an integer, it is within specified range.
3) The program will accept the value and move onto the next question prompt

---
5.
Identifier/Title :
Check Troupe genre

Test Case/Description:
User should be prompted to give troupe genre. If the  genre is 'rock' or 'pop' or 'jazz', it should get accepted. If not, the user will be re-prompted to give a valid input.

Preconditions: 
User will be prompted to enter troupe genre and the eligible values will be specified in the prompt message.

Input Values:
1) reggae
2) rock
3) Rock

Test Steps:
Open the terminal and write node "filename" to execute the troupe file which will thereby prompt the user for inputs

Expected Output for the above listed input values:
1) The user will be re-prompted to enter troupe genre from within the specified reponses
2) The program will accept the value and move onto the next question prompt
3)The user will be re-prompted to enter troupe genre from within the specified reponses because the response is case-sensitive

---
6.
Identifier/Title :
Check Troupe's hourly rate

Test Case/Description:
User should be prompted to give troupe hourly rate. If the  value is a number greater than 50, it should get accepted. If not, the user will be re-prompted to give a valid input.

Preconditions: 
User will be prompted to enter troupe's hourly rate and the value constraint will be specified in the prompt message.

Input Values:
1) 35
2) 5a
3) 75

Test Steps:
Open the terminal and write node "filename" to execute the troupe file which will thereby prompt the user for inputs

Expected Result for the above listed input values:
1) The user will be re-prompted to enter troupe's hourly rate as a positive number greater than 50
2)The user will be re-prompted to enter troupe's hourly rate as a positive number greater than 50
3) The program will accept the value and move onto the next menu

---
7.
Identifier/Title :
Check Troupe's duration

Test Case/Description:
User should be prompted to give troupe duration. If the  value is a number between 0.5 and 3, it should get accepted. If not, the user will be re-prompted to give a valid input.

Preconditions: 
User will be prompted to enter troupe's duration and the value constraint will be specified in the prompt message.

Input Values:
1) 0.4
2) 0.5
3) 8
4) 3

Test Steps:
Open the terminal and write node "filename" to execute the troupe file which will thereby prompt the user for inputs

Expected Result for the above listed input values:
1) The user will be re-prompted to enter troupe's duration as a number between 0.5 and 3
2) The program will accept the value and move onto the next menu
3) The user will be re-prompted to enter troupe's duration as a number between 0.5 and 3
4) The program will accept the value and move onto the next menu

---
8.
Identifier:

Test Case:

Preconditions:

Input Values:

Execution Steps:

Output Values:

Postconditions:

---

For automated testing, the values are as follows:

Musician:
Name, yrs, rate : Smita, 5, 60
Name, yrs, rate : Ajay, 3, 40
Name, yrs, rate : Grace, -1, 60
Name, yrs, rate : Jo, 4, 75

Troupe:
Name, instruments, genre, rate, duration: AC, 4, rock, 70, 2
Name, instruments, genre, rate, duration: Aerosmith, 7, pop, 90, 3
Name, instruments, genre, rate, duration: Nirvana, 3, jazz, 40, 2
Name, instruments, genre, rate, duration: Queen, 2, reggae, 90, 1
Name, instruments, genre, rate, duration: Pixies, 4, pop, 55, 9
Name, instruments, genre, rate, duration: BackstreetBoys, 3, pop, 89, 2
	First Test Case
		Attempt to create an account that already exists
			username: omarmohammed
			Name: Omar
			email:test1@test1.com
			password: 123456
		When the user attempts to create an account that has the same username or email as above it will display                        an error and ask the user to change the field depending on which field
	
	Second Test Case
		Attempt to create an account that has empty fields
			username: 
			name: 
			email:
			password:
		When the user attemps to create an account that has an empty username or name or email or password an error will be displayed and the user will be asked to fill in the field
		We were thinking the name field should only contain english letters.
	
	Third Test case
		Attempt to login with incorrect incredentials
			username: omarmohammed
			password: 123321
		In this case the username actually exists in the database however; the password is not correct. The user will be asked to enter the correct email or password
		
	Fourth Test case
		Attempt to login with nonexistant username
			username: root
			password:root
		The root user doesn't exist within the database's users. We were thinking of reserving the root username for testing.
		The user will be asked to enter the correct username or direct him to the sign up page.
			
We're using [Appium](http://appium.io/) for automating tests, which is an open-source tool for automating testing on mobile applications. It allows us to write cross-platform code for testing.
After setting up everything we have to inspect the application using Appium Desktop to check the element in the application,
then we write the test script and then we can run it in Eclipse.
[Screenshot of the code and the result](https://prnt.sc/hipylu)

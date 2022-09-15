# Lab 6 SSD
### Form Validation
- Implemented a form, that takes input from user.

### index.html 

Manager Name –
- This is required field, signifies Manager’s name.

Group Email –
- This is required field, signifies Team’s email.
- Must have validation check for email pattern.

Server Username –
- This is required field, signifies username of the assigned server.
- Must have validation checks for at least one Uppercase and atleast one Numeric character. For example ‘User1’.
- The validation must happen as the user types the value. Rather on every key stroke the check must happen.
- Show an error message ‘Invalid Username’ besides input field, if the field is invalid. Should disappear if field has valid entry.

Server Password –
- This field is required and provide space for entering password.

Confirm Password –
- This field is required and will be used for cross verifying the entered password.
- The validation must happen the moment user finishes typing or rather the moment field loses its focus.

Team Lead –
- This is required field and will be a dropdown field.

Team Members –
- This is a custom form element. This is a picklist component, where values are dragged and dropped from one section to another.
- This is an optional field.

Submit Button –
- On clicking this button, the form should get submitted only if it is valid.
- On submitted, show the entered data on the Alert popup, as per the below format:

Name: <name>
Email: <email>
Username: <username>
Team Lead: <lead>
Team Members: <members>

### Create Dark Mode for the above page:
- Upon pressing Ctrl + M, the theme must toggle between dark mode and light mode.
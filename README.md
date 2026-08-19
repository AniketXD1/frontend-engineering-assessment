# Signup Wizard – Frontend Engineering Assessment

A responsive multi-step Signup Wizard built as part of a Frontend Engineering Assessment. The project focuses on creating a clean user interface with real-time validation, cross-field validation, state management, and a smooth multi-step signup flow.

## Project Overview

This project replicates a Signup Wizard with 4 steps.

The main focus of the project is:

- Responsive UI
- Real-time form validation
- OTP validation
- Cross-field validation
- State management using Redux
- Dependent Country → State → City fields
- Back navigation between steps
- User-friendly error messages

## Signup Flow

The signup process is divided into 4 steps:

### Step 1 – Email Verification

- User enters their email address.
- Email is validated in real time while typing.
- An error message is shown when the email is invalid.
- When the user clicks **Send Verification Code**, the email is validated again.
- If the email is valid, the user moves to the OTP page.
- The email is stored in Redux.

### Step 2 – Personal Information

The user provides:

- Full Name
- Date of Birth
- Gender

The fields include real-time validation.

If the entered information is invalid, an error message is shown immediately.

After the required information is valid, the user can continue to the next step.

### Step 3 – Location Information

The user selects:

- Country
- State
- City

This step uses cross-field validation and dependent dropdown logic.

The selection works as:

**Country → State → City**

When the country changes, the available states are updated.

When the state changes, the available cities are updated.

This prevents invalid combinations of location data.

### Step 4 – Final Step

After completing the required information from the previous steps, the user can complete the Signup Wizard.

## Validation

The project includes several types of validation:

### Real-Time Validation

Form fields are checked while the user enters information.

For example, the email field displays an error immediately when the entered email is invalid.

### Submit Validation

Important fields are validated again when the user clicks the Continue or verification button.

### Cross-Field Validation

The location fields depend on each other:

```text
Country
   ↓
State
   ↓
City
```

This ensures that the selected state belongs to the selected country and the selected city belongs to the selected state.

### OTP Validation

The OTP is entered digit by digit in separate input boxes.

Invalid OTP input displays an error, while a valid OTP allows the user to continue.

## State Management

Redux is used for managing the signup data across the wizard.

The user's email is stored in Redux after successful email verification.

This allows the data to remain available while moving between different steps.

## Technologies Used

- React
- Redux
- Tailwind CSS
- JavaScript
- HTML
- CSS

## UI and Responsive Design

The Signup Wizard is designed to work across different screen sizes:

- Mobile
- Tablet
- Desktop

The layout, form fields, buttons, and progress indicator are designed to remain usable on different screen sizes.

## Project Structure

A simplified project structure:

```text
src/
├── components/
│   ├── Email Verification
│   ├── OTP
│   ├── Personal Information
│   ├── Location Information
│   └── ...
├── redux/
│   └── ...
├── App.jsx
└── ...
```

## Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Go to the project folder:

```bash
cd <PROJECT_FOLDER>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Testing the Project

You can test the following:

1. Enter an invalid email and check the real-time validation.
2. Enter a valid email and send the verification code.
3. Enter an invalid OTP and check the error message.
4. Enter a valid OTP and continue.
5. Enter personal information and test the validation.
6. Change the country and check that the state options update.
7. Change the state and check that the city options update.
8. Test back navigation.
9. Test the layout on mobile, tablet, and desktop.

## Screen Recording

A screen recording demonstrating the Signup Wizard functionality is included with the assignment submission.

The recording demonstrates:

- Email real-time validation
- Email verification
- OTP validation
- Personal information validation
- Country → State → City dependent fields
- Cross-field validation
- Multi-step navigation

## Conclusion

This project demonstrates a responsive and functional Signup Wizard with a focus on form validation, state management, dependent fields, and user-friendly interaction.

The goal was to maintain a clean UI while making the signup flow functional and easy to use.

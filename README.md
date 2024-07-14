# Resume Builder

This project is a web application that helps users create a professional resume. The application allows users to input their personal information, work experience, education, skills, and languages, and stores this information in a Firebase Firestore database.

## Features

- **Personal Information**: Collects basic details such as name, email, and contact information.
- **Work Experience**: Allows users to add multiple workplaces with details like job title, company name, and duration.
- **Education**: Users can add their educational background with details like degree, institution, and graduation year.
- **Skills**: Users can list their skills.
- **Languages**: Users can list languages they know, with an option to mark a language as native.

## Tech Stack

- **Frontend**: React, Material-UI
- **Backend**: Firebase Firestore

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/nitzanbs/resume_builder.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd resume-builder
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Set up Firebase:**

    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Add your Firebase configuration to `src/config/Config.js`.

5. **Run the application:**

    ```bash
    npm start
    ```

## Usage

1. **Sign Up / Log In:**

    Users need to sign up or log in to create and save their resumes.

2. **Create Resume:**

    Fill in the required fields for personal information, work experience, education, skills, and languages.

3. **Submit Resume:**

    Submit the form to save the resume in the Firebase Firestore database.

## Project Structure
├── public
│ ├── index.html
├── src
│ ├── components
│ │ ├── PersonalInfo.js
│ │ ├── WorkExperience.js
│ │ ├── Education.js
│ │ ├── Skills.js
│ │ ├── Languages.js
│ ├── context
│ │ ├── UserProvider.js
│ ├── config
│ │ ├── Config.js
│ ├── App.js
│ ├── index.css
│ ├── index.js
└── package.json

## Screenshots

![Home Page](src\pic\home.png)
![Resume Form](src\pic\form.png)

## The website 
http/

## Contact

For any questions or feedback, please contact me at [nitzanbs2248@gmail.com](mailto:nitzanbs2248@gmail.com).

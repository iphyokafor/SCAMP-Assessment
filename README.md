# SCAMP-Assessment

Technical assessment for She Code Africa Mentorship Program.

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.org/download/)

### Installing/Running locally

- Clone or fork repo🤷‍♂

  ```bash
    - git clone <repo>
    - cd SCAMP Assessment
    - npm install
  ```

- Connect to MongoDB locally

- Create/configure `.env` environment with your credentials. A sample `.env.example` file has been provided to get you started. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials (ensure to provide the correct details).

- Example

```DB_CONNECTION=mongodb://localhost/scamp-assessment
    TOKEN_SECRET = sheCodeAfricaRocks
```

- Run `npm run dev` to start the server and watch for changes
- Run `npm run test` to run the tests

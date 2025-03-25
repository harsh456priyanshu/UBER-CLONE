# API Documentation

## POST /register

### Description
Registers a new user. This endpoint creates a user account and returns an authentication token along with user details.

### Request Body
- `fullname.firstname` (string, required): First name (min length 3 characters).
- `fullname.lastname` (string, optional): Last name (min length 3 characters if provided).
- `email` (string, required): Must be a valid email.
- `password` (string, required): Password (min length 6 characters).

**Example Request:**
```json
{
  "fullname": {
    "firstname": "John",                         
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Response Status Codes
- **201 Created:** User successfully registered.
  - **Response Example:**
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
        // ... other user data ...
      }
    }
    ```
- **400 Bad Request:** Validation error; required fields are missing or invalid.
- **500 Internal Server Error:** Server-side error occurred.

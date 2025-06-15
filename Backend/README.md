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

## POST /login

### Description
Logs in an existing user and returns an authentication token along with user details.

### Request Body
- `email` (string, required): Must be a valid email.
- `password` (string, required): User's password.

**Example Request:**
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Response Status Codes
- **200 OK:** Successful login.
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
- **401 Unauthorized:** Invalid email or password.
- **500 Internal Server Error:** Server-side error occurred.

## GET /profile

### Description
Retrieves the profile information of the authenticated user.

### Authentication
Requires a valid JWT token in the Authorization header or cookies.

### Response Status Codes
- **200 OK:** Successfully retrieved user profile.
  - **Response Example:**
    ```json
    {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```
- **401 Unauthorized:** No token provided or invalid token.
- **500 Internal Server Error:** Server-side error occurred.

## GET /logout

### Description
Logs out the current user by invalidating their token.

### Authentication
Requires a valid JWT token in the Authorization header or cookies.

### Response Status Codes
- **200 OK:** Successfully logged out.
  - **Response Example:**
    ```json
    {
      "message": "logged Out"
    }
    ```
- **401 Unauthorized:** No token provided or invalid token.
- **500 Internal Server Error:** Server-side error occurred.

# Captain API Documentation

## POST /captains/register

### Description
Registers a new captain. This endpoint creates a captain account with vehicle details and returns an authentication token along with captain details.

### Request Body
- `fullname.firstname` (string, required): First name (min length 3 characters)
- `fullname.lastname` (string, optional): Last name
- `email` (string, required): Must be a valid email
- `password` (string, required): Password (min length 6 characters)
- `vehicle.color` (string, required): Vehicle color (min length 3 characters)
- `vehicle.plate` (string, required): Vehicle plate number (min length 3 characters)
- `vehicle.capacity` (number, required): Vehicle capacity (min value 1)
- `vehicle.vehicleType` (string, required): Type of vehicle (must be one of: 'car', 'motorcycle', 'auto')

**Example Request:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Smith"
  },
  "email": "john.smith@example.com",
  "password": "secret123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response Status Codes
- **201 Created:** Captain successfully registered.
  - **Response Example:**
    ```json
    {
      "token": "jwt_token_here",
      "captain": {
        "fullname": {
          "firstname": "John",
          "lastname": "Smith"
        },
        "email": "john.smith@example.com",
        "vehicle": {
          "color": "Black",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```
- **400 Bad Request:** Validation error; required fields are missing or invalid
- **500 Internal Server Error:** Server-side error occurred

## POST /captains/login

### Description
Authenticates a captain and returns an authentication token along with captain details.

### Request Body
- `email` (string, required): Must be a valid email
- `password` (string, required): Password (min length 6 characters)

**Example Request:**
```json
{
  "email": "john.smith@example.com",
  "password": "secret123"
}
```

### Response Status Codes
- **200 OK:** Successfully logged in
  - **Response Example:**
    ```json
    {
      "token": "jwt_token_here",
      "captain": {
        "fullname": {
          "firstname": "John",
          "lastname": "Smith"
        },
        "email": "john.smith@example.com",
        "vehicle": {
          "color": "Black",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```
- **400 Bad Request:** Validation error
- **401 Unauthorized:** Invalid email or password

## GET /captains/profile

### Description
Retrieves the profile information of the authenticated captain.

### Authentication
Requires a valid JWT token in the Authorization header or cookies.

### Response Status Codes
- **200 OK:** Successfully retrieved captain profile
  - **Response Example:**
    ```json
    {
      "captain": {
        "fullname": {
          "firstname": "John",
          "lastname": "Smith"
        },
        "email": "john.smith@example.com",
        "vehicle": {
          "color": "Black",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```
- **401 Unauthorized:** No token provided or invalid token

## GET /captains/logout

### Description
Logs out the current captain by invalidating their token.

### Authentication
Requires a valid JWT token in the Authorization header or cookies.

### Response Status Codes
- **200 OK:** Successfully logged out
  - **Response Example:**
    ```json
    {
      "message": "logout Successfully"
    }
    ```
- **401 Unauthorized:** No token provided or invalid token

# Ride API Documentation

## POST /rides/create

### Description
Creates a new ride booking for the authenticated user. The fare is calculated based on the provided pickup and destination addresses.

### Request Body
- `pickup` (string, required): Pickup address (min length 3 characters)
- `destination` (string, required): Drop-off address (min length 3 characters)
- `vehicleType` (string, required): Must be one of 'auto', 'car', or 'moto'

**Example Request:**
```json
{
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "vehicleType": "car"
}
```

### Response Status Codes
- **201 Created:** Ride successfully created.
  - **Response Example:**
    ```json
    {
      "_id": "ride_id",
      "user": "user_id",
      "pickup": "123 Main St",
      "destination": "456 Elm St",
      "otp": "123456",
      "fare": 65,
      "status": "pending"
      // ... other ride details ...
    }
    ```
- **400 Bad Request:** Validation error for missing or invalid fields.
- **500 Internal Server Error:** Server-side error occurred.

## GET /rides/get-fare

### Description
Calculates the fare for a ride based on the provided pickup and destination addresses.

### Query Parameters
- `pickup` (string, required): Pickup address (min length 3 characters).
- `destination` (string, required): Drop-off address (min length 3 characters).

### Authentication
Requires a valid JWT token in the Authorization header.

### Response Status Codes
- **200 OK:** Fare successfully calculated.
  - **Response Example:**
    ```json
    {
      "pickup": "123 Main St",
      "destination": "456 Elm St",
      "fare": 65,
      "distance": { "text": "5 km", "value": 5000 },
      "duration": { "text": "15 mins", "value": 900 }
    }
    ```
- **400 Bad Request:** Validation error for missing or invalid fields.
- **500 Internal Server Error:** Server-side error occurred.

# Maps API Documentation

## GET /maps/get-coordinates

### Description
Retrieves geographic coordinates for a given address.

### Query Parameters
- `address` (string, required): Address to get coordinates (min length 3 characters)

### Response Status Codes
- **200 OK:** Coordinates successfully retrieved.
  - **Response Example:**
    ```json
    {
      "ltd": 12.34567,
      "lng": 76.54321
    }
    ```
- **400 Bad Request:** Validation error.
- **404 Not Found:** Coordinates not found.

## GET /maps/get-distance-time

### Description
Retrieves distance and duration information between two locations.

### Query Parameters
- `origin` (string, required): The origin address (min length 3 characters)
- `destination` (string, required): The destination address (min length 3 characters)

### Response Status Codes
- **200 OK:** Distance and duration successfully retrieved.
  - **Response Example:**
    ```json
    {
      "distance": { "text": "5 km", "value": 5000 },
      "duration": { "text": "15 mins", "value": 900 }
    }
    ```
- **400 Bad Request:** Validation error.
- **500 Internal Server Error:** Server error occurred.

## GET /maps/get-suggestions

### Description
Retrieves autocomplete suggestions for a given input text using the Google Maps API.

### Query Parameters
- `input` (string, required): Search input text (min length 3 characters)

### Response Status Codes
- **200 OK:** Suggestions retrieved.
  - **Response Example:**
    ```json
    [
      { "description": "Location 1", ... },
      { "description": "Location 2", ... }
    ]
    ```
- **400 Bad Request:** Validation error.
- **500 Internal Server Error:** Server error occurred.

# Real-Time-Weather-Alert-System


A RESTful API for monitoring weather conditions and alerts across multiple cities.
`

## Endpoints

### 1. Weather Endpoints

#### Get Latest Weather
Fetch the latest weather data for all monitored cities.

```http
GET /weather
```

**Response** `200 OK`
```json
[
  {
    "_id": "64f1e2b3c7e6b8f9b4f8e9a1",
    "city": "London",
    "temperature": 15,
    "condition": "Clouds",
    "timestamp": "2023-09-01T12:00:00.000Z"
  },
  {
    "_id": "64f1e2b3c7e6b8f9b4f8e9a2",
    "city": "New York",
    "temperature": 28,
    "condition": "Clear",
    "timestamp": "2023-09-01T12:00:00.000Z"
  }
]
```

### 2. Alert Endpoints

#### Get All Alerts
Fetch all triggered weather alerts.

```http
GET /alerts
```

**Response** `200 OK`
```json
[
  {
    "_id": "64f1e2b3c7e6b8f9b4f8e9b1",
    "city": "London",
    "alertType": "Rain",
    "timestamp": "2023-09-01T12:00:00.000Z"
  },
  {
    "_id": "64f1e2b3c7e6b8f9b4f8e9b2",
    "city": "New York",
    "alertType": "High Temperature",
    "timestamp": "2023-09-01T12:00:00.000Z"
  }
]
```

### 3. City Endpoints

#### Get Cities
Fetch the list of monitored cities.

```http
GET /cities
```

**Response** `200 OK`
```json
{
  "cities": ["London", "New York", "Tokyo"]
}
```

**Empty Response**
```json
{
  "cities": []
}
```

#### Add City
Add a new city to the monitoring list.

```http
POST /cities
```

**Request Body**
```json
{
  "city": "Paris"
}
```

**Response** `201 Created`
```json
{
  "message": "Paris added to the list."
}
```

**Error Response** `400 Bad Request`
```json
{
  "message": "Paris is already in the list."
}
```

#### Remove City
Remove a city from the monitoring list.

```http
DELETE /cities/:city
```

**Parameters**
- `city`: Name of the city to remove (e.g., `Paris`)

**Response** `200 OK`
```json
{
  "message": "Paris removed from the list."
}
```

**Error Response** `404 Not Found`
```json
{
  "message": "Paris not found in the list."
}
```

## Error Handling

### General Errors
**Response** `500 Internal Server Error`
```json
{
  "message": "Something went wrong!"
}
```

### Validation Errors
**Response** `400 Bad Request`
```json
{
  "message": "City name is required."
}
```

## Setup and Installation


1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up environment variables in `.env`:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   OPENWEATHER_API_KEY=your_key
   ```
3. Start the server:
   ```bash
run it in dev mode
   npm i nodemon -g
   nodemon src/app.mjs
  
   ```
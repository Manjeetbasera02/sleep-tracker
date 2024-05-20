# Sleep Tracker API

## Setup and Run the API

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd sleep-tracker
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the server in production mode:
    ```bash
    npm start
    ```

4. Run the server in development mode (with auto-restart on changes):
    ```bash
    npm run dev
    ```

5. Run the tests:
    ```bash
    npm test
    ```

## API Endpoints

### POST `/sleep`
- **Description**: Create a new sleep record.
- **Request Body**:
    ```json
    {
        "userId": "user1",
        "hours": 8,
        "timestamp": "2024-05-19T08:00:00Z"
    }
    ```
- **Response**:
    - **201 Created**:
        ```json
        {
            "id": "unique-id",
            "userId": "user1",
            "hours": 8,
            "timestamp": "2024-05-19T08:00:00Z"
        }
        ```
    - **400 Bad Request**:
        ```json
        {
            "error": "Missing required fields"
        }
        ```

### GET `/sleep/:userId`
- **Description**: Retrieve all sleep records for a specific user.
- **Response**:
    - **200 OK**:
        ```json
        [
            {
                "id": "unique-id",
                "userId": "user1",
                "hours": 8,
                "timestamp": "2024-05-19T08:00:00Z"
            }
        ]
        ```

### DELETE `/sleep/:recordId`
- **Description**: Delete a specific sleep record by its ID.
- **Response**:
    - **200 OK**:
        ```json
        {
            "id": "unique-id",
            "userId": "user1",
            "hours": 8,
            "timestamp": "2024-05-19T08:00:00Z"
        }
        ```
    - **404 Not Found**:
        ```json
        {
            "error": "Record not found"
        }
        ```

## Notes
- The API uses an in-memory storage. Restarting the server will reset the data.
- For production use, consider using a persistent storage solution like MongoDB, SQLite, or another database.

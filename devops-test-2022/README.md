# Test Devops

This is sample project for the [Affluences](https://affluences.com/) DevOps test. It consists of a REST API for a TODO list app.

## Project goals

- Run the project and try out the routes using Postman or other tools
- Write a `Dockerfile` and `docker-compose.yml`
- Deploy a simple Prometheus + Grafana observability stack
- Write a `.gitlab-ci.yml` to run the tests and build the Docker image
- Write a `Deployment` yml file to deploy 3 replicas of the project on Kubernetes

## Project folders

- `/src` : project source code
- `/metrics` : files needed to setup the observability stack

## Project setup

### Installation

Use the package manager [npm](https://nodejs.org/en/download/), [yarn](https://yarnpkg.com/getting-started/install) or [pnpm](https://pnpm.io/fr/installation) to install dependencies.

```bash
[npm|yarn|pnpm] install
```

### Environment variables

There is a .env file at the root of the file, do not forget to edit the values

### Usage

```bash
# Run in watch mode
[npm|yarn|pnpm] run dev
# Build the project
[npm|yarn|pnpm] run build
# Run the built result
[npm|yarn|pnpm] run start
```

Note : tasks are stored in-memory and lost if the app is rebuilt or restarted

# API routes

- `GET /tasks` : retrieve all tasks

Example response : 
```
[
  {
    "taskName": "Do the groceries",
    "taskDescription": "buy some chicken and vegetables",
    "taskIsCompleted": false,
    "taskId": 1
  },
  {
    "taskName": "Walk the dog",
    "taskDescription": "twice a day",
    "taskIsCompleted": false,
    "taskId": 2
  }
]
```
- `GET /tasks/:id` : retrieve a single task

Example response : 
```
{
  "taskName": "Do the groceries",
  "taskDescription": "buy some chicken and vegetables",
  "taskIsCompleted": false,
  "taskId": 1
}
```
- `POST /tasks` : add a new task

Example payload : 
```
{
  "taskName": "Do the groceries",
  "taskDescription": "buy some chicken and vegetables",
  "taskIsCompleted": false,
}
```

Example response : 
```
{
  "taskName": "Do the groceries",
  "taskDescription": "buy some chicken and vegetables",
  "taskIsCompleted": false,
  "taskId": 1
}
```
- `PUT /tasks/:id` : edit an existing task

Example payload : 
```
{
  "taskName": "Do the groceries",
  "taskDescription": "buy some chicken and vegetables",
  "taskIsCompleted": true
}
```

Example response : 
```
{
  "taskName": "Do the groceries",
  "taskDescription": "buy some chicken and vegetables",
  "taskIsCompleted": true,
  "taskId": 1
}
```
- `DELETE /tasks/:id` : delete an existing task

If successful, an empty `204 No Content` response is sent

# Metrics

This app exposes Prometheus metrics when setting the following environment variable : `PROM_TOKEN=<random string>`

The metrics will be available at `/metrics` when authenticated using the header `Authorization: Bearer <your token>`

## License
[MIT](https://choosealicense.com/licenses/mit/)
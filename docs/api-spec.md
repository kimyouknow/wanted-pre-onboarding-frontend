# API

- API 주소: [https://www.pre-onboarding-selection-task.shop/](https://www.pre-onboarding-selection-task.shop)

## 안내문

API 통신 과정에서 발생한 문제를 이슈를 통해 문의하실 경우, 문의 내용에 통신의 요청과 응답에 대한 정보를 제공해주셔야 문제의 원인을 파악할 수 있습니다.

요청과 응답에 대한 정보는 URL, Method, Headers, Body, StatusCode등을 의미합니다.

## 스펙

## 1) Auth

---

## 1-1) SignUp

### 요청

- URL: `/auth/signup`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

- status: 201 Created
- body: 없음

## 1-2) SignIn

### 요청

- URL: `/auth/signin`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

- status: 200 OK
- body
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
  }
  ```

## 2) Todo

## 2-1) createTodo

### 요청

- URL: `/todos`
- Method: `POST`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string

### 응답 예시

- status: 201 Created
- body
  ```json
  {
    "id": 1,
    "todo": "과제하기",
    "isCompleted": false,
    "userId": 1
  }
  ```

## 2-2) getTodos

### 요청

- URL: `/todos`
- Method: `GET`
- Headers:
  - Authorization: `Bearer access_token`

### 응답 예시

- status: 200 OK
- body
  ```json
  [
    {
      "id": 1,
      "todo": "todo2",
      "isCompleted": false,
      "userId": 1
    },
    {
      "id": 2,
      "todo": "todo3",
      "isCompleted": false,
      "userId": 1
    }
  ]
  ```

## 2-3) updateTodo

### 요청

- URL: `/todos/:id`
- Method: `PUT`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string
  - isCompleted: boolean

### 요청 예시

- URL: `/todos/1`
- body
  ```json
  {
    "todo": "Hello World",
    "isCompleted": true
  }
  ```

### 응답 예시

- status: 200 OK
- body
  ```json
  {
    "id": 1,
    "todo": "Hello World",
    "isCompleted": true,
    "userId": 2
  }
  ```

## 2-4) deleteTodo

### 요청

- URL: `/todos/:id`
- Method: `DELETE`
- Headers:
  - Authorization: `Bearer access_token`

### 요청 예시

- URL: `/todos/1`
- body: 없음

### 응답 예시

- status: 204 No Content
- body: 없음

## 로컬 서버 구동

- 배포된 API에 문제가 있는 경우 활용할 수 있는 로컬 서버 구동법입니다.
- 로컬 서버는 sqlite에 의존성이 있습니다.

### 설치 및 실행

```zsh
$ npm install
$ npm start
```

- 위 순서대로 실행하면 localhost:8000 포트에 서버가 실행됩니다.
- 서버를 실행하면 db.sqlite 파일이 생성되며 해당 파일을 삭제 시 기존의 데이터는 초기화 됩니다.
- 그 외 스펙은 배포된 API와 동일합니다.

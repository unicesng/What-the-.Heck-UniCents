# What-the-.heck Backend

## 1. Setup
### 1.1 Ensure you have yarn installed
```
npm i -g yarn
```
### 1.2 Install serverless to run app locally
```
npm i -g serverless 
```
### 1.3 Install dependencies
```
yarn install
```

## 2. To run the backend
### 2.1 Run with serverless-offline
```
serverless offline start
```
## 3. API routes
#### All routes will follow this front: http://localhost:3000/dev

#### 3.1 Login
Route: /register  
Method: GET  
Autorization: NO  
Params: 
```
Result: {  
    error: true/false,  
    data: "key",  
    message: "Outcome"  
}
```

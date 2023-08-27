# What-the-.heck Backend

## 1. Setup
### 1.1 To be able to run locally you must have aws cli or .env configured
For .env file configure your access key id and secret key from IAM
```
AWS_ACCESS_KEY_ID=YOUR KEY
AWS_SECRET_ACCESS_KEY=YOUR SECRET KEY
```
### 1.2 Ensure you have yarn installed
```
npm i -g yarn
```
### 1.3 Install serverless to run app locally
```
npm i -g serverless 
```
### 1.4 Install dependencies
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

### 3.1 Login/Register functions
#### Donor Register
Route: /register  
Method: POST  
Autorization: NO  
Params: 
```
Result: {  
    error: true/false,  
    data: "key",  
    message: "Outcome"  
}
```
### 3.2 Uni Comparison functions
#### Get list of all universities crawled
Route: /uni/getAllUnis  
Method: GET  
Autorization: NO  
Params: 
```
Result: {  
    error: true/false,  
    data: [
        university: string,  
        location: string,  
        internationalfees: int,  
        ranking: int,  
        computingSgFees: int,  
        computingRanking: int,  
        scholarships: [  
            name: string,  
            info: {  
                benefits: string,  
                citizen: {  
                    interational: true/false,  
                    sg: true/false  
                },  
                eligibility: string  
            }  
        ]  
    ],  
    message: "Outcome"  
}
```
#### Filter crawled university datas
Route: /uni/filterUnis  
Filter paramters (add ?key=value):  
1. citizen=international or citizen=local (For filtering only international or local scholarship avail)  
2. localfees=int or internationalfees=int (For comparing costs which are lower than val specified)  
Method: GET  
Autorization: NO  
Params: 
```
Result: {  
    error: true/false,  
    data: [
        university: string,  
        location: string,  
        internationalfees: int,  
        ranking: int,  
        computingSgFees: int,  
        computingRanking: int,  
        scholarships: [  
            name: string,  
            info: {  
                benefits: string,  
                citizen: {  
                    interational: true/false,  
                    sg: true/false  
                },  
                eligibility: string  
            }  
        ]  
    ],  
    message: "Outcome"  
}
```
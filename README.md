# covid19-dashboard

A dashboard depicting Covid-19 numbers
* Tech used: React.js, redux, redux-saga
* Backend: AWS -> API Gateway, Lambdas, DynamoDB
* Covid-19 Data endpoints courtesy: https://disease.sh/docs/
* Hosting: Netlify

# How To Run:
* Clone/download the Source code
* cd <target_dir>
* npm install
* npm start

# Flows:
* A user can either register/login
* Once the user is in, he/she/they will be navigated to the Home screen where the worldwide numbers are tracked along with a list of countries and their numbers
* User can click on any country to know more info about the country's situation
* There is also an access point in the Home screen to a Vaccine tracker screen

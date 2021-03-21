# Salon

### how to run the project

1. open a terminal to clone the repo
2. `git clone https://github.com/JohnGeorgiadis/salon.git`
3. cd into the project
4. `yarn` or `npm install`
5. `yarn start` or `npm start`

The project will then run on http://localhost:3000/

The api will then run on http://localhost:3000/api

### how to run the tests

1. On a new terminal instance run `yarn cypress` or `npm run cypress`
2. A new window will appear, and you will be able to interact with the cypress gui.

### inspect the code of the project

If you just want to inspect the code then you can use github1s
https://github1s.com/JohnGeorgiadis/salon

### live demo
https://salon-one.vercel.app/

### assumptions

Assumptions:
1. I am new to nextjs. I am sure that there is a better way to deal with local data and local API
2. I think I should have used getStaticProps for a specific salon. I wanted to show my ability to use useEffect in react.
3. I could have written more tests, but due to time constrain I just wrote the successful path.
4. Maybe there is a better way to deal with assets. For now, I tried to download all the assets and put them in the public folder.
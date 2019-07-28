# Task 

Implement API server (in Node.js) based on the API specification.

It shouldn't take more than one hour to do this.

We like:
- Tests 
- Nice commit messages
- Working code
- Readme

Aditional notes:
- You can use TypeScript or newer ES, we use either of these
- Best way how to share the code with us is to create new GitHub repo. Regardless of success in our interview, you can then at least use the repo for other interviews :)
- You don't have to finish everything. If you don't, just put there a comment describing your intent and we can then discuss it during the interview

# Quick Start

Start the server:
```bash
docker run -it --rm -v $(pwd):/project -w /project -p 4242:4242 node:10-alpine sh -c "yarn run tsc; yarn start"
```

View the website at: http://localhost:4242
# bin
This is where we store all our actual CLI commands.
Everything in here is as light as possible, and mapped to in our package.json file

This allows us to import only necessary functionality for the CLI interactions, and keep business/app logic seperate and modular. Great for testing.

Our command will be `get-scores` and it will read from a database of matches, and display their scores.
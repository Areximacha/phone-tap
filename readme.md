# Small PhoneTap Application for a technical evaluation

A simple application that finds log data from a data source and translates it into a UI representation of tracked people's phone calls and text messages.

# Project Set-Up

- Navigate to root directory in terminal
- Run 'npm install'
- Run 'npm run start' to spin up a local dev environment via webpack
- Go to 'http://localhost:8080/' in your browser to view page

- Run 'npm run dev' to do a single compile
- Run 'npm run production' to compile for production

Compiled code is also included in this package

# Design decisions

Built using ES6 to facilitate better modular structuring as well as many other useful features. Built with scalability in mind by using an entry point structure where other views can be added as needed.
Log data is structured as if from a typical payload from REST API and manipulated as such.
Made use of partial templates to allow reuse of code blocks when rendering the DOM.
Used standardJS to ensure all code is linted in accordance to a strict rule set in order to maintain consistency and clean code.
Used SCSS and added compass mixins for styles.

# Assumptions

Though not specified, it was assumed that the UI would be populated dynamically based on some kind of external data source. As such partial templates were employed to render the profiles dynamically. As such, some extra methods were built into the PhoneTap object to get profile information from the log data.
Also, the log method was used to output the logs for any given person, which is invoked when a person is selected and then injected into the DOM.
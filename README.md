
# Objective:
Develop a simple 3-tier rule engine application(Simple UI, API and Backend, Data) to determine user eligibility based on attributes like age, department, income, spend etc.The system can use Abstract Syntax Tree (AST) to represent conditional rules and allow for dynamic creation,combination, and modification of these rules.


# Data Structure:
● Define a data structure to represent the AST.
● The data structure should allow rule changes
● E,g One data structure could be Node with following fields
    ○ type: String indicating the node type ("operator" for AND/OR, "operand" for conditions)
    ○ left: Reference to another Node (left child)
    ○ right: Reference to another Node (right child for operators)
    ○ value: Optional value for operand nodes (e.g., number for comparisons)


# Data Storage
● Define the choice of database for storing the above rules and application metadata
● Define the schema with samples.


# Sample Rules:
● rule1 = "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)"
● rule2 = "((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)"


# API Design:
1. create_rule(rule_string): This function takes a string representing a rule (as
shown in the examples) and returns a Node object representing the corresponding AST.
2. combine_rules(rules): This function takes a list of rule strings and combines them
into a single AST. It should consider efficiency and minimize redundant checks. You can explore different strategies (e.g., most frequent operator heuristic). The function should return the root node of the combined AST.
3. evaluate_rule(JSON data): This function takes a JSON representing the combined rule's AST and a dictionary data containing attributes (e.g., data = {"age": 35 "department": "Sales", "salary": 60000, "experience": 3}). The function should evaluate the rule against the provided data and return True if the user is of that cohort based on the rule, False otherwise.


# Test Cases:
1. Create individual rules from the examples using create_rule and verify their AST
representation.
2. Combine the example rules using combine_rules and ensure the resulting AST
reflects the combined logic.
3. Implement sample JSON data and test evaluate_rule for different scenarios.
4. Explore combining additional rules and test the functionality.


# Bonus:
● Implement error handling for invalid rule strings or data formats (e.g., missing operators, invalid comparisons).
● Implement validations for attributes to be part of a catalog.
● Allow for modification of existing rules using additional functionalities within create_rule or separate functions.This could involve changing operators, operand values, or adding/removing sub-expressions within the AST.
● Consider extending the system to support user-defined functions within the rule language for advanced conditions (outside the scope of this exercise).


<!-- To the Application -->


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

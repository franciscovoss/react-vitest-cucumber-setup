# A guide how to use Cucumber in a React project using Vite

## Setup the React project using Vite
```
npm create vite@latest
cd your-project`  
npm install
```

Now, the app can be run by executing  
```
npm run dev
```  

Add testing dependencies  
```
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom
```

## Configure the package.json by extending the scripts
```
"scripts": {
    "test": "vitest --watch",
    "coverage": "vitest run --coverage"
}
```
This allows you to run the tests in watch mode, which is really useful for quick feedback. Additionally, you sooner or later want a coverage report that can also be generated now.

## Install vitest-cucumber
```
npm install --save-dev @amiceli/vitest-cucumber
```

## Create folder 'features' and create file 'counter.feature' inside
```
Feature: Counter
    Scenario: Should increment the counter on button click
        Given The user is on the main page
        When the user clicks on the counter button
        Then the counter should be incremented
```

## Write the cucumber test skeleton in 'App.test.tsx'
```
import { loadFeature, describeFeature } from '@amiceli/vitest-cucumber';

const feature = await loadFeature('features/counter.feature')

describeFeature(feature, ({ Scenario }) => {
            
    Scenario('Should increment the counter on button click', ({ Given, When, Then }) => {
        Given('The user is on the main page', () => {
            // ...
        })
        When('The user clicks on the counter button', () => {
            // ...

        })
        Then('The counter should be incremented', () => {
            // ...
        })
    })

})
```

## Run the test script
```
npm test
```

You should now see the test execution results in the terminal including the feature, scenario and steps, like

> &#9745; test/App.test.tsx
>> &#9745; Counter (3)
>>> &#9745; Should increment the counter on button click (3)
>>>> &#9745; 'Given The user is on the main page'  
>>>> &#9745; 'When The user clicks on the counter button'  
>>>> &#9745; 'Then The counter should be incremented'

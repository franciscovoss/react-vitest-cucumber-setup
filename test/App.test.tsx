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
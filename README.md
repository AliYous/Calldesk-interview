# Calldesk interview React project

## 👀 Look at it on Heroku :
https://calldeskinterview-dashboard.herokuapp.com

I deployed my app on heroku using a pipeline with 2 applications : a staging app that was deployed continuously when I pushed to my repository's development branch and a production app (deployed continuously through the master branch).

## How data flows through my React app

To handle data through the whole application, I decided to use the React Context API.
While a global state was probably not a necessity on such a small application, working with the Context API allowed me to manage most API calls in one single file and made re-rendering the components on state change really easy.

At first I was not going to use a global state, but one of the requirements was that the user must be able to switch between multiples bots from a dropdown-select in the Navbar. I couldn't figure out how to achieve this in a clean way without global state.

This was my first time using the Context API and I must say it is really enjoyable once it is set up correctly. It makes everything else more simple.

## Biggest challenges

1. I had never worked with timestamps before and I didn't expect it to be a challenge when I first started working on the project.
I have to admit : converting timestamps into the correct date format was not as easy as I expected, especially when trying to implement the DatePickers.
I first tried to use the AirBnb react-dates library (date-range-picker component) but couldn't get it to work with my project so I ended up going for an alternative library.

2. Setting up the context API : I spent some time trying to understand how the Context API works and setting things up, it was challenging at first.
Once it was working and the data was flowing correctly through the application, I think it made the rest of the project way easier.

3. Testing : My initial goal was to do Test Driven Development on this project as I have no experience in TDD, I thought it would be a nice way to understand this paradigm.
Then I started looking into it and realised I didn't really know how I would structure my application as the global state was new to me and I was not very familiar with React before this.
Even though I know this is not good practice, I finally decided I would test my components later and started working on the project because I wanted to be sure I'd have time to meet all the project requirements.

Then I researched a lot on how to use jest and react-testing-library, I now understand how component unit testing works. But because almost all of my components are using the context, I found it made testing much more complicated (probably because this is my first time testing components) and I did not allocate enough time at the end of the project to focus on testing. Unfortunately, I didn't succeed in producing tests for my components.

## What would I change

1. My biggest regret on this project is that I grossly underestimated how long it would take for me to learn and become proficient in unit testing.
If I had to do it again, I would give myself way more time to reasearch and apply unit testing to my project.

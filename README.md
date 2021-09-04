# My Flashcards App

## About

This project is my first attempt at building something in React.js. The fully deployed website can be viewed at https://ahop1.github.io/flashcards.

I have been interested in learning to build web-apps for a while having previously built a website for my wedding in Python using Django and having made some desktop apps using PyQt and pyinstaller. After doing some research, React.js appeared to be the best option for the kind of things I wanted to build going forwards.

I had recently started learning Sinhala and was organising my notes (including some word lists) just in a paper note book when I thought it would be nice to be able to combine the two learning journeys and build something in React that would also help my Sinhala lessons. And voila - that's where this came from.

## Using the app

When first loading the website, it will use 3 sets of flashcards that I have built myself. However, the idea is that anyone should be able to use the website with their own card sets. As I've not done anything with any kind of back-end system, the way it's working in terms of "file storage" is by making use of `localStorage` in the browser.

### Right drawer - Card sets

From here you can create new sets, edit existing sets and handle the "I/O" aspects of the app (via `localStorage`). You have options to:
- Download card sets and settings - this will download (as a JSON) the card sets you are currently using in the app to your downloads folder (perhaps you would want to share them with a friend).
- Save to local storage - this saves the currently used card sets to your browser's `localStorage` so that when you come back to the website next time they will still be there.
- Refresh from local storage - this refreshes the in-app card sets from `localStorage` (this will only make a difference if you have edited what's in `localStorage` yourself since opening the app).
- Add manually to local storage - this opens a dialog that lets the user manually paste/type the JSON for their settings and card sets into the text field, after which it will be added to local storage as a string. This is how card sets could be shared and "uploaded".

### Left drawer - Test config

This is where the user chooses how they want the test to be carried out (cards in order or shuffled, and cards fron first then back, or back first then front, or a mix between the two). They also choose here which card sets they wish to use in their test via the search and drop-down options. This allows for the creation of larger tests on a broader spectrum of topics than simply testing one card set at a time.

For example, one could choose to test all cards which go from English to Sinhala in one go. Or if learning multiple languages at the same time they could use tags to select everything related to "fruit" and test all of those in one batch. This area will be most useful for a large number of card sets in the system.

### Main area

Here the flashcards are displayed, including navigation and scoring (which is updated as the user progressed through the current test).

## Next steps

I may try to build the same/similar app in React Native to see how that compares.
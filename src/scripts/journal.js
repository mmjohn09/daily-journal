/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/



const journalEntryOne = {
    date: "7/10/2019",
    concepts: "git, gitHub, HTML, CSS, flexbox",
    entry: "Today we completed our first group project (Celebrity Tribute) where I learned how to push my work to gitHub and worked on git commands in the terminal.",
    mood: "okay"

}

const journalEntryTwo = {
    date: "7/11/2019",
    concepts: "JS queryselectors",
    entry: "Learned to change HTML and styling using JS",
    mood: "confused"
}

const journalEntryThree = {
    date: "7/12/2019",
    concepts: "js objects, arrays, dot notation, square bracket notation",
    entry: "learned structure of objects and arrays and how to set/access values in each",
    mood: "okay"
}

const journalEntryFour = {
    date: "7/15/2019",
    concepts: "pure and impure functions, forEach method",
    entry: "spent the morning doing lightning exercises, then lab time (function exercises).",
    mood: "despair"
}


const journalEntries = []

journalEntries.push(journalEntryOne)
journalEntries.push(journalEntryTwo)
journalEntries.push(journalEntryThree)
journalEntries.push(journalEntryFour)

console.log(journalEntries)
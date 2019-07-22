const journalEntries = [
    {
        date: "7/10/2019",
        concepts: "git, gitHub, HTML, CSS, flexbox",
        entry: "Today we completed our first group project (Celebrity Tribute) where I learned how to push my work to gitHub and worked on git commands in the terminal.",
        mood: "okay"
    },


    {
        date: "7/11/2019",
        concepts: "JS queryselectors",
        entry: "Learned to change HTML and styling using JS",
        mood: "confused"
    },

    {
        date: "7/12/2019",
        concepts: "js objects, arrays, dot notation, square bracket notation",
        entry: "learned structure of objects and arrays and how to set/access values in each",
        mood: "okay"
    },

    {
        date: "7/15/2019",
        concepts: "pure and impure functions, forEach method",
        entry: "spent the morning doing lightning exercises, then lab time (function exercises).",
        mood: "despair"
    }

]


const whereToDisplayJournalEntriesInDOM = document.querySelector("#entryLog")

const makeJournalEntryComponent = journalEntry => {
    const journalEntryHTMLRepresentation = `
        <section>
            <h1>${journalEntry.date}</h1>
            <h2>${journalEntry.concepts}</h2>
            <h2>${journalEntry.entry}</h2>
            <h2>${journalEntry.mood}</h2>
        </section>
    `
 whereToDisplayJournalEntriesInDOM.innerHTML += journalEntryHTMLRepresentation
}

// makeJournalEntryComponent(journalEntries[0])

journalEntries.forEach(entry => makeJournalEntryComponent(entry))

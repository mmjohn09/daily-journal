/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

import API from "./data.js"
import makeJournalEntryComponent from "./entryComponent.js"
import renderJournalEntries from "./entriesDOM.js"



const whereToDisplayJournalEntriesInDOM = document.querySelector("#entryLog")

const getAndRenderEntries = () => {
    whereToDisplayJournalEntriesInDOM.innerHTML = ""
    API.getJournalEntries().then((parsedEntries) => {
        for (const journalEntry of parsedEntries) {
            const journalEntryHTML = makeJournalEntryComponent.createJournalEntry(journalEntry)
            renderJournalEntries.renderToDOM(journalEntryHTML)
        }
    })
}


getAndRenderEntries()



const journalDate = document.querySelector("#journalDate")
const journalConcept = document.querySelector("#journalConcept")
const journalEntry = document.querySelector("#journalEntry")
const journalMood = document.querySelector("#journalMood")


const createEntryObject = (date, concepts, entry, mood) => {
    return {
        date: date,
        concepts: concepts,
        entry: entry,
        mood: mood
    }
}


document.querySelector("#recordEntryButton").addEventListener("click", event => {
    //call create new entry object function, pass in the user inputs, and store in variable
    const newJournalEntry = createEntryObject(journalDate.value, journalConcept.value, journalEntry.value, journalMood.value)
    //pass new journal entry to API and render new array to DOM
    API.saveJournalEntry(newJournalEntry).then(getAndRenderEntries)

    journalConcept.value = ""
    journalDate.value = ""
    journalEntry.value = ""
    journalMood.value = ""

})


const radioButton = document.getElementsByName("radioButton")
radioButton.forEach(button => {
    button.addEventListener("click", event => {
        const mood = event.target.value

        API.filterJournalEntries(mood).then(filteredData => {
            whereToDisplayJournalEntriesInDOM.innerHTML = ""
            filteredData.forEach(moodObject => {
                const filteredMood = makeJournalEntryComponent.createJournalEntry(moodObject)
                whereToDisplayJournalEntriesInDOM.innerHTML += filteredMood
            })

        })
    })
})



 
    document.querySelector("#entryLog").addEventListener("click", event => {
        if (event.target.id.startsWith("deleteButton--")) {
            const entryToDelete = event.target.id.split("--")[1]

            API.deleteJournalEntry(entryToDelete)
                .then(getAndRenderEntries)
        }
    })





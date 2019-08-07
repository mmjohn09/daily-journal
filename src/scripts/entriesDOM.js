const whereToDisplayJournalEntriesInDOM = document.querySelector("#entryLog")

const renderJournalEntries = {
    renderToDOM(HTMLRepresentation) {
        whereToDisplayJournalEntriesInDOM.innerHTML += HTMLRepresentation
    }
}

export default renderJournalEntries

const whereToDisplayJournalEntriesInDOM = document.querySelector("#entryLog")

const renderToDom = (string) => {
    whereToDisplayJournalEntriesInDOM.innerHTML += string
}

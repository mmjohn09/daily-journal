const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries?_sort=id&_order=desc")
            .then(entries => entries.json())
    },


    saveJournalEntry(newEntryObject) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    },

    filterJournalEntries(radioValue) {
        return fetch(`http://localhost:3000/entries?mood=${radioValue}`)
            .then(entries => entries.json())
    },

    deleteJournalEntry(deleteButtonID) {
        return fetch(`http://localhost:3000/entries/${deleteButtonID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
}





export default API
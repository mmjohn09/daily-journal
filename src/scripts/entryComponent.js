const makeJournalEntryComponent = {
    createJournalEntry(journalEntry) {
        return `
        <section class="card" "journalEntry--${journalEntry.id}">
          
                <h2>${journalEntry.date}</h2>
                <p>Concepts Learned: ${journalEntry.concepts}</p>
                <p>Entry: ${journalEntry.entry}</p>
                <p>Mood: ${journalEntry.mood}</p>
            
            <button id="deleteButton--${journalEntry.id}" type="button">Delete Entry</button>
        </section>
    `
    }
}

export default makeJournalEntryComponent
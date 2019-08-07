const makeJournalEntryComponent = {
    createJournalEntry (journalEntry) {
    return `
        <section>
            <h2>${journalEntry.date}</h2>
            <h3>Concepts Learned: ${journalEntry.concepts}</h3>
            <h3>Entry: ${journalEntry.entry}</h3>
            <h3>Mood: ${journalEntry.mood}</h3>
        </section>
    `
}
}

export default makeJournalEntryComponent
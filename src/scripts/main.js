getEntries().then((parsedEntries) => {
    for (const journalEntry of parsedEntries) {
       const journalEntryHtml = makeJournalEntryComponent(journalEntry)
       renderToDom(journalEntryHtml)
    }
})


       
       
       
       
       
       
       

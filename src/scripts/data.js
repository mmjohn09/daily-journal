const getEntries = () => {
    return fetch("http://localhost:3000/entries")
        .then(entries => entries.json())
}



const moodInput = document.getElementById('mood-input');
const searchButton = document.getElementById('search-button');

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {

    moodInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSearch();
        }
    });

    searchButton.addEventListener('click', handleSearch);
}

async function handleSearch () {
    const mood = moodInput.value.trim();
    if (!mood) {
        alert('Por favor, descreva o que você quer assistir!');
        return; 
    }

    const response = await fetch('https://jpborella.app.n8n.cloud/webhook-test/botflix', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userPrompt: mood})
    });

    const data = await response.json();
    console.log('Response data:', data);
}

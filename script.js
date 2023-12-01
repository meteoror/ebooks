function loadChapter(chapterNumber) {
    const chapterUrl = `chapters/chapter${chapterNumber}.html`;

    // Load the chapter
    fetch(chapterUrl)
        .then(response => response.text())
        .then(html => {
            document.getElementById('chapter-content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading chapter:', error);
        });
}

function navigateToChapter(chapterNumber) {
    const chapterUrl = `chapters/chapter${chapterNumber}.html`;
    window.location.href = chapterUrl;
}

// Load the first chapter when the page loads
document.addEventListener('DOMContentLoaded', function () {
    loadChapter(1);
});

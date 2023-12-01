let currentChapter = 1;

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

function loadNextChapter() {
    currentChapter++;
    loadChapter(currentChapter);
}

document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const playlist = document.getElementById('playlist');
    const audioPlayer = document.getElementById('audioPlayer');

    let tracks = [];

    fileInput.addEventListener('change', function(event) {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const listItem = document.createElement('li');
            listItem.textContent = file.name;
            listItem.dataset.index = tracks.length;
            playlist.appendChild(listItem);
            tracks.push(file);
        }
    });

    playlist.addEventListener('click', function(event) {
        if (event.target && event.target.nodeName === 'LI') {
            const index = event.target.dataset.index;
            const file = tracks[index];
            const url = URL.createObjectURL(file);
            audioPlayer.src = url;
            audioPlayer.play();

            const activeItem = playlist.querySelector('.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }
            event.target.classList.add('active');
        }
    });
});



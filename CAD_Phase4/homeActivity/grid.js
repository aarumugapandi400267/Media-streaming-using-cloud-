const videos = [
    { title: "Kuch Bhi Ho Jaye | by AiSh", source: "https://videosuploades.s3.us-south.cloud-object-storage.appdomain.cloud/Kuch%20Bhi%20Ho%20Jaye%20(Female%20Version)%20_%20Cover%20By%20AiSh%20_%20B%20Praak%20_%20Jaani%20_%20Arvindr%20Khaira(1080P_HD).mp4" },
    { title: "I am Groot | Episode 1 ", source: "https://videosuploades.s3.us-south.cloud-object-storage.appdomain.cloud/www.Ytsfullmovies.In%20-%20I%20Am%20Groot%20(2022)%20S01E01%201080p.mkv" },
    { title: "I am Groot | Episode 3", source: "https://videosuploades.s3.us-south.cloud-object-storage.appdomain.cloud/www.Ytsfullmovies.In%20-%20I%20Am%20Groot%20(2022)%20S01E03%201080p.mkv" },
    { title: "I am Groot | Episode 4", source: "https://videosuploades.s3.us-south.cloud-object-storage.appdomain.cloud/www.Ytsfullmovies.In%20-%20I%20Am%20Groot%20(2022)%20S01E04%201080p.mkv" },
    { title: "I am Groot | Episode 5", source: "https://videosuploades.s3.us-south.cloud-object-storage.appdomain.cloud/www.Ytsfullmovies.In%20-%20I%20Am%20Groot%20(2022)%20S01E05%201080p.mkv" },
    { title: "I am Groot | Episode 2", source: "https://videosuploades.s3.us-south.cloud-object-storage.appdomain.cloud/wwww.Ytsfullmovies.In%20-%20I%20Am%20Groot%20(2022)%20S01E02%201080p.mkv" },
    { title: "Fallin For You | by AiSh", source: "https://videosuploades.s3.us-south.cloud-object-storage.appdomain.cloud/Khabar%20Tenu%20Koi%20Na%20(Female%20Version)%20_%20Cover%20By%20AiSh%20_%20Fallin%20For%20You%20_%20Shrey%20Singhal(1080P_HD).mp4" },
    { title: "Copines | by AiSh", source: "https://videosuploades.s3.us-south.cloud-object-storage.appdomain.cloud/Aya%20Nakamura%20-%20Copines%20_%20Cover%20By%20AiSh%20_%20English%20Version(1080P_HD).mp4"},
    { title: "Lily was a little Girl | by Shania Yan", source: "https://videosuploades.s3.us-south.cloud-object-storage.appdomain.cloud/Lily%20-%20Alan%20Walker,%20Emelie%20Hollow,%20and%20K-391%20_%20Shania%20Yan%20Cover.mp4"},
    { title: "Hymn For The Weekend | by Beyoncé", source: "https://videosuploades.s3.us-south.cloud-object-storage.appdomain.cloud/Coldplay%20-%20Hymn%20For%20The%20Weekend%20(Official%20Video).mp4"},
];

function displayVideos() {
    const videoGrid = document.getElementById("video-grid");

    videos.forEach((video) => {
      const videoItem = document.createElement("div");
      videoItem.className = "video-item";
      videoItem.innerHTML = `
      <video id="video-item" controls>
        <source src="${video.source}" type="video/mp4">
      </video>

        <p>${video.title}</p>
      `;

      videoItem.addEventListener("click", function () {
        videoItem.querySelector("video").play();
        if (currentlyPlayingVideo && currentlyPlayingVideo !== selectedVideo) {
          currentlyPlayingVideo.pause();
        }

        selectedVideo.src = video.source;
        selectedVideo.load();
        selectedVideo.play();
        currentlyPlayingVideo = selectedVideo;
      });

      videoGrid.appendChild(videoItem);
    });
}
displayVideos();

const fileInput = document.getElementById('add-video');
const submitButton = document.getElementById('submitBtn');

// Add an event listener to the file input
fileInput.addEventListener('change', function() {
  // Check if a file has been selected
  if (fileInput.files.length > 0) {
    submitButton.style.display = 'block'; // Show the submit button
  } else {
    submitButton.style.display = 'none';  // Hide the submit button
  }
});



function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open");
}

function getYouTubeVideoID(url) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  function setYouTubeThumbnail(url) {
    const videoID = getYouTubeVideoID(url);
    if (videoID) {
      return `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`; 
    } else {
      console.error('Invalid YouTube URL');
      return '';  
    }
  }

  window.onload = function() {
    // First YouTube URL
    const youtubeURL1 = 'https://youtu.be/mJvjk68QKeA?si=JJoNLpYWxqJhWrgG';
    const thumbnailSrc1 = setYouTubeThumbnail(youtubeURL1);
    document.getElementById('thumbnail1').src = thumbnailSrc1;
  
    // Second YouTube URL
    const youtubeURL2 = 'https://youtu.be/DVLodCvqfzM?si=w8ZLpKxNomStqTCE';
    const thumbnailSrc2 = setYouTubeThumbnail(youtubeURL2);
    document.getElementById('thumbnail2').src = thumbnailSrc2;
  
    // Third YouTube URL
    const youtubeURL3 = 'https://youtu.be/UjWyAlKDQfg?si=ChOqXubfBtPuyx4a';
    const thumbnailSrc3 = setYouTubeThumbnail(youtubeURL3);
    document.getElementById('thumbnail3').src = thumbnailSrc3;
  };

  
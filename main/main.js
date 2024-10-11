function fetchInstagramReel() {
            const url = document.getElementById('urlInput').value;
            const resultContainer = document.getElementById('result');
            
            
            resultContainer.innerHTML = '';

            if (!url) {
                alert("Please enter a valid URL");
                return;
            }


            const loadingText = document.createElement('div');
            loadingText.className = 'glitch';
            loadingText.setAttribute('data-glitch', 'Fetching...');
            loadingText.textContent = 'Fetching...';
            resultContainer.appendChild(loadingText);

            const apiUrl = `https://insta-dl.hazex.workers.dev/?url=${encodeURIComponent(url)}`;

            
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    
                    resultContainer.innerHTML = '';

                    if (!data.error) {
                        const mediaUrl = data.result.url;
                        const extension = data.result.extension;

                        
                        if (extension === 'mp4') {
                            const videoElement = document.createElement('video');
                            videoElement.src = mediaUrl;
                            videoElement.controls = true;
                            resultContainer.appendChild(videoElement);
                        } else {
                            
                            const imgElement = document.createElement('img');
                            imgElement.src = mediaUrl;
                            resultContainer.appendChild(imgElement);
                        }
                    } else {
                        alert("Error: " + data.error);
                    }
                })
                .catch(error => {
                    console.error("Error fetching the Instagram reel:", error);
                    alert("There was an error fetching the reel.");

                    
                    resultContainer.innerHTML = '';
                });
        }
    var typed = new Typed('#elementTwo', {
    strings: ['Instagram Reels Downloader', 'Made By @ItzNotCoder'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
    const stars = document.querySelectorAll('div');

stars.forEach((star, i) => {
  let x = `${Math.random() * 200}vmax`;
  let y = `${Math.random() * 100}vh`;
  let z = `${Math.random() * 200 - 100}vmin`;
  let rx = `${Math.random() * 360}deg`;
  star.style.setProperty('--x', x);
  star.style.setProperty('--y', y);
  star.style.setProperty('--z', z);
  star.style.setProperty('--rx', rx);
});


if (document.getAnimations) {
  stars.forEach((star, i) => {
    let delay = `${Math.random() * 900}ms`;
    star.style.animationDelay = delay;
  });
}

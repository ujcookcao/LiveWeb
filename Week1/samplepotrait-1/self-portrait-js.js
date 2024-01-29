window.addEventListener('load', init);
function init() {
    let attempts = 0;



    window.addEventListener('scroll', () => {
        // 检测用户是否接近页面底部
        const scrollTotal = document.body.offsetHeight;
        const scrollPosition = window.innerHeight + window.scrollY;
        const threshold = 1000; // 设置一个阈值，比如100像素
    
        // 如果用户接近底部
        if (scrollPosition >= scrollTotal - threshold) {
            // 平滑滚动回页面顶部

            window.scrollTo({
                top: 0,
                behavior: 'auto'
            });
            attempts++;
            if (attempts == 3) {
                show_insist();
            }
            console.log(attempts);
            if (attempts == 5) {
                playVideo();
            }

        }
    });
    function show_insist() {
        alert("Ur almost there!");
    }
    
    
    function playVideo() {
        let video = document.getElementById('your-video-id');
        video.style.display = 'block';
        video.play();
    }
    
    const movingButton = document.getElementById('movingButton');
    const interval = 1000; // 按钮移动的时间间隔，以毫秒为单位
    
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
    
        movingButton.style.left = x + 'px';
        movingButton.style.top = y + 'px';
    }, interval);
    movingButton.addEventListener('mouseover', () => {
        // 随机生成新的位置
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
    
        // 更新按钮的位置
        movingButton.style.left = x + 'px';
        movingButton.style.top = y + 'px';
    });
}


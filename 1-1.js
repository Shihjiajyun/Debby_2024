document.getElementById('breakButton').addEventListener('click', function () {
    let textElement = document.getElementById('text');
    let text = textElement.textContent;
    let catElement = document.getElementById('cat');
    let index = 0;
    let catSpeed = 400; // 設置貓咪移動的速度（毫秒）

    function moveCatAndHideLetter() {
        if (index < text.length) {
            // Move cat to the next letter
            let letter = textElement.childNodes[index];
            let letterPosition = letter.getBoundingClientRect();
            catElement.style.left = letterPosition.left + window.scrollX + 'px';
            catElement.style.top = letterPosition.top + window.scrollY + 'px';

            // Hide the letter after a short delay
            setTimeout(() => {
                letter.classList.add('hidden');
                index++;
                moveCatAndHideLetter();
            }, catSpeed); // 使用catSpeed來設置延遲時間
        } else {
            // Show alert after cat finishes eating text
            setTimeout(() => {
                alert("貓咪吃飽了!可以選擇其他選項了");
            }, catSpeed); // 與貓咪吃文字的速度相同
        }
    }

    // Clear the content and split it into spans for each letter
    textElement.textContent = '';
    for (let char of text) {
        let span = document.createElement('span');
        span.textContent = char;
        textElement.appendChild(span);
    }

    // Start the animation
    moveCatAndHideLetter();
});

// 动态验证码生成
function randomCaptcha(len = 4) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let code = '';
    for (let i = 0; i < len; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function drawCaptcha(canvas, code) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 背景
    ctx.fillStyle = '#f5f8fd';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // 干扰线
    for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = '#1abc9c88';
        ctx.beginPath();
        ctx.moveTo(Math.random()*canvas.width, Math.random()*canvas.height);
        ctx.lineTo(Math.random()*canvas.width, Math.random()*canvas.height);
        ctx.stroke();
    }
    // 验证码文字
    ctx.font = 'bold 20px Arial';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < code.length; i++) {
        ctx.fillStyle = ['#1abc9c','#16a085','#3b82f6','#f59e42'][i%4];
        const x = 12 + i*16;
        const y = canvas.height/2 + (Math.random()-0.5)*6;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((Math.random()-0.5)*0.3);
        ctx.fillText(code[i], 0, 0);
        ctx.restore();
    }
}

function refreshCaptcha() {
    const canvas = document.getElementById('captcha-canvas');
    if (!canvas) return;
    const code = randomCaptcha();
    drawCaptcha(canvas, code);
    // 可选：将验证码内容存储到window变量，便于后续校验
    window.currentCaptcha = code;
}

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('captcha-canvas');
    if (canvas) {
        refreshCaptcha();
        canvas.addEventListener('click', refreshCaptcha);
    }
}); 
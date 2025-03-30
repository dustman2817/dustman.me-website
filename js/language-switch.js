// 语言切换功能
$(document).ready(function() {
    console.log('Language switch script loaded');
    
    // 初始化语言
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        console.log('Found saved language: ' + savedLang);
        switchLanguage(savedLang);
    } else {
        console.log('No saved language, using default: en');
        localStorage.setItem('language', 'en');
        switchLanguage('en');
    }
    
    // 添加点击事件监听器
    $('.lang-switch').on('click', function(e) {
        e.preventDefault();
        const targetLang = $(this).data('lang');
        console.log('Switching to language: ' + targetLang);
        switchLanguage(targetLang);
    });
    
    // 语言切换功能
    function switchLanguage(lang) {
        console.log('Applying language: ' + lang);
        // 移除所有语言按钮的active类
        $('.lang-switch').removeClass('active');
        
        // 为当前语言按钮添加active类
        $(`.lang-switch[data-lang="${lang}"]`).addClass('active');
        
        // 保存语言选择
        localStorage.setItem('language', lang);
        
        if (lang === 'zh') {
            // 显示中文，隐藏英文
            $('.lang-en').hide();
            $('.lang-zh').show();
        } else {
            // 显示英文，隐藏中文
            $('.lang-zh').hide();
            $('.lang-en').show();
        }
        
        // 更新表单占位符
        updateFormPlaceholders(lang);
    }
    
    // 更新表单占位符和验证消息
    function updateFormPlaceholders(lang) {
        if (lang === 'zh') {
            updatePlaceholder('#name', '您的姓名 *', '请输入您的姓名。');
            updatePlaceholder('#email', '您的邮箱 *', '请输入您的邮箱地址。');
            updatePlaceholder('#phone', '您的电话 *', '请输入您的电话号码。');
            updatePlaceholder('#message', '您的留言 *', '请输入您的留言内容。');
        } else {
            updatePlaceholder('#name', 'Your Name *', 'Please enter your name.');
            updatePlaceholder('#email', 'Your Email *', 'Please enter your email address.');
            updatePlaceholder('#phone', 'Your Phone *', 'Please enter your phone number.');
            updatePlaceholder('#message', 'Your Message *', 'Please enter a message.');
        }
    }
    
    function updatePlaceholder(selector, placeholder, validationMessage) {
        const el = $(selector);
        if (el.length) {
            el.attr('placeholder', placeholder);
            el.attr('data-validation-required-message', validationMessage);
        }
    }
}); 
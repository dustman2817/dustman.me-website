// 语言切换功能
$(document).ready(function() {
    console.log('Language switch script loaded');
    
    // 初始化语言
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        console.log('Found saved language: ' + savedLang);
        switchLanguage(savedLang);
    } else {
        console.log('No saved language, using default: zh');
        localStorage.setItem('language', 'zh');
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
    
    // 翻译数据
    const translations = {
        'services': {
            'zh': '服务',
            'en': 'Services'
        },
        'portfolio': {
            'zh': '作品集',
            'en': 'Portfolio'
        },
        'portfolio-subtitle': {
            'zh': '我们的项目展示',
            'en': 'Showcase of Our Projects'
        },
        'about': {
            'zh': '关于',
            'en': 'About'
        },
        'about-subtitle': {
            'zh': '关于我们的发展历程',
            'en': 'Our Journey and Development'
        },
        'team': {
            'zh': '团队',
            'en': 'Team'
        },
        'contact': {
            'zh': '联系',
            'en': 'Contact'
        },
        'welcome': {
            'zh': '欢迎来到我的网站！',
            'en': 'Welcome To My Website!'
        },
        'nice-to-meet': {
            'zh': '很高兴认识您',
            'en': 'It\'s Nice To Meet You'
        },
        'tell-more': {
            'zh': '了解更多',
            'en': 'Tell Me More'
        },
        'services-subtitle': {
            'zh': '我们提供专业的服务，满足您的各种需求。',
            'en': 'Professional services to meet all your needs.'
        },
        'team-subtitle': {
            'zh': '专业的技术团队为您提供优质服务',
            'en': 'Our professional team provides excellent service'
        },
        'success-message': {
            'zh': '<strong>您的消息已成功发送！</strong>',
            'en': '<strong>Your message has been sent successfully!</strong>'
        },
        'error-message': {
            'zh': '<strong>抱歉！</strong> 发送消息时出现错误，请稍后再试。',
            'en': '<strong>Sorry!</strong> An error occurred while sending your message. Please try again later.'
        }
    };
}); 
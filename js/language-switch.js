// 语言切换功能 - 简化版
document.addEventListener('DOMContentLoaded', function() {
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
    const langSwitches = document.querySelectorAll('.lang-switch');
    langSwitches.forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const targetLang = this.getAttribute('data-lang');
            console.log('Switching to language: ' + targetLang);
            switchLanguage(targetLang);
        });
    });
    
    // 语言切换功能
    function switchLanguage(lang) {
        console.log('Applying language: ' + lang);
        // 移除所有语言按钮的active类
        document.querySelectorAll('.lang-switch').forEach(function(el) {
            el.classList.remove('active');
        });
        
        // 为当前语言按钮添加active类
        const activeLangSwitch = document.querySelector(`.lang-switch[data-lang="${lang}"]`);
        if (activeLangSwitch) {
            activeLangSwitch.classList.add('active');
        }
        
        // 保存语言选择
        localStorage.setItem('language', lang);
        
        if (lang === 'zh') {
            // 显示中文，隐藏英文
            hideElements('.lang-en');
            showElements('.lang-zh');
        } else {
            // 显示英文，隐藏中文
            hideElements('.lang-zh');
            showElements('.lang-en');
        }
        
        // 更新带有data-lang-key的元素
        updateTranslations(lang);
        
        // 更新表单占位符
        updateFormPlaceholders(lang);
    }
    
    function hideElements(selector) {
        document.querySelectorAll(selector).forEach(function(el) {
            el.style.display = 'none';
        });
    }
    
    function showElements(selector) {
        document.querySelectorAll(selector).forEach(function(el) {
            el.style.display = '';
        });
    }
    
    function updateTranslations(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(function(el) {
            const key = el.getAttribute('data-lang-key');
            if (translations[key] && translations[key][lang]) {
                el.innerHTML = translations[key][lang];
            }
        });
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
        const el = document.querySelector(selector);
        if (el) {
            el.setAttribute('placeholder', placeholder);
            el.setAttribute('data-validation-required-message', validationMessage);
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
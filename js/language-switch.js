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
        'about': {
            'zh': '关于',
            'en': 'About'
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
        }
    };
}); 
// 语言切换功能
$(function() {
    // 初始化语言设置
    let currentLang = localStorage.getItem('language') || 'zh';
    applyLanguage(currentLang);
    
    // 语言切换处理 - 使用事件委托以确保动态元素也能响应
    $(document).on('click', '.lang-switch', function(e) {
        e.preventDefault();
        const targetLang = $(this).data('lang');
        console.log('Language switched to: ' + targetLang); // 调试日志
        localStorage.setItem('language', targetLang);
        applyLanguage(targetLang);
    });
    
    // 应用语言设置
    function applyLanguage(lang) {
        // 更新语言切换按钮状态
        $('.lang-switch').removeClass('active');
        $(`.lang-switch[data-lang="${lang}"]`).addClass('active');
        
        // 显示对应语言的元素
        if (lang === 'zh') {
            $('.lang-en').hide();
            $('.lang-zh').show();
            $('[data-lang-key]').each(function() {
                const key = $(this).data('lang-key');
                if (translations[key] && translations[key].zh) {
                    $(this).html(translations[key].zh);
                }
            });
        } else {
            $('.lang-zh').hide();
            $('.lang-en').show();
            $('[data-lang-key]').each(function() {
                const key = $(this).data('lang-key');
                if (translations[key] && translations[key].en) {
                    $(this).html(translations[key].en);
                }
            });
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
        }
    };
}); 
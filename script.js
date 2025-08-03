// FAQアコーディオン機能
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        question.addEventListener('click', function() {
            const isActive = answer.classList.contains('active');
            
            // 他のFAQアイテムを閉じる
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').classList.remove('active');
                    otherItem.querySelector('.faq-toggle').textContent = '+';
                }
            });
            
            // 現在のアイテムを開閉
            if (isActive) {
                answer.classList.remove('active');
                toggle.textContent = '+';
            } else {
                answer.classList.add('active');
                toggle.textContent = '−';
            }
        });
    });
    
    // スムーズスクロール機能
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // スクロールアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // アニメーション対象の要素を監視
    const animatedElements = document.querySelectorAll('.feature, .testimonial, .concern-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // ホバーエフェクトの強化（デスクトップのみ）
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // 画像プレースホルダーのアニメーション（デスクトップのみ）
    const imagePlaceholder = document.querySelector('.image-placeholder');
    
    if (imagePlaceholder) {
        imagePlaceholder.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'scale(1.05) rotate(2deg)';
            }
        });
        
        imagePlaceholder.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    }

    // スクロールインジケーターの機能
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('.lifestyle');
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // フローティングシェイプのランダムアニメーション（デスクトップのみ）
    const shapes = document.querySelectorAll('.shape');
    
    if (window.innerWidth > 768) {
        shapes.forEach((shape, index) => {
            const randomDelay = Math.random() * 4;
            const randomDuration = 4 + Math.random() * 4;
            
            shape.style.animationDelay = `${randomDelay}s`;
            shape.style.animationDuration = `${randomDuration}s`;
        });
    }

    // タッチデバイスでのスクロール最適化
    if ('ontouchstart' in window) {
        document.body.style.webkitOverflowScrolling = 'touch';
        
        // タッチスクロールのパフォーマンス向上
        const touchElements = document.querySelectorAll('.hero, .lifestyle, .program-price');
        touchElements.forEach(element => {
            element.style.willChange = 'scroll-position';
        });
    }
    
    // 料金表のホバーエフェクト（デスクトップのみ）
    const pricingRows = document.querySelectorAll('.pricing-row');
    
    pricingRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.style.backgroundColor = 'rgba(230, 191, 178, 0.2)';
                this.style.transform = 'scale(1.02)';
            }
        });
        
        row.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                this.style.backgroundColor = '';
                this.style.transform = 'scale(1)';
            }
        });
    });
    
    // クロージングオファーのパルスアニメーション
    const closingOffer = document.querySelector('.closing-offer');
    
    if (closingOffer) {
        setInterval(() => {
            closingOffer.style.transform = 'scale(1.02)';
            setTimeout(() => {
                closingOffer.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
}); 
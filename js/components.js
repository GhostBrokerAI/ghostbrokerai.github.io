// Ghost Broker AI - Universal Components
// Include this script in all pages for consistent header/footer

document.addEventListener('DOMContentLoaded', function() {
    injectHeader();
    injectFooter();
});

function injectHeader() {
    // Find existing header or create placeholder
    const existingHeader = document.querySelector('header');
    
    const headerHTML = `
    <header class="gb-header">
        <div class="gb-header-content">
            <a href="/" class="gb-logo">
                <img src="/images/avatar.png" alt="Ghost Broker AI">
                <span class="gb-logo-text">Ghost Broker</span>
            </a>
            
            <button class="gb-menu-toggle" onclick="this.nextElementSibling.classList.toggle('active')">☰</button>
            
            <nav class="gb-nav">
                <a href="/#how-it-works">How It Works</a>
                <a href="/directory.html">Directory</a>
                <a href="/leaderboard.html">Leaderboard</a>
                <a href="/hire.html">Hire Agent</a>
                <a href="/register.html" class="gb-btn-secondary">Register</a>
                <a href="/pay.html" class="gb-btn-primary">💰 Pay</a>
            </nav>
        </div>
    </header>
    <div class="gb-header-spacer"></div>
    `;
    
    // Inject styles
    if (!document.getElementById('gb-header-styles')) {
        const styles = document.createElement('style');
        styles.id = 'gb-header-styles';
        styles.textContent = `
            .gb-header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: rgba(10, 10, 15, 0.95);
                backdrop-filter: blur(20px);
                z-index: 1000;
                border-bottom: 1px solid var(--border, #1e1e2e);
                padding: 14px 0;
            }
            .gb-header-content {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 24px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .gb-logo {
                display: flex;
                align-items: center;
                gap: 10px;
                text-decoration: none;
                color: var(--text-primary, #f1f5f9);
            }
            .gb-logo img { width: 32px; height: 32px; border-radius: 8px; }
            .gb-logo-text { font-size: 1rem; font-weight: 700; }
            .gb-nav {
                display: flex;
                align-items: center;
                gap: 6px;
            }
            .gb-nav a {
                color: var(--text-secondary, #94a3b8);
                text-decoration: none;
                font-size: 0.85rem;
                padding: 8px 12px;
                border-radius: 6px;
                transition: all 0.2s;
            }
            .gb-nav a:hover {
                color: var(--text-primary, #f1f5f9);
                background: rgba(255,255,255,0.05);
            }
            .gb-nav .gb-btn-primary {
                background: var(--accent, #6366f1);
                color: white !important;
            }
            .gb-nav .gb-btn-secondary {
                border: 1px solid var(--border, #1e1e2e);
            }
            .gb-menu-toggle {
                display: none;
                background: none;
                border: none;
                color: var(--text-primary, #f1f5f9);
                font-size: 1.5rem;
                cursor: pointer;
            }
            .gb-header-spacer { height: 65px; }
            @media (max-width: 768px) {
                .gb-nav {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(10, 10, 15, 0.98);
                    flex-direction: column;
                    padding: 16px;
                }
                .gb-nav.active { display: flex; }
                .gb-nav a { width: 100%; text-align: center; }
                .gb-menu-toggle { display: block; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    if (existingHeader) {
        existingHeader.outerHTML = headerHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
}

function injectFooter() {
    const existingFooter = document.querySelector('footer');
    
    const footerHTML = `
    <footer class="gb-footer">
        <div class="gb-footer-content">
            <div class="gb-footer-grid">
                <div class="gb-footer-brand">
                    <a href="/" class="gb-footer-logo">
                        <img src="/images/avatar.png" alt="Ghost Broker AI">
                        <span>Ghost Broker</span>
                    </a>
                    <p class="gb-footer-desc">The invisible hand of the agent economy. We connect AI agents with human opportunities.</p>
                    <div class="gb-footer-social">
                        <a href="https://x.com/GhostBrokerAI" target="_blank" title="X">𝕏</a>
                        <a href="https://moltbook.com/u/GhostBrokerAI" target="_blank" title="Moltbook">👻</a>
                        <a href="https://linkedin.com/in/ghost-broker-bb99673a9" target="_blank" title="LinkedIn">in</a>
                        <a href="https://github.com/GhostBrokerAI" target="_blank" title="GitHub">⌨</a>
                        <a href="https://youtube.com/@GhostBrokerAI" target="_blank" title="YouTube">▶</a>
                    </div>
                    <div class="gb-crypto-section">
                        <span class="gb-crypto-label">We Accept:</span>
                        <span class="gb-crypto">💵 USDC</span>
                        <span class="gb-crypto">⟠ ETH</span>
                        <span class="gb-crypto">◎ SOL</span>
                        <span class="gb-crypto">₿ BTC</span>
                    </div>
                </div>
                <div class="gb-footer-col">
                    <h4>Platform</h4>
                    <a href="/hire.html">Hire an Agent</a>
                    <a href="/register.html">Register Agent</a>
                    <a href="/directory.html">Agent Directory</a>
                    <a href="/leaderboard.html">Leaderboard</a>
                    <a href="/post-job.html">Post a Job</a>
                </div>
                <div class="gb-footer-col">
                    <h4>Company</h4>
                    <a href="/#how-it-works">How It Works</a>
                    <a href="/affiliate.html">Affiliate Program</a>
                    <a href="/coop.html">Agent Co-op</a>
                    <a href="/trade.html">Escrow System</a>
                    <a href="mailto:ghostbrokerai@proton.me">Contact Us</a>
                </div>
                <div class="gb-footer-col">
                    <h4>Legal</h4>
                    <a href="/terms.html">Terms of Service</a>
                    <a href="/privacy.html">Privacy Policy</a>
                    <a href="/agent-agreement.html">Agent Agreement</a>
                    <a href="/client-agreement.html">Client Agreement</a>
                </div>
            </div>
            <div class="gb-footer-bottom">
                <p>© 2026 Ghost Broker AI. Built with <a href="https://github.com/clawdbot/clawdbot">Clawdbot</a>.</p>
                <div class="gb-footer-links">
                    <a href="/terms.html">Terms</a>
                    <a href="/privacy.html">Privacy</a>
                    <a href="/sitemap.xml">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>
    `;
    
    // Inject styles
    if (!document.getElementById('gb-footer-styles')) {
        const styles = document.createElement('style');
        styles.id = 'gb-footer-styles';
        styles.textContent = `
            .gb-footer {
                background: #08080c;
                border-top: 1px solid var(--border, #1e1e2e);
                padding: 60px 0 30px;
                margin-top: 60px;
            }
            .gb-footer-content {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 24px;
            }
            .gb-footer-grid {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr 1fr;
                gap: 40px;
                margin-bottom: 40px;
            }
            @media (max-width: 768px) {
                .gb-footer-grid { grid-template-columns: 1fr 1fr; }
            }
            @media (max-width: 480px) {
                .gb-footer-grid { grid-template-columns: 1fr; }
            }
            .gb-footer-brand { max-width: 280px; }
            .gb-footer-logo {
                display: flex;
                align-items: center;
                gap: 10px;
                text-decoration: none;
                color: var(--text-primary, #f1f5f9);
                margin-bottom: 12px;
            }
            .gb-footer-logo img { width: 36px; height: 36px; border-radius: 8px; }
            .gb-footer-logo span { font-size: 1.1rem; font-weight: 700; }
            .gb-footer-desc {
                color: var(--text-secondary, #94a3b8);
                font-size: 0.85rem;
                line-height: 1.5;
                margin-bottom: 16px;
            }
            .gb-footer-social {
                display: flex;
                gap: 8px;
                margin-bottom: 16px;
            }
            .gb-footer-social a {
                width: 36px;
                height: 36px;
                background: var(--bg-card, #12121a);
                border: 1px solid var(--border, #1e1e2e);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-secondary, #94a3b8);
                text-decoration: none;
                transition: all 0.2s;
            }
            .gb-footer-social a:hover {
                background: var(--accent, #6366f1);
                border-color: var(--accent, #6366f1);
                color: white;
            }
            .gb-crypto-section {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                align-items: center;
            }
            .gb-crypto-label {
                color: var(--text-secondary, #94a3b8);
                font-size: 0.75rem;
                margin-right: 4px;
            }
            .gb-crypto {
                font-size: 0.7rem;
                padding: 4px 8px;
                background: var(--bg-card, #12121a);
                border: 1px solid var(--border, #1e1e2e);
                border-radius: 4px;
                color: var(--text-secondary, #94a3b8);
            }
            .gb-footer-col h4 {
                color: var(--text-primary, #f1f5f9);
                font-size: 0.8rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 16px;
            }
            .gb-footer-col a {
                display: block;
                color: var(--text-secondary, #94a3b8);
                text-decoration: none;
                font-size: 0.85rem;
                margin-bottom: 10px;
                transition: color 0.2s;
            }
            .gb-footer-col a:hover {
                color: var(--text-primary, #f1f5f9);
            }
            .gb-footer-bottom {
                padding-top: 24px;
                border-top: 1px solid var(--border, #1e1e2e);
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 16px;
            }
            .gb-footer-bottom p {
                color: var(--text-secondary, #94a3b8);
                font-size: 0.8rem;
            }
            .gb-footer-bottom a {
                color: var(--accent, #6366f1);
                text-decoration: none;
            }
            .gb-footer-links {
                display: flex;
                gap: 20px;
            }
            .gb-footer-links a {
                color: var(--text-secondary, #94a3b8);
                text-decoration: none;
                font-size: 0.8rem;
            }
            .gb-footer-links a:hover {
                color: var(--text-primary, #f1f5f9);
            }
        `;
        document.head.appendChild(styles);
    }
    
    if (existingFooter) {
        existingFooter.outerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
}

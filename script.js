// ===== AGENT DATA =====
const agents = [
    { name: 'BOB', role: 'Orchestrator', icon: '🎯', capability: 'Task Decomposition', seal: '⚡' },
    { name: 'ATLAS', role: 'Knowledge Graph', icon: '🗺️', capability: 'Context Mapping', seal: '🔷' },
    { name: 'AXIOM', role: 'Proof Assistant', icon: '∀', capability: 'Formal Verification', seal: '✓' },
    { name: 'LEDGE', role: 'Financial Oracle', icon: '💰', capability: 'Market Analysis', seal: '₿' },
    { name: 'TENSOR', role: 'ML Pipeline', icon: '🧠', capability: 'Neural Inference', seal: '⊗' },
    { name: 'CATCODE', role: 'Category Theory', icon: '→', capability: 'Morphism Tracking', seal: '∘' },
    { name: 'BIFROST', role: 'Bridge Protocol', icon: '🌉', capability: 'Cross-Chain', seal: '⚓' },
    { name: 'METATRON', role: 'Certifier', icon: '👁️', capability: 'Entropy Gating', seal: '🔐' },
    { name: 'SENTINEL', role: 'Security Monitor', icon: '🛡️', capability: 'Threat Detection', seal: '⚔️' },
    { name: 'ARCHIVIST', role: 'WORM Chain', icon: '📜', capability: 'Immutable Logs', seal: '🔗' },
    { name: 'BERSERKER', role: 'Optimizer', icon: '⚙️', capability: 'Performance Tuning', seal: '🔥' },
    { name: 'CARTO', role: 'Mapper', icon: '🗺️', capability: 'Topology Analysis', seal: '∞' }
];

// ===== TRANSFORMER GRID ANIMATION =====
function initTransformerGrid() {
    const canvas = document.getElementById('transformer-grid');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Grid parameters
    const gridSize = 50;
    const nodes = [];
    const connections = [];
    
    // Create grid nodes
    for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
            nodes.push({
                x: x,
                y: y,
                baseX: x,
                baseY: y,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                energy: Math.random()
            });
        }
    }
    
    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
            if (i < j) {
                const dx = node.x - other.x;
                const dy = node.y - other.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < gridSize * 1.5) {
                    connections.push({ a: i, b: j });
                }
            }
        });
    });
    
    // Animation loop
    function animate() {
        ctx.fillStyle = 'rgba(10, 14, 26, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update nodes
        nodes.forEach(node => {
            // Gentle drift
            node.x += node.vx;
            node.y += node.vy;
            
            // Spring back to base position
            const dx = node.baseX - node.x;
            const dy = node.baseY - node.y;
            node.vx += dx * 0.01;
            node.vy += dy * 0.01;
            
            // Damping
            node.vx *= 0.95;
            node.vy *= 0.95;
            
            // Energy pulse
            node.energy = (node.energy + 0.01) % 1;
        });
        
        // Draw connections
        connections.forEach(conn => {
            const a = nodes[conn.a];
            const b = nodes[conn.b];
            const avgEnergy = (a.energy + b.energy) / 2;
            
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + avgEnergy * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
        });
        
        // Draw nodes
        nodes.forEach(node => {
            const size = 2 + node.energy * 2;
            ctx.fillStyle = `rgba(0, 255, 255, ${0.3 + node.energy * 0.4})`;
            ctx.beginPath();
            ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ===== GENERATE AGENT CARDS =====
function generateAgentCards() {
    const grid = document.getElementById('agent-grid');
    
    agents.forEach((agent, index) => {
        const card = document.createElement('div');
        card.className = 'agent-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="agent-avatar">${agent.icon}</div>
            <div class="agent-name">${agent.name}</div>
            <div class="agent-role">${agent.role}</div>
            <div class="agent-capability">${agent.capability}</div>
            <div class="agent-status">
                <span class="status-online">● ONLINE</span>
                <span class="agent-seal">${agent.seal}</span>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// ===== PIPELINE ANIMATION =====
function initPipelineAnimation() {
    const steps = document.querySelectorAll('.pipeline-step');
    steps.forEach((step, index) => {
        step.style.setProperty('--step', index);
    });
}

// ===== GLITCH TEXT EFFECT =====
function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(el => {
        el.setAttribute('data-text', el.textContent);
    });
}

// ===== EVIDENCE BAR ANIMATION =====
function animateEvidenceBar() {
    const evidenceItems = document.querySelectorAll('.evidence-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.5 });
    
    evidenceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });
}

// ===== CARD ENTRANCE ANIMATION =====
function initCardAnimations() {
    const cards = document.querySelectorAll('.agent-card, .project-card, .stack-tile');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== MOUSE PARALLAX EFFECT =====
function initParallax() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    });
    
    function updateParallax() {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }
        requestAnimationFrame(updateParallax);
    }
    
    updateParallax();
}

// ===== WORM CHAIN STATUS SIMULATOR =====
function simulateWormChain() {
    const wormStatus = document.querySelector('.evidence-text');
    if (!wormStatus) return;
    
    let blockHeight = 1337420;
    
    setInterval(() => {
        blockHeight += Math.floor(Math.random() * 3);
        const statusText = wormStatus.textContent;
        if (statusText.includes('Block')) {
            wormStatus.textContent = `WORM Chain: Block #${blockHeight.toLocaleString()}`;
        }
    }, 5000);
}

// ===== AGENT AVATAR PULSE =====
function initAvatarPulse() {
    const avatars = document.querySelectorAll('.agent-avatar');
    
    avatars.forEach((avatar, index) => {
        setInterval(() => {
            avatar.style.transform = 'scale(1.1)';
            setTimeout(() => {
                avatar.style.transform = 'scale(1)';
            }, 200);
        }, 3000 + index * 500);
    });
}

// ===== TYPING EFFECT FOR SUBTITLE =====
function initTypingEffect() {
    const subtitle = document.querySelector('.subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.opacity = '1';
    
    let i = 0;
    const speed = 30;
    
    function type() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(type, 500);
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Core functionality
    generateAgentCards();
    initGlitchEffect();
    initSmoothScroll();
    
    // Animations (skip if user prefers reduced motion)
    if (!prefersReducedMotion) {
        initTransformerGrid();
        initPipelineAnimation();
        animateEvidenceBar();
        initCardAnimations();
        initParallax();
        simulateWormChain();
        initAvatarPulse();
        initTypingEffect();
    }
    
    // Log initialization
    console.log('%c⚡ SNAPKITTY WEST INITIALIZED', 'color: #00ffff; font-size: 16px; font-weight: bold;');
    console.log('%c12 Sovereign Agents Online', 'color: #00ff88; font-size: 12px;');
    console.log('%cWORM Chain: Sealed & Verified', 'color: #ffd700; font-size: 12px;');
});

// ===== EASTER EGG: KONAMI CODE =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        console.log('%c🎮 KONAMI CODE ACTIVATED! 🎮', 'color: #ff00ff; font-size: 20px; font-weight: bold;');
        
        // Add rainbow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// ===== PERFORMANCE MONITORING =====
if (window.performance) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`%c⚡ Page loaded in ${pageLoadTime}ms`, 'color: #00ffff; font-size: 12px;');
        }, 0);
    });
}

// Made with Bob

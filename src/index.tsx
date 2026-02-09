import { Hono } from 'hono'

const app = new Hono()

const portfolioHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preeti Agrawal | Product Leader</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap');
        
        * {
            font-family: 'Segoe Print', 'Bradley Hand', 'Chilanka', 'TSCu_Comic', cursive;
        }
        
        :root {
            --primary: #4A5568;
            --secondary: #718096;
            --accent: #667EEA;
            --accent-light: #A3BFFA;
            --bg-cream: #FAF9F7;
            --bg-soft: #F7F5F2;
            --text-dark: #2D3748;
            --text-muted: #718096;
            --coral: #F6AD7B;
            --sage: #9AE6B4;
            --lavender: #C4B5FD;
            --peach: #FED7AA;
            --mint: #C6F6D5;
            --sky: #BEE3F8;
        }
        
        body {
            background: var(--bg-cream);
            color: var(--text-dark);
        }
        
        .tab-btn {
            position: relative;
            padding: 12px 24px;
            color: var(--text-muted);
            font-weight: 500;
            transition: all 0.3s ease;
            border-radius: 24px;
        }
        
        .tab-btn.active {
            color: var(--accent);
            background: rgba(102, 126, 234, 0.1);
        }
        
        .tab-btn:hover:not(.active) {
            color: var(--text-dark);
            background: rgba(0,0,0,0.03);
        }
        
        .tab-content {
            display: none;
            animation: fadeIn 0.5s ease;
        }
        
        .tab-content.active {
            display: block;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .timeline-container {
            position: relative;
            padding: 40px 0;
        }
        
        .timeline-line {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 3px;
            background: linear-gradient(to bottom, var(--accent-light), var(--lavender), var(--coral));
            transform: translateX(-50%);
            border-radius: 3px;
        }
        
        .timeline-item {
            position: relative;
            margin-bottom: 60px;
            display: flex;
            align-items: flex-start;
        }
        
        .timeline-item:nth-child(odd) {
            flex-direction: row;
        }
        
        .timeline-item:nth-child(even) {
            flex-direction: row-reverse;
        }
        
        .timeline-content {
            width: 45%;
            padding: 24px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .timeline-content:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }
        
        .timeline-dot {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 20px;
            background: white;
            border: 4px solid var(--accent);
            border-radius: 50%;
            z-index: 10;
        }
        
        .timeline-year {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: -30px;
            font-size: 14px;
            font-weight: 600;
            color: var(--accent);
            background: white;
            padding: 4px 12px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        
        .project-card {
            background: white;
            border-radius: 20px;
            padding: 32px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-left: 4px solid var(--accent);
        }
        
        .project-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        
        .metric-badge {
            display: inline-flex;
            align-items: center;
            padding: 8px 16px;
            background: linear-gradient(135deg, var(--accent-light) 0%, var(--lavender) 100%);
            color: var(--text-dark);
            border-radius: 20px;
            font-weight: 600;
            font-size: 14px;
        }
        
        .skill-tag {
            display: inline-block;
            padding: 8px 16px;
            background: var(--bg-soft);
            color: var(--text-dark);
            border-radius: 20px;
            font-size: 14px;
            margin: 4px;
            transition: all 0.2s ease;
        }
        
        .skill-tag:hover {
            background: var(--accent-light);
            transform: scale(1.05);
        }
        
        .section-shape {
            position: absolute;
            opacity: 0.1;
            z-index: 0;
        }
        
        .card-icon {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            font-size: 20px;
        }
        
        .illustration-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .illustration {
            max-width: 100%;
            height: auto;
        }
        
        .hero-illustration {
            max-width: 300px;
        }
        
        .section-illustration {
            max-width: 150px;
        }
        
        .scroll-indicator {
            animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
        
        .gradient-text {
            background: linear-gradient(135deg, var(--accent) 0%, #9F7AEA 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        /* New brush stroke underline design */
        .brush-underline {
            position: relative;
            display: inline-block;
        }
        
        .brush-underline::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: -5%;
            width: 110%;
            height: 12px;
            background: linear-gradient(90deg, transparent 0%, #667EEA 10%, #9F7AEA 50%, #C4B5FD 90%, transparent 100%);
            border-radius: 50%;
            opacity: 0.6;
            transform: skewX(-12deg);
        }

        .floating-shape {
            position: fixed;
            z-index: 0;
            opacity: 0.04;
            pointer-events: none;
        }

        .nav-container {
            backdrop-filter: blur(10px);
            background: rgba(250, 249, 247, 0.9);
        }
        
        /* AI Project specific styles */
        .ai-card {
            background: white;
            border-radius: 20px;
            padding: 32px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-left: 4px solid var(--accent);
            position: relative;
            overflow: hidden;
        }
        
        .ai-card::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(159, 122, 234, 0.05) 100%);
            border-radius: 0 0 0 100%;
        }
        
        .ai-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        
        .tech-pill {
            display: inline-flex;
            align-items: center;
            padding: 4px 12px;
            background: rgba(102, 126, 234, 0.1);
            color: #667EEA;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
            margin: 2px;
        }
        
        .status-badge {
            display: inline-flex;
            align-items: center;
            padding: 6px 14px;
            border-radius: 16px;
            font-size: 12px;
            font-weight: 600;
        }
        
        .status-badge.active {
            background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);
            color: #276749;
        }
        
        .status-badge.progress {
            background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);
            color: #9C4221;
        }
        
        .architecture-block {
            background: linear-gradient(135deg, #F7FAFC 0%, #EDF2F7 100%);
            border-radius: 12px;
            padding: 16px;
            margin-top: 12px;
        }
        
        .judgment-box {
            background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 20%, #E9D8FD 100%);
            border-radius: 12px;
            padding: 16px;
            margin-top: 16px;
            border-left: 3px solid #9F7AEA;
        }
        
        .company-header {
            background: linear-gradient(135deg, #667EEA 0%, #9F7AEA 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 16px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            gap: 16px;
        }
        
        .company-header.amazon {
            background: linear-gradient(135deg, #FF9900 0%, #FFAC31 100%);
        }
        
        .company-header.rbl {
            background: linear-gradient(135deg, #2D8B4E 0%, #48BB78 100%);
        }

        @media (max-width: 768px) {
            .timeline-line {
                left: 20px;
            }
            .timeline-item {
                flex-direction: column !important;
                padding-left: 50px;
            }
            .timeline-content {
                width: 100%;
            }
            .timeline-dot {
                left: 20px;
            }
            .timeline-year {
                left: 20px;
            }
            .tab-btn {
                padding: 8px 12px;
                font-size: 12px;
            }
        }
    </style>
</head>
<body class="min-h-screen relative overflow-x-hidden">
    <!-- Floating Background Shapes -->
    <div class="floating-shape" style="top: 10%; left: 5%;">
        <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="#667EEA"/>
        </svg>
    </div>
    <div class="floating-shape" style="top: 40%; right: 8%;">
        <svg width="80" height="80" viewBox="0 0 80 80">
            <rect x="10" y="10" width="60" height="60" rx="15" fill="#F6AD7B"/>
        </svg>
    </div>
    <div class="floating-shape" style="bottom: 20%; left: 10%;">
        <svg width="100" height="100" viewBox="0 0 100 100">
            <polygon points="50,5 95,75 5,75" fill="#9AE6B4"/>
        </svg>
    </div>

    <!-- Navigation -->
    <nav class="nav-container sticky top-0 z-50 border-b border-gray-100">
        <div class="max-w-6xl mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold">
                        PA
                    </div>
                    <span class="text-lg font-semibold text-gray-800">Preeti Agrawal</span>
                </div>
                <div class="flex items-center gap-3">
                    <a href="https://linkedin.com/in/agrawal-preeti" target="_blank" class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-all">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/preeti-mlverse" target="_blank" class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-all">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="mailto:pmagica22@gmail.com" class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-300 hover:text-white transition-all">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Tab Navigation -->
    <div class="sticky top-[72px] z-40 bg-[#FAF9F7]/95 backdrop-blur-sm border-b border-gray-100">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide" id="tabNav">
                <button class="tab-btn active whitespace-nowrap" data-tab="about">
                    <i class="fas fa-user mr-2"></i>About
                </button>
                <button class="tab-btn whitespace-nowrap" data-tab="journey">
                    <i class="fas fa-road mr-2"></i>Journey
                </button>
                <button class="tab-btn whitespace-nowrap" data-tab="projects">
                    <i class="fas fa-rocket mr-2"></i>Projects
                </button>
                <button class="tab-btn whitespace-nowrap" data-tab="ai-projects">
                    <i class="fas fa-brain mr-2"></i>AI Projects
                </button>
                <button class="tab-btn whitespace-nowrap" data-tab="skills">
                    <i class="fas fa-tools mr-2"></i>Skills
                </button>
                <button class="tab-btn whitespace-nowrap" data-tab="education">
                    <i class="fas fa-graduation-cap mr-2"></i>Education
                </button>
                <button class="tab-btn whitespace-nowrap" data-tab="contact">
                    <i class="fas fa-paper-plane mr-2"></i>Contact
                </button>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 py-8 relative z-10">
        
        <!-- About Section -->
        <section id="about" class="tab-content active">
            <!-- Hero -->
            <div class="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div>
                    <p class="text-indigo-500 font-medium mb-2">Hello, I'm</p>
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        <span class="brush-underline">Preeti Agrawal</span>
                    </h1>
                    <h2 class="text-xl md:text-2xl text-gray-600 mb-6">
                        Product Leader <span class="text-indigo-400">|</span> 
                        <span class="gradient-text">AI & Analytics</span> <span class="text-indigo-400">|</span> 
                        Growth Systems
                    </h2>
                    <p class="text-gray-600 text-lg leading-relaxed mb-8">
                        10+ years of experience across <strong>e-commerce, D2C, SaaS, and fintech</strong>, 
                        building data-driven and AI-enabled products that deliver measurable business impact.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <button onclick="switchTab('projects')" class="px-6 py-3 bg-indigo-500 text-white rounded-full font-medium hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-200 cursor-pointer">
                            <i class="fas fa-eye mr-2"></i>View Projects
                        </button>
                        <button onclick="switchTab('contact')" class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-indigo-400 hover:text-indigo-500 transition-all cursor-pointer">
                            <i class="fas fa-envelope mr-2"></i>Get in Touch
                        </button>
                    </div>
                </div>
                <div class="illustration-container">
                    <svg class="hero-illustration" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="80" y="180" width="240" height="120" rx="8" fill="#E2E8F0"/>
                        <rect x="100" y="195" width="140" height="90" rx="6" fill="#667EEA"/>
                        <rect x="110" y="205" width="120" height="70" rx="4" fill="#EDF2F7"/>
                        <path d="M125 255 L145 235 L165 245 L185 220 L205 230" stroke="#9F7AEA" stroke-width="3" stroke-linecap="round"/>
                        <circle cx="125" cy="255" r="3" fill="#9F7AEA"/>
                        <circle cx="145" cy="235" r="3" fill="#9F7AEA"/>
                        <circle cx="165" cy="245" r="3" fill="#9F7AEA"/>
                        <circle cx="185" cy="220" r="3" fill="#9F7AEA"/>
                        <circle cx="205" cy="230" r="3" fill="#9F7AEA"/>
                        <circle cx="280" cy="140" r="35" fill="#FED7AA"/>
                        <ellipse cx="280" cy="220" rx="40" ry="50" fill="#667EEA"/>
                        <path d="M245 130 Q250 90 280 85 Q310 90 315 130 Q310 120 280 115 Q250 120 245 130" fill="#4A5568"/>
                        <rect x="260" y="240" width="25" height="30" rx="4" fill="#F6AD7B"/>
                        <ellipse cx="272" cy="240" rx="12" ry="4" fill="#FEEBC8"/>
                        <rect x="320" y="230" width="20" height="35" rx="4" fill="#C6F6D5"/>
                        <circle cx="330" cy="215" r="15" fill="#9AE6B4"/>
                        <circle cx="322" cy="210" r="10" fill="#68D391"/>
                        <circle cx="338" cy="210" r="10" fill="#68D391"/>
                        <circle cx="120" cy="120" r="20" fill="#E9D8FD" opacity="0.8"/>
                        <text x="114" y="126" font-size="16" fill="#667EEA">AI</text>
                        <rect x="60" y="160" width="40" height="25" rx="6" fill="#C6F6D5" opacity="0.8"/>
                        <text x="68" y="178" font-size="10" fill="#38A169">ML</text>
                        <rect x="320" y="100" width="50" height="25" rx="6" fill="#FEEBC8" opacity="0.8"/>
                        <text x="325" y="118" font-size="10" fill="#DD6B20">Data</text>
                    </svg>
                </div>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div class="bg-white p-6 rounded-2xl shadow-sm text-center">
                    <div class="text-3xl font-bold gradient-text mb-1">10+</div>
                    <div class="text-gray-500 text-sm">Years Experience</div>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm text-center">
                    <div class="text-3xl font-bold gradient-text mb-1">$50M+</div>
                    <div class="text-gray-500 text-sm">Business Impact</div>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm text-center">
                    <div class="text-3xl font-bold gradient-text mb-1">4</div>
                    <div class="text-gray-500 text-sm">Industries</div>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm text-center">
                    <div class="text-3xl font-bold gradient-text mb-1">AI/ML</div>
                    <div class="text-gray-500 text-sm">Specialization</div>
                </div>
            </div>

            <!-- What I Do -->
            <h3 class="text-2xl font-bold text-gray-800 mb-6">What I Do</h3>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div class="card-icon bg-indigo-100 text-indigo-500 mb-4">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-800 mb-2">AI-Enabled Products</h4>
                    <p class="text-gray-600 text-sm">Building intelligent systems using GenAI, ML, NLP, and Computer Vision to automate and enhance user experiences.</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div class="card-icon bg-purple-100 text-purple-500 mb-4">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-800 mb-2">Analytics & Growth</h4>
                    <p class="text-gray-600 text-sm">Designing data-driven growth systems, analytics platforms, and experimentation frameworks that drive measurable outcomes.</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div class="card-icon bg-orange-100 text-orange-500 mb-4">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-800 mb-2">Automation Systems</h4>
                    <p class="text-gray-600 text-sm">Creating intelligent automation solutions that reduce operational costs, improve efficiency, and scale operations.</p>
                </div>
            </div>
        </section>

        <!-- Journey Section -->
        <section id="journey" class="tab-content">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="text-3xl font-bold text-gray-800">My Journey</h2>
                <svg class="section-illustration" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 80 Q40 40 75 60 Q110 80 130 40" stroke="#667EEA" stroke-width="4" stroke-linecap="round" fill="none"/>
                    <circle cx="20" cy="80" r="8" fill="#9AE6B4"/>
                    <circle cx="75" cy="60" r="8" fill="#F6AD7B"/>
                    <circle cx="130" cy="40" r="8" fill="#C4B5FD"/>
                    <path d="M125 35 L135 40 L125 45" fill="#C4B5FD"/>
                </svg>
            </div>
            
            <div class="timeline-container">
                <div class="timeline-line"></div>
                
                <!-- Trumee -->
                <div class="timeline-item">
                    <div class="timeline-content">
                        <span class="timeline-year">2024 - Present</span>
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white">
                                <i class="fas fa-store"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800">Founder</h3>
                                <p class="text-indigo-500 font-medium">Trumee (AI-enabled D2C Fashion)</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Founded an AI-enabled D2C women's fashion brand to validate AI-driven demand and inventory solutions.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">Full P&L Ownership</span>
                            <span class="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">AI/ML</span>
                        </div>
                    </div>
                    <div class="timeline-dot"></div>
                    <div class="w-[45%]"></div>
                </div>
                
                <!-- AlphaSense -->
                <div class="timeline-item">
                    <div class="w-[45%]"></div>
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-year">2023 - 2024</span>
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white">
                                <i class="fas fa-search-dollar"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800">Product Manager</h3>
                                <p class="text-indigo-500 font-medium">AlphaSense (SaaS/FinTech)</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Led Client Analytics Platform, Unified Analytics, BI Chatbot, and NPS infrastructure optimization.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">$13.14M ARR</span>
                            <span class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">20+ Teams</span>
                        </div>
                    </div>
                </div>
                
                <!-- Amazon -->
                <div class="timeline-item">
                    <div class="timeline-content">
                        <span class="timeline-year">2022 - 2023</span>
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white">
                                <i class="fab fa-amazon"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800">Product Manager</h3>
                                <p class="text-indigo-500 font-medium">Amazon Development Center</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Led catalog deduplication (NLP/CV), defect removal automation, and A/B testing for marketing campaigns.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">$29M+ Impact</span>
                            <span class="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">7× Scale</span>
                        </div>
                    </div>
                    <div class="timeline-dot"></div>
                    <div class="w-[45%]"></div>
                </div>
                
                <!-- RBL Bank -->
                <div class="timeline-item">
                    <div class="w-[45%]"></div>
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-year">2020 - 2022</span>
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white">
                                <i class="fas fa-university"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800">PM - Analytics & Growth (AVP)</h3>
                                <p class="text-indigo-500 font-medium">RBL Bank (FinTech)</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Led leads management, marketing analytics, WhatsApp adoption, and personalized offers experimentation.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">5% Conversion ↑</span>
                            <span class="text-xs px-3 py-1 bg-orange-100 text-orange-700 rounded-full">$100K Savings</span>
                        </div>
                    </div>
                </div>

                <!-- ISB -->
                <div class="timeline-item">
                    <div class="timeline-content">
                        <span class="timeline-year">2019 - 2020</span>
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center text-white">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800">PGP Student</h3>
                                <p class="text-indigo-500 font-medium">Indian School of Business</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Post Graduate Programme in IT & Marketing. Career pivot from QA to Product Management.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">IT & Marketing</span>
                        </div>
                    </div>
                    <div class="timeline-dot"></div>
                    <div class="w-[45%]"></div>
                </div>
                
                <!-- Amazon QAE -->
                <div class="timeline-item">
                    <div class="w-[45%]"></div>
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-year">2017 - 2019</span>
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white">
                                <i class="fab fa-amazon"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800">QA Engineer (QAE1)</h3>
                                <p class="text-indigo-500 font-medium">Amazon Development Center</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Built automation frameworks for FBA supply chain with ~$34M cost savings.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">$34M Savings</span>
                        </div>
                    </div>
                </div>

                <!-- Commonfloor & Cognizant -->
                <div class="timeline-item">
                    <div class="timeline-content">
                        <span class="timeline-year">2012 - 2017</span>
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white">
                                <i class="fas fa-code"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800">QA Engineer</h3>
                                <p class="text-indigo-500 font-medium">Commonfloor & Cognizant</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Started career in QA automation at Cognizant (telecom) and Commonfloor (real estate tech).</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Test Automation</span>
                        </div>
                    </div>
                    <div class="timeline-dot"></div>
                    <div class="w-[45%]"></div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="tab-content">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="text-3xl font-bold text-gray-800">Projects</h2>
                <svg class="section-illustration" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="30" width="50" height="60" rx="6" fill="#E9D8FD"/>
                    <rect x="30" y="40" width="30" height="4" rx="2" fill="#667EEA"/>
                    <rect x="30" y="50" width="25" height="4" rx="2" fill="#9F7AEA"/>
                    <rect x="80" y="20" width="50" height="70" rx="6" fill="#C6F6D5"/>
                    <circle cx="105" cy="45" r="15" fill="#9AE6B4"/>
                    <path d="M100 45 L105 50 L115 40" stroke="#38A169" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <!-- Trumee Section -->
            <div class="company-header mb-6" style="background: linear-gradient(135deg, #9F7AEA 0%, #ED64A6 100%);">
                <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <i class="fas fa-store text-xl"></i>
                </div>
                <div>
                    <h3 class="text-xl font-bold">Trumee</h3>
                    <p class="text-white/80 text-sm">Founder | AI-enabled D2C Fashion | 2024-Present</p>
                </div>
            </div>

            <div class="space-y-8 mb-12">
                <!-- Trumee Project 1: Full P&L Ownership -->
                <div class="project-card" style="border-left-color: #9F7AEA;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Full P&L Ownership</h3>
                                <p class="text-indigo-500">End-to-End Business Lifecycle</p>
                            </div>
                        </div>
                        <div class="metric-badge" style="background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 100%);">
                            <i class="fas fa-percent mr-2"></i>12% Cost Reduction
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Complete business ownership from sourcing to customer delivery, validating AI-driven demand and inventory solutions.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Post layoffs at AlphaSense, wanted hands-on experience in end-to-end business ownership to validate AI-driven solutions in a real market environment.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Led complete business lifecycle—sourcing, vendor negotiations, pricing, inventory planning, fulfillment, and customer delivery for an AI-enabled D2C fashion brand.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Improved supplier economics through strategic negotiations. Implemented inventory discipline practices. Optimized fulfillment workflows for efficiency.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">With Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">Vendors & suppliers, fulfillment partners, payment providers (Razorpay), logistics (Shiprocket), platform (Shopify).</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">12% Operational Cost ↓</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 100%);">Full P&L Control</span>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Chose <strong>lean operations over rapid scaling</strong> to validate unit economics before growth investment.</p>
                    </div>
                </div>

                <!-- Trumee Project 2: TrendRadar - Inventory Intelligence -->
                <div class="project-card" style="border-left-color: #ED64A6;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-satellite-dish"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">TrendRadar - Inventory Intelligence</h3>
                                <p class="text-indigo-500">Demand Sensing & Deadstock Reduction</p>
                            </div>
                        </div>
                        <div class="metric-badge" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">
                            <i class="fas fa-box-open mr-2"></i>Deadstock ↓
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Demand-sensing initiative aligning buying decisions with real-time fashion trends and historical sales signals.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Fashion retail suffers from high deadstock rates due to trend volatility. Traditional buying decisions rely on intuition rather than data signals.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Prototype demand-sensing system correlating real-time fashion trends with historical sales to enable faster, data-driven assortment decisions.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Multi-signal correlation: social trends (Instagram, Pinterest), search intent (Google Trends), inventory levels, and cultural events. Pattern DNA logic for trend scoring.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">With Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">Built independently using Gemini Vision, Apify scrapers, Supabase, and n8n orchestration.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">Reduced Overstock Risk</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">Faster Assortment Decisions</span>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Prioritized <strong>correlated multi-signal confidence</strong> over single-source trend data for higher conviction buying.</p>
                    </div>
                </div>

                <!-- Trumee Project 3: Customer Acquisition & Retention -->
                <div class="project-card" style="border-left-color: #68D391;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-users"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Customer Acquisition & Retention</h3>
                                <p class="text-indigo-500">Data-Driven Growth & Lifecycle</p>
                            </div>
                        </div>
                        <div class="metric-badge" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">
                            <i class="fas fa-shopping-cart mr-2"></i>12% Cart Recovery
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Data-driven growth and lifecycle strategies across paid, email, and social channels exceeding industry benchmarks.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">D2C brands struggle with high CAC and low retention. Industry benchmarks for cart recovery are 8-10%.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Comprehensive growth system covering acquisition channels, abandoned cart recovery, and customer reactivation campaigns.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Built data-driven strategies across paid ads, email sequences, and social engagement. Segmented users by behavior for personalized outreach.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">With Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">Implemented using Shopify, email automation tools, Meta Ads, and analytics dashboards.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">12% Cart Recovery</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 100%);">7% Reactivation</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">Above Industry Avg</span>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Focused on <strong>retention before acquisition</strong> to maximize LTV before scaling spend.</p>
                    </div>
                </div>

                <!-- Trumee Project 4: Funnel & Marketing Automation -->
                <div class="project-card" style="border-left-color: #667EEA;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Funnel & Marketing Automation</h3>
                                <p class="text-indigo-500">GenAI-Powered Workflows</p>
                            </div>
                        </div>
                        <div class="metric-badge">
                            <i class="fas fa-bolt mr-2"></i>70% Faster Execution
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Generative AI automation for lifecycle communications and content workflows, dramatically reducing execution time.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Manual content creation and lifecycle messaging is time-consuming for solo founders. Needed to scale output without scaling team.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">GenAI-powered automation for email sequences, product descriptions, social content, and customer communications.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Applied generative AI (GPT, Claude) with custom prompts for brand voice. Built n8n workflows for automated content pipelines.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">With Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">Self-built using LLM APIs, n8n automation, and integration with Shopify and email platforms.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">70% Time Savings</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 100%);">Improved Conversion</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">Scalable Output</span>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Used GenAI as a <strong>force multiplier for solo operations</strong> rather than replacing human judgment.</p>
                    </div>
                </div>
            </div>

            <!-- AlphaSense Section -->
            <div class="company-header mb-6">
                <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <i class="fas fa-search-dollar text-xl"></i>
                </div>
                <div>
                    <h3 class="text-xl font-bold">AlphaSense</h3>
                    <p class="text-white/80 text-sm">Product Manager | B2B SaaS | 2023-2024</p>
                </div>
            </div>

            <div class="space-y-8 mb-12">
                <!-- AlphaSense Project 1: Client Analytics Platform -->
                <div class="project-card" style="border-left-color: #667EEA;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-chart-pie"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Client Analytics Platform</h3>
                                <p class="text-indigo-500">Customer-Facing Product</p>
                            </div>
                        </div>
                        <div class="metric-badge">
                            <i class="fas fa-dollar-sign mr-2"></i>$13.14M ARR Impact
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Helping enterprise customers understand product value, adoption, and ROI through transparent usage analytics.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Customers lacked visibility into how value was being realized. CS teams relied on manual data pulls. Renewal and expansion conversations were qualitative, not data-backed.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">End-to-end client-facing analytics platform exposing feature usage, engagement metrics, and actionable insights for Admins, Power Users, and Leadership.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Partnered with CS/Sales to map decision journeys. Designed "Insight Cards" to convert data → recommendations. Defined metric definitions aligned to customer outcomes.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">With Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">Customer Success & Sales (discovery), Data Engineering (instrumentation), Frontend & Backend Engineers, Leadership stakeholders.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">7+ Pilot Clients</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 100%);">~$13.14M ARR</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">Stronger Renewals</span>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Prioritized <strong>decision-driving insights</strong> over exhaustive analytics to ensure adoption.</p>
                    </div>
                </div>

                <!-- AlphaSense Project 2: Unified Analytics Platform -->
                <div class="project-card" style="border-left-color: #9F7AEA;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-database"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Unified Real-Time Analytics Platform</h3>
                                <p class="text-indigo-500">Legacy → Event-Driven System</p>
                            </div>
                        </div>
                        <div class="metric-badge">
                            <i class="fas fa-bolt mr-2"></i>3M Events/Day
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Replacing fragile legacy analytics with a scalable, trusted real-time system for 20+ teams.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Legacy system was batch-driven, slow, and failed at scale. Data leakage and missing datapoints created low trust. ~3M events/day with ~30% MoM growth made reliability a business risk.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Led product transition to real-time, event-driven analytics supporting high-volume ingestion, data quality, and near real-time decision-making.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Defined requirements for event ingestion, validation & schema consistency. Introduced data contracts. Balanced latency vs accuracy vs scalability. Standardized KPIs.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">With Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">Data Engineering, Platform & Infra teams, Product & Engineering consumers, Leadership for migration planning.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">~3M Events/Day</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">60% Error Reduction</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">20+ Teams Enabled</span>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Chose <strong>data trust over speed</strong> initially to restore confidence in analytics.</p>
                    </div>
                </div>

                <!-- AlphaSense Project 3: BI Chatbot -->
                <div class="project-card" style="border-left-color: #68D391;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">BI Chatbot for Internal Analytics</h3>
                                <p class="text-indigo-500">Self-Serve Analytics Enablement</p>
                            </div>
                        </div>
                        <div class="metric-badge">
                            <i class="fas fa-clock mr-2"></i>2 Days → Hours
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Reducing analyst dependency via conversational UX for natural language data queries.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Teams repeatedly depended on analysts for SQL queries, metric clarifications, and recurring questions. This slowed decisions and overloaded the analytics team.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Conversational BI chatbot enabling non-technical teams to query data using natural language with Dialogflow integration.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Identified high-frequency queries. Designed conversational flows, fallbacks, and clarification states. Improved intent accuracy from ~72% → ~88%.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">With Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">Analytics team, Data Engineering, Backend Engineers, Business stakeholders.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">~2 Days Response ↓</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 100%);">72%→88% Accuracy</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">30-40% Requests ↓</span>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Designed conservative fallbacks to favor <strong>accuracy over speed</strong>.</p>
                    </div>
                </div>

                <!-- AlphaSense Project 4: NPS Infrastructure -->
                <div class="project-card" style="border-left-color: #F6AD7B;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-star"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">NPS Infrastructure Optimization</h3>
                                <p class="text-indigo-500">Feedback Signal Quality</p>
                            </div>
                        </div>
                        <div class="metric-badge">
                            <i class="fas fa-arrow-up mr-2"></i>6% Response ↑
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Improving feedback signal quality in enterprise SaaS through better survey infrastructure.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Existing NPS setup had low response rates, poor segmentation, and limited actionability for product decisions.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Redesigned NPS collection and analytics infrastructure to improve signal quality and downstream usability.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">~6% Response ↑ in 3.5mo</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">Better Segmentation</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Amazon Section -->
            <div class="company-header amazon mb-6">
                <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <i class="fab fa-amazon text-xl"></i>
                </div>
                <div>
                    <h3 class="text-xl font-bold">Amazon</h3>
                    <p class="text-white/80 text-sm">Product Manager | Marketplace Scale | 2022-2023</p>
                </div>
            </div>

            <div class="space-y-8 mb-12">
                <!-- Amazon Project 1: Catalog Deduplication -->
                <div class="project-card" style="border-left-color: #FF9900;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-clone"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Catalog Deduplication (NLP + CV)</h3>
                                <p class="text-indigo-500">ML-Assisted Automation</p>
                            </div>
                        </div>
                        <div class="metric-badge" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">
                            <i class="fas fa-dollar-sign mr-2"></i>$4M QoQ GMS
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Improving catalog quality and discoverability at marketplace scale using ML-assisted deduplication.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Duplicate SKUs degraded CX, fragmented reviews, and created merchandising inefficiencies. Manual review was slow, error-prone, and couldn't scale.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">End-to-end automated deduplication using NLP + Computer Vision with confidence-based automation and human-in-the-loop for low-confidence cases.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Combined image similarity (CNN embeddings), text similarity (cosine), and confidence scoring. Built review workflow for approve/reject/merge decisions.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">With Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">ML Engineers, Catalog Operations, Platform Engineers, Business stakeholders.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">7× Scale (13K→90K)</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">7 Days → 1 Day</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 100%);">5%→2% Error Rate</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">~$4M QoQ GMS</span>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Chose <strong>confidence-based automation with human oversight</strong> to avoid costly false positives while achieving scale.</p>
                    </div>
                </div>

                <!-- Amazon Project 2: Defect Removal Automation -->
                <div class="project-card" style="border-left-color: #48BB78;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-check-double"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Defect Removal Automation</h3>
                                <p class="text-indigo-500">Buyability & Discoverability</p>
                            </div>
                        </div>
                        <div class="metric-badge" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">
                            <i class="fas fa-dollar-sign mr-2"></i>$20M GMS / 6mo
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Improving buyability and discoverability of SKUs through automated defect-resolution workflows.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Significant SKUs were delisted due to catalog defects, still commercially viable, but invisible to customers due to manual resolution delays → lost sales and poor seller experience.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Automated defect-resolution workflows that identify eligible SKUs, resolve common defect patterns, and restore buyability at scale.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Identified high-frequency defect categories. Designed 3 automated workflows: detection → validation → resolution. Built safeguards for incorrect reinstatements.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">With Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">Catalog Ops teams, Platform & tooling engineers, Seller experience stakeholders.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">~$20M GMS / 6mo</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 100%);">4× Scaled</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">3 Workflows</span>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Focused on <strong>high-confidence defect categories first</strong> to maximize impact while controlling risk.</p>
                    </div>
                </div>

                <!-- Amazon Project 3: A/B Testing Lookbook -->
                <div class="project-card" style="border-left-color: #90CDF4;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-300 to-cyan-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-flask"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">A/B Testing for Physical Lookbook</h3>
                                <p class="text-indigo-500">Offline Marketing Optimization</p>
                            </div>
                        </div>
                        <div class="metric-badge" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">
                            <i class="fas fa-piggy-bank mr-2"></i>$5M Savings
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Optimizing offline marketing efficiency using experimentation and household-level deduplication.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Physical lookbook campaigns had high printing/distribution costs, risked waste from duplicate recipients, and lacked precise household-level targeting.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">A/B testing framework with household-level deduplication to measure incremental lift and optimize campaign reach and ROI.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Built deduplication algorithm for household-level targeting. Created test vs control cohorts. Tracked incremental conversions and sales uplift.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">With Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">Marketing teams, Data science & analytics, Campaign operations, Finance stakeholders.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">$5M Cost Savings</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">50% YoY Sales ↑</span>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Balanced <strong>cost efficiency with conversion impact</strong>, ensuring savings did not erode business outcomes.</p>
                    </div>
                </div>
            </div>

            <!-- RBL Bank Section -->
            <div class="company-header rbl mb-6">
                <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <i class="fas fa-university text-xl"></i>
                </div>
                <div>
                    <h3 class="text-xl font-bold">RBL Bank</h3>
                    <p class="text-white/80 text-sm">Product Manager - Analytics & Growth (AVP) | 2020-2022</p>
                </div>
            </div>

            <div class="space-y-8">
                <!-- RBL Project 1: Leads Management -->
                <div class="project-card" style="border-left-color: #48BB78;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-funnel-dollar"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Leads Management Module</h3>
                                <p class="text-indigo-500">Contact Center Optimization</p>
                            </div>
                        </div>
                        <div class="metric-badge" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">
                            <i class="fas fa-arrow-up mr-2"></i>5% Conversion ↑
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Real-time leads management enabling unified leads, prioritization, and improved agent productivity.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Sales conversion limited by delayed lead visibility, manual prioritization, and fragmented systems across channels.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Real-time leads management module unifying leads across channels with prioritization based on intent and eligibility.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Defined end-to-end lead lifecycle (capture → assignment → conversion). Designed agent workflows and escalation states. Integrated conversion analytics.</p>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Prioritized <strong>speed and clarity for agents</strong> over complex scoring models in early phases.</p>
                    </div>
                </div>

                <!-- RBL Project 2: Marketing Analytics Automation -->
                <div class="project-card" style="border-left-color: #667EEA;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Marketing Analytics Automation</h3>
                                <p class="text-indigo-500">Campaign Performance Tracking</p>
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">End-to-end marketing analytics framework for campaign lifecycle tracking and attribution.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Campaign performance tracking was manual, delayed, inconsistent across channels, and difficult to attribute to outcomes.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Automated analytics framework covering campaign lifecycle, attribution to customer metrics, and self-serve dashboards.</p>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Focused on <strong>actionable metrics</strong> instead of exhaustive reporting.</p>
                    </div>
                </div>

                <!-- RBL Project 3: Pre-Approved Credit Card -->
                <div class="project-card" style="border-left-color: #F6AD7B;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-credit-card"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Pre-Approved Credit Card Journey</h3>
                                <p class="text-indigo-500">Digital Channel Integration</p>
                            </div>
                        </div>
                        <div class="metric-badge" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">
                            <i class="fas fa-arrow-up mr-2"></i>0.65% Conversion ↑
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Segmentation-driven pre-approved credit card journey integrated across digital channels.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Pre-approved offers had suboptimal targeting and low conversion despite eligibility.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Defined eligibility and segmentation logic. Designed customer flows from offer → application → approval. Integrated backend decisioning.</p>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Optimized for <strong>low-friction user experience</strong> over aggressive upsell.</p>
                    </div>
                </div>

                <!-- RBL Project 4: WhatsApp Channel -->
                <div class="project-card" style="border-left-color: #48BB78;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xl">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">WhatsApp Channel Adoption</h3>
                                <p class="text-indigo-500">Predictive Targeting</p>
                            </div>
                        </div>
                        <div class="metric-badge" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">
                            <i class="fas fa-arrow-up mr-2"></i>3.5% QoQ ↑
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Driving WhatsApp adoption as a core engagement channel using ensemble classification models.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">WhatsApp was underutilized as a customer communication channel despite high reach.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Designed ensemble classification model to identify likely adopters. Integrated WhatsApp into existing workflows. Coordinated cross-team rollout.</p>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Used <strong>model-assisted targeting</strong> rather than blanket outreach to protect CX.</p>
                    </div>
                </div>

                <!-- RBL Project 5: Personalized Offers -->
                <div class="project-card" style="border-left-color: #9F7AEA;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-gift"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Personalized Offers & Experimentation</h3>
                                <p class="text-indigo-500">RFM Modeling & A/B Testing</p>
                            </div>
                        </div>
                        <div class="metric-badge" style="background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 100%);">
                            <i class="fas fa-piggy-bank mr-2"></i>$100K+ Savings
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Personalized offer strategies using RFM modeling and controlled A/B testing for vouchers.</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Generic offers led to low engagement and wasted incentive spend.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Built RFM-based segments. Designed experiments to measure incremental lift. Selected optimal voucher strategies based on ROI.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">2.5% Spending ↑</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">$100K Voucher Savings</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">$0.23M Annual Savings</span>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Balanced <strong>personalization depth</strong> with <strong>operational simplicity</strong>.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- AI Projects Section -->
        <section id="ai-projects" class="tab-content">
            <div class="flex items-center gap-4 mb-4">
                <h2 class="text-3xl font-bold text-gray-800">AI Projects</h2>
                <svg class="section-illustration" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="75" cy="50" r="35" fill="#E9D8FD"/>
                    <circle cx="75" cy="50" r="20" fill="#667EEA"/>
                    <circle cx="75" cy="50" r="8" fill="white"/>
                    <path d="M50 85 L75 70 L100 85" stroke="#9F7AEA" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="50" cy="85" r="6" fill="#9AE6B4"/>
                    <circle cx="100" cy="85" r="6" fill="#F6AD7B"/>
                </svg>
            </div>
            <p class="text-gray-600 mb-8 max-w-3xl">End-to-end AI product ownership — from problem framing to system design, evaluation, and iteration in production-like environments.</p>

            <div class="space-y-8">
                
                <!-- AI Project 1: EdTech Learning App -->
                <div class="ai-card" style="border-left-color: #667EEA;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">AI Learning Assistant for K-12 Education</h3>
                                <p class="text-indigo-500">EdTech | GenAI | Multimodal AI</p>
                            </div>
                        </div>
                        <span class="status-badge active"><i class="fas fa-check-circle mr-1"></i>Completed</span>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Personalized explanations, voice delivery, and curriculum-aligned learning using GenAI</p>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="tech-pill"><i class="fas fa-robot mr-1"></i>LLMs</span>
                        <span class="tech-pill"><i class="fas fa-database mr-1"></i>RAG</span>
                        <span class="tech-pill"><i class="fas fa-volume-up mr-1"></i>TTS</span>
                        <span class="tech-pill"><i class="fas fa-language mr-1"></i>Multilingual</span>
                        <span class="tech-pill"><i class="fas fa-project-diagram mr-1"></i>n8n</span>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Traditional EdTech struggles with one-size-fits-all explanations, language barriers, high video costs, and poor engagement.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">AI assistant generating adaptive explanations via LLMs, grounded in curriculum via RAG, with multilingual TTS delivery.</p>
                        </div>
                    </div>
                    
                    <div class="architecture-block mt-6">
                        <div class="flex items-center gap-2 mb-3">
                            <i class="fas fa-sitemap text-indigo-500"></i>
                            <span class="font-semibold text-gray-700">System Architecture</span>
                        </div>
                        <div class="grid md:grid-cols-3 gap-4">
                            <div class="bg-white p-3 rounded-lg">
                                <div class="text-xs font-semibold text-indigo-500 mb-1">Content Layer</div>
                                <p class="text-xs text-gray-600">Structured curriculum as modular chunks for retrieval</p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                                <div class="text-xs font-semibold text-purple-500 mb-1">LLM Layer</div>
                                <p class="text-xs text-gray-600">Layered prompts (system, concept, learner) + RAG grounding</p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                                <div class="text-xs font-semibold text-green-500 mb-1">Voice Layer</div>
                                <p class="text-xs text-gray-600">TTS pipeline for scalable multilingual audio</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">AI PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Chose <strong>RAG + prompting</strong> over fine-tuning to maximize iteration speed and control costs.</p>
                    </div>
                </div>

                <!-- AI Project 2: SORTED App -->
                <div class="ai-card" style="border-left-color: #F6AD7B;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">SORTED — AI-First Learning Companion</h3>
                                <p class="text-indigo-500">EdTech | Agent Systems | Personalization</p>
                            </div>
                        </div>
                        <span class="status-badge progress"><i class="fas fa-spinner mr-1"></i>In Progress</span>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Helping learners build AI skills through guided journeys and hands-on practice</p>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="tech-pill"><i class="fas fa-users-cog mr-1"></i>Multi-Agent</span>
                        <span class="tech-pill"><i class="fas fa-brain mr-1"></i>LangGraph</span>
                        <span class="tech-pill"><i class="fas fa-memory mr-1"></i>Memory Layer</span>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">AI learning is fragmented: tools-first, no structured progression, low retention after tutorials.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">AI-native app with progressive paths, agent-based mentors/reviewers, and dynamic difficulty adaptation.</p>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">AI PM Focus</span>
                        </div>
                        <p class="text-gray-600 text-sm">Designing <strong>learning systems</strong>, not just AI features.</p>
                    </div>
                </div>

                <!-- AI Project 3: TrendRadar -->
                <div class="ai-card" style="border-left-color: #9F7AEA;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">TrendRadar — Fashion Trend Intelligence</h3>
                                <p class="text-indigo-500">Retail | AI | Demand Sensing</p>
                            </div>
                        </div>
                        <span class="status-badge active"><i class="fas fa-check-circle mr-1"></i>Active</span>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Identifying high-conviction fashion trends before mass adoption using multi-signal correlation</p>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="tech-pill"><i class="fas fa-eye mr-1"></i>Gemini Vision</span>
                        <span class="tech-pill"><i class="fas fa-spider mr-1"></i>Apify</span>
                        <span class="tech-pill"><i class="fas fa-database mr-1"></i>Supabase</span>
                        <span class="tech-pill"><i class="fas fa-project-diagram mr-1"></i>n8n</span>
                    </div>
                    
                    <div class="architecture-block mt-4">
                        <div class="flex items-center gap-2 mb-3">
                            <i class="fas fa-layer-group text-purple-500"></i>
                            <span class="font-semibold text-gray-700">Signal Correlation Strategy</span>
                        </div>
                        <div class="grid md:grid-cols-4 gap-3">
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-heart text-pink-400 mb-1"></i>
                                <div class="text-xs font-semibold">Social (Spark)</div>
                            </div>
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-search text-blue-400 mb-1"></i>
                                <div class="text-xs font-semibold">Search (Intent)</div>
                            </div>
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-boxes text-green-400 mb-1"></i>
                                <div class="text-xs font-semibold">Inventory (Reality)</div>
                            </div>
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-film text-orange-400 mb-1"></i>
                                <div class="text-xs font-semibold">Culture (Multiplier)</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">AI PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Prioritized <strong>correlated confidence</strong> over raw volume for higher conviction.</p>
                    </div>
                </div>

                <!-- AI Project 4: Stock Market Analysis -->
                <div class="ai-card" style="border-left-color: #68D391;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Multi-Agent Stock Market Analysis</h3>
                                <p class="text-indigo-500">FinTech | CrewAI | Agent Systems</p>
                            </div>
                        </div>
                        <span class="status-badge active"><i class="fas fa-check-circle mr-1"></i>Completed</span>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Collaborative AI agents for market research and signal synthesis</p>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="tech-pill"><i class="fas fa-users-cog mr-1"></i>CrewAI</span>
                        <span class="tech-pill"><i class="fab fa-python mr-1"></i>Python</span>
                        <span class="tech-pill"><i class="fas fa-chart-line mr-1"></i>Financial APIs</span>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">AI PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Used agents to <strong>simulate analyst diversity</strong>, not to chase prediction accuracy.</p>
                    </div>
                </div>

                <!-- AI Project 5: BI Agent -->
                <div class="ai-card" style="border-left-color: #90CDF4;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-database"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">BI Agent using LangGraph</h3>
                                <p class="text-indigo-500">Analytics | LangGraph | Agent Workflows</p>
                            </div>
                        </div>
                        <span class="status-badge active"><i class="fas fa-check-circle mr-1"></i>Completed</span>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Automating analytics queries via stateful agent workflows</p>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="tech-pill"><i class="fas fa-project-diagram mr-1"></i>LangGraph</span>
                        <span class="tech-pill"><i class="fab fa-python mr-1"></i>Python</span>
                        <span class="tech-pill"><i class="fas fa-database mr-1"></i>SQL</span>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">AI PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Chose <strong>agent orchestration</strong> over monolithic prompts to improve reliability.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="tab-content">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="text-3xl font-bold text-gray-800">Skills & Expertise</h2>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-500 text-xl">
                            <i class="fas fa-chess"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800">Product & Strategy</h3>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span class="skill-tag">Market Research</span>
                        <span class="skill-tag">UX Design</span>
                        <span class="skill-tag">Product Roadmap</span>
                        <span class="skill-tag">GTM Strategy</span>
                        <span class="skill-tag">A/B Testing</span>
                        <span class="skill-tag">User Analytics</span>
                        <span class="skill-tag">PRD Writing</span>
                    </div>
                </div>

                <div class="bg-white p-8 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-500 text-xl">
                            <i class="fas fa-robot"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800">AI & Technology</h3>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span class="skill-tag">Generative AI</span>
                        <span class="skill-tag">LLMs</span>
                        <span class="skill-tag">RAG Systems</span>
                        <span class="skill-tag">NLP</span>
                        <span class="skill-tag">Computer Vision</span>
                        <span class="skill-tag">Multi-Agent Systems</span>
                        <span class="skill-tag">LangGraph</span>
                        <span class="skill-tag">CrewAI</span>
                    </div>
                </div>

                <div class="bg-white p-8 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-500 text-xl">
                            <i class="fas fa-code"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800">Technical Skills</h3>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">SQL</span>
                        <span class="skill-tag">AWS</span>
                        <span class="skill-tag">GCP</span>
                        <span class="skill-tag">BigQuery</span>
                        <span class="skill-tag">N8N</span>
                        <span class="skill-tag">Supabase</span>
                    </div>
                </div>

                <div class="bg-white p-8 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 text-xl">
                            <i class="fas fa-tools"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800">Tools & Platforms</h3>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span class="skill-tag">Pendo</span>
                        <span class="skill-tag">JIRA</span>
                        <span class="skill-tag">Salesforce</span>
                        <span class="skill-tag">Tableau</span>
                        <span class="skill-tag">Figma</span>
                        <span class="skill-tag">Shopify</span>
                        <span class="skill-tag">Dialogflow</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education Section -->
        <section id="education" class="tab-content">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="text-3xl font-bold text-gray-800">Education & Certifications</h2>
            </div>

            <h3 class="text-xl font-bold text-gray-800 mb-6">Education</h3>
            <div class="grid md:grid-cols-3 gap-6 mb-12">
                <div class="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-indigo-400">
                    <h4 class="font-bold text-gray-800">Indian School of Business</h4>
                    <p class="text-sm text-gray-500 mb-2">2019 - 2020</p>
                    <p class="text-indigo-500 font-medium">PGP in IT & Marketing</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-purple-400">
                    <h4 class="font-bold text-gray-800">IIIT Bangalore</h4>
                    <p class="text-sm text-gray-500 mb-2">2020 - 2021</p>
                    <p class="text-purple-500 font-medium">PG Diploma - Data Science & ML</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-400">
                    <h4 class="font-bold text-gray-800">VIT University</h4>
                    <p class="text-sm text-gray-500 mb-2">2008 - 2012</p>
                    <p class="text-orange-500 font-medium">Bachelor of Technology</p>
                </div>
            </div>

            <h3 class="text-xl font-bold text-gray-800 mb-6">Certifications</h3>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
                    <h4 class="font-bold text-gray-800">AI Generalist Bootcamp</h4>
                    <p class="text-indigo-500 text-sm">Outskill | 2025</p>
                </div>
                <div class="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl">
                    <h4 class="font-bold text-gray-800">AI & Machine Learning Program</h4>
                    <p class="text-green-500 text-sm">Scaler | 2024-2025</p>
                </div>
                <div class="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl">
                    <h4 class="font-bold text-gray-800">Product Management Certification</h4>
                    <p class="text-orange-500 text-sm">Duke + UpGrad | 2019-2020</p>
                </div>
                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
                    <h4 class="font-bold text-gray-800">AI Product Consulting</h4>
                    <p class="text-blue-500 text-sm">HLSR Technologies | 2025</p>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="tab-content">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Let's Connect</h2>
                <p class="text-gray-600 text-lg mb-8">I'm always interested in discussing new opportunities, collaborations, or just connecting with fellow product enthusiasts.</p>
                
                <div class="bg-white p-8 rounded-2xl shadow-sm mb-8">
                    <div class="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a href="mailto:pmagica22@gmail.com" class="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all">
                            <i class="fas fa-envelope text-xl"></i>
                            <span class="font-medium">pmagica22@gmail.com</span>
                        </a>
                        <a href="tel:+919986950695" class="flex items-center gap-3 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all">
                            <i class="fas fa-phone text-xl"></i>
                            <span class="font-medium">+91 9986950695</span>
                        </a>
                    </div>
                </div>

                <div class="flex justify-center gap-4">
                    <a href="https://linkedin.com/in/agrawal-preeti" target="_blank" class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-xl">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/preeti-mlverse" target="_blank" class="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white transition-all text-xl">
                        <i class="fab fa-github"></i>
                    </a>
                </div>

                <div class="mt-12 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Open to Opportunities</h3>
                    <p class="text-gray-600">Looking for Product Leadership roles in AI-first companies, SaaS, or FinTech where I can drive growth through data-driven products and intelligent automation.</p>
                </div>
            </div>
        </section>

    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-100 mt-16 py-8 bg-white/50">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <p class="text-gray-500 text-sm">Designed & Built by Preeti Agrawal · 2024</p>
        </div>
    </footer>

    <script>
        function switchTab(tabId) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            const tabBtn = document.querySelector(\`[data-tab="\${tabId}"]\`);
            const tabContent = document.getElementById(tabId);
            
            if (tabBtn) tabBtn.classList.add('active');
            if (tabContent) tabContent.classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                switchTab(btn.dataset.tab);
            });
        });
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.timeline-content, .project-card, .ai-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    </script>
</body>
</html>
`

app.get('/', (c) => {
  return c.html(portfolioHTML)
})

app.get('/api/profile', (c) => {
  return c.json({
    name: 'Preeti Agrawal',
    title: 'Product Leader',
    specialization: 'AI & Analytics',
    experience: '10+ years',
    industries: ['E-commerce', 'D2C', 'SaaS', 'FinTech'],
    contact: {
      email: 'pmagica22@gmail.com',
      phone: '+919986950695',
      linkedin: 'https://linkedin.com/in/agrawal-preeti',
      github: 'https://github.com/preeti-mlverse'
    }
  })
})

export default app

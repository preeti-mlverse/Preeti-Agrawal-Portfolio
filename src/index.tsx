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
                        <!-- Desk/workspace illustration -->
                        <rect x="80" y="180" width="240" height="120" rx="8" fill="#E2E8F0"/>
                        <rect x="100" y="195" width="140" height="90" rx="6" fill="#667EEA"/>
                        <rect x="110" y="205" width="120" height="70" rx="4" fill="#EDF2F7"/>
                        <!-- Chart on screen -->
                        <path d="M125 255 L145 235 L165 245 L185 220 L205 230" stroke="#9F7AEA" stroke-width="3" stroke-linecap="round"/>
                        <circle cx="125" cy="255" r="3" fill="#9F7AEA"/>
                        <circle cx="145" cy="235" r="3" fill="#9F7AEA"/>
                        <circle cx="165" cy="245" r="3" fill="#9F7AEA"/>
                        <circle cx="185" cy="220" r="3" fill="#9F7AEA"/>
                        <circle cx="205" cy="230" r="3" fill="#9F7AEA"/>
                        <!-- Person -->
                        <circle cx="280" cy="140" r="35" fill="#FED7AA"/>
                        <ellipse cx="280" cy="220" rx="40" ry="50" fill="#667EEA"/>
                        <!-- Hair -->
                        <path d="M245 130 Q250 90 280 85 Q310 90 315 130 Q310 120 280 115 Q250 120 245 130" fill="#4A5568"/>
                        <!-- Coffee mug -->
                        <rect x="260" y="240" width="25" height="30" rx="4" fill="#F6AD7B"/>
                        <ellipse cx="272" cy="240" rx="12" ry="4" fill="#FEEBC8"/>
                        <!-- Plants -->
                        <rect x="320" y="230" width="20" height="35" rx="4" fill="#C6F6D5"/>
                        <circle cx="330" cy="215" r="15" fill="#9AE6B4"/>
                        <circle cx="322" cy="210" r="10" fill="#68D391"/>
                        <circle cx="338" cy="210" r="10" fill="#68D391"/>
                        <!-- Floating data elements -->
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
                        <p class="text-gray-600 text-sm mb-3">Founded an AI-enabled D2C women's fashion brand to validate AI-driven demand and inventory solutions after AlphaSense layoffs.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">Full P&L Ownership</span>
                            <span class="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">AI/ML</span>
                            <span class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">E-commerce</span>
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
                        <p class="text-gray-600 text-sm mb-3">Led Client Analytics Platform development with $13.14M projected ARR impact. Built E2E analytics infrastructure serving 20+ teams.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">$13.14M ARR</span>
                            <span class="text-xs px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Analytics</span>
                            <span class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">BI Chatbot</span>
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
                        <p class="text-gray-600 text-sm mb-3">Automated catalog duplication detection using NLP/CV. Drove $29M+ in combined business value through multiple ML initiatives.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">$29M+ GMS</span>
                            <span class="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">NLP/CV</span>
                            <span class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Automation</span>
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
                                <h3 class="text-lg font-bold text-gray-800">Product Manager - Analytics & Growth (AVP)</h3>
                                <p class="text-indigo-500 font-medium">RBL Bank (FinTech)</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Led growth initiatives including leads management, WhatsApp channel integration, and RFM segmentation. Saved $100K via A/B testing.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">5% Conversion ↑</span>
                            <span class="text-xs px-3 py-1 bg-orange-100 text-orange-700 rounded-full">WhatsApp</span>
                            <span class="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">RFM Model</span>
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
                        <p class="text-gray-600 text-sm mb-3">Post Graduate Programme in Information Technology & Marketing. Transitioned from QA Engineering to Product Management.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">IT & Marketing</span>
                            <span class="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Career Pivot</span>
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
                        <p class="text-gray-600 text-sm mb-3">Built automation frameworks for FBA supply chain. Delivered tools generating ~$34M in cost savings.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">$34M Savings</span>
                            <span class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Automation</span>
                        </div>
                    </div>
                </div>

                <!-- Commonfloor -->
                <div class="timeline-item">
                    <div class="timeline-content">
                        <span class="timeline-year">2013 - 2017</span>
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white">
                                <i class="fas fa-building"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800">QA Engineer</h3>
                                <p class="text-indigo-500 font-medium">Commonfloor (Real Estate Tech)</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Led UI and service-level automation. Partnered on Quikr's New Cars integration and owned regression testing.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Test Automation</span>
                            <span class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Quikr Integration</span>
                        </div>
                    </div>
                    <div class="timeline-dot"></div>
                    <div class="w-[45%]"></div>
                </div>

                <!-- Cognizant -->
                <div class="timeline-item">
                    <div class="w-[45%]"></div>
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-year">2012 - 2013</span>
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white">
                                <i class="fas fa-code"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800">Programmer Analyst</h3>
                                <p class="text-indigo-500 font-medium">Cognizant</p>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Led QA for telecom projects at Cox Communications. Started career in enterprise software development.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Telecom</span>
                            <span class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">HP QTP</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="tab-content">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="text-3xl font-bold text-gray-800">Featured Projects</h2>
                <svg class="section-illustration" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="30" width="50" height="60" rx="6" fill="#E9D8FD"/>
                    <rect x="30" y="40" width="30" height="4" rx="2" fill="#667EEA"/>
                    <rect x="30" y="50" width="25" height="4" rx="2" fill="#9F7AEA"/>
                    <rect x="30" y="60" width="20" height="4" rx="2" fill="#C4B5FD"/>
                    <rect x="80" y="20" width="50" height="70" rx="6" fill="#C6F6D5"/>
                    <circle cx="105" cy="45" r="15" fill="#9AE6B4"/>
                    <path d="M100 45 L105 50 L115 40" stroke="#38A169" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="90" y="65" width="30" height="4" rx="2" fill="#68D391"/>
                </svg>
            </div>

            <div class="space-y-8">
                <!-- Project 1: TrendRadar -->
                <div class="project-card" style="border-left-color: #9F7AEA;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-chart-area"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">TrendRadar - Demand Sensing Platform</h3>
                                <p class="text-indigo-500">Trumee | 2024</p>
                            </div>
                        </div>
                        <div class="metric-badge">
                            <i class="fas fa-arrow-down mr-2"></i>15% Deadstock ↓
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Fashion inventory is notoriously difficult to predict, leading to deadstock and missed opportunities. Needed a data-driven approach to reduce waste and optimize purchasing.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">AI-powered demand sensing tool that analyzes fashion trends from social media, sales data, and market signals to predict inventory needs 2-4 weeks ahead.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">For Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">D2C fashion brands, inventory managers, and merchandising teams looking to optimize stock levels and reduce capital locked in unsold inventory.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Built using Python, ML models for time-series forecasting, social media trend APIs, and integrated with Shopify for real-time inventory updates.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-chart-bar text-indigo-400"></i>
                            <span class="font-semibold text-gray-700">Impact & Metrics</span>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">15% Deadstock Reduction</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">12% Operational Cost ↓</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">70% Faster Execution</span>
                        </div>
                    </div>
                </div>

                <!-- Project 2: Client Analytics Platform -->
                <div class="project-card" style="border-left-color: #667EEA;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-chart-pie"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Client Analytics Platform</h3>
                                <p class="text-indigo-500">AlphaSense | 2023-2024</p>
                            </div>
                        </div>
                        <div class="metric-badge">
                            <i class="fas fa-dollar-sign mr-2"></i>$13.14M ARR Impact
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Enterprise clients needed deeper insights into their usage patterns and ROI. The sales and CS teams were making decisions without proper data, leading to churn and missed upsell opportunities.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Comprehensive analytics platform providing client health scores, usage analytics, engagement metrics, and predictive churn indicators for enterprise SaaS customers.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">For Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">20+ internal teams including Sales, Customer Success, Product, and Executive leadership. Also powered external-facing client dashboards.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Built E2E data pipeline using BigQuery, implemented Google Dialogflow BI chatbot for self-service analytics, and created Tableau dashboards with real-time metrics.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-chart-bar text-indigo-400"></i>
                            <span class="font-semibold text-gray-700">Impact & Metrics</span>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">$13.14M Projected ARR</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 100%);">60% Error Reduction</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">2 Days Response Time ↓</span>
                        </div>
                    </div>
                </div>

                <!-- Project 3: Catalog Duplication Detection -->
                <div class="project-card" style="border-left-color: #F6AD7B;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-xl">
                                <i class="fab fa-amazon"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Catalog Duplication Detection (NLP/CV)</h3>
                                <p class="text-indigo-500">Amazon | 2022-2023</p>
                            </div>
                        </div>
                        <div class="metric-badge">
                            <i class="fas fa-plus mr-2"></i>$4M GMS Added
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Duplicate product listings created poor customer experience, diluted search results, and led to inventory inaccuracies. Manual detection was slow and error-prone with 5% error rate.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Automated ML system using NLP for text matching and Computer Vision for image similarity to detect and merge duplicate product listings at scale.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">For Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">Amazon Catalog team, sellers managing large inventories, and ultimately millions of customers who benefit from cleaner search results and accurate product information.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Implemented NLP models for title/description similarity, CV models for product image matching, and created a confidence scoring system for automated vs. manual review routing.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-chart-bar text-indigo-400"></i>
                            <span class="font-semibold text-gray-700">Impact & Metrics</span>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">Error Rate: 5% → 2%</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">$4M GMS Added</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #E9D8FD 0%, #C4B5FD 100%);">Automated Detection</span>
                        </div>
                    </div>
                </div>

                <!-- Project 4: SKU Recycling System -->
                <div class="project-card" style="border-left-color: #68D391;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-recycle"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">SKU Recycling System</h3>
                                <p class="text-indigo-500">Amazon | 2022-2023</p>
                            </div>
                        </div>
                        <div class="metric-badge">
                            <i class="fas fa-dollar-sign mr-2"></i>$20M GMS Value
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Discontinued SKUs with valuable search rankings and customer reviews were being lost. New listings had to build credibility from scratch, wasting existing customer trust.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Intelligent system to identify high-value discontinued SKUs and recycle them for similar new products, preserving SEO value, reviews, and customer trust.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">For Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">Sellers launching new products, Amazon category managers, and customers who benefit from accurate product history and trusted reviews.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Built SKU value scoring algorithm, product similarity matching, and automated workflow for SKU reassignment with proper audit trails.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-chart-bar text-indigo-400"></i>
                            <span class="font-semibold text-gray-700">Impact & Metrics</span>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">$20M GMS Preserved</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">Reviews Retained</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">SEO Value Preserved</span>
                        </div>
                    </div>
                </div>

                <!-- Project 5: Leads Management Module -->
                <div class="project-card" style="border-left-color: #9AE6B4;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-funnel-dollar"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">Leads Management & Conversion System</h3>
                                <p class="text-indigo-500">RBL Bank | 2020-2022</p>
                            </div>
                        </div>
                        <div class="metric-badge">
                            <i class="fas fa-arrow-up mr-2"></i>5% Conversion ↑
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Banking leads were being lost due to poor tracking, inconsistent follow-ups, and lack of channel optimization. Sales teams needed better tools to convert prospects.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Comprehensive leads management system with scoring, automated routing, multi-channel tracking (including WhatsApp), and conversion analytics.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-users text-blue-400"></i>
                                <span class="font-semibold text-gray-700">For Whom</span>
                            </div>
                            <p class="text-gray-600 text-sm">RBL Bank sales teams, relationship managers, and marketing teams responsible for customer acquisition and retention.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-cogs text-green-400"></i>
                                <span class="font-semibold text-gray-700">How</span>
                            </div>
                            <p class="text-gray-600 text-sm">Built lead scoring model, integrated WhatsApp Business API (3.5% adoption increase), implemented RFM segmentation for debit cards, and created A/B testing framework.</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-chart-bar text-indigo-400"></i>
                            <span class="font-semibold text-gray-700">Impact & Metrics</span>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #C6F6D5 0%, #9AE6B4 100%);">5% Conversion Increase</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #BEE3F8 0%, #90CDF4 100%);">3.5% WhatsApp Adoption</span>
                            <span class="metric-badge text-sm" style="background: linear-gradient(135deg, #FED7AA 0%, #F6AD7B 100%);">$100K A/B Test Savings</span>
                        </div>
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
                        <div class="flex gap-2">
                            <span class="status-badge active"><i class="fas fa-check-circle mr-1"></i>Completed</span>
                        </div>
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
                            <p class="text-gray-600 text-sm">Traditional EdTech platforms struggle with one-size-fits-all explanations, language barriers, high cost of video-based content, and poor engagement for conceptual subjects.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">AI-powered learning assistant that generates adaptive explanations using LLMs, grounds responses in curriculum content via RAG, and converts to natural-sounding multilingual speech.</p>
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
                                <p class="text-xs text-gray-600">Structured curriculum content stored as modular chunks for retrieval</p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                                <div class="text-xs font-semibold text-purple-500 mb-1">LLM Layer</div>
                                <p class="text-xs text-gray-600">Layered prompts (system, concept, learner context) + RAG for factual grounding</p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                                <div class="text-xs font-semibold text-green-500 mb-1">Voice Layer</div>
                                <p class="text-xs text-gray-600">TTS pipeline for scalable multilingual audio delivery</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-tasks text-indigo-400"></i>
                            <span class="font-semibold text-gray-700">Evaluation & Metrics</span>
                        </div>
                        <div class="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <span class="text-gray-500">LLM Eval:</span>
                                <span class="text-gray-700"> Accuracy, hallucination rate, coherence</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Pedagogy:</span>
                                <span class="text-gray-700"> Concept coverage, grade-appropriateness</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Voice:</span>
                                <span class="text-gray-700"> Latency, pronunciation, comprehension</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">AI PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Chose <strong>RAG + prompting</strong> over fine-tuning initially to maximize iteration speed and control costs while maintaining factual accuracy.</p>
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
                        <div class="flex gap-2">
                            <span class="status-badge progress"><i class="fas fa-spinner mr-1"></i>In Progress</span>
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Helping learners build AI skills through guided journeys and hands-on practice</p>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="tech-pill"><i class="fas fa-users-cog mr-1"></i>Multi-Agent</span>
                        <span class="tech-pill"><i class="fas fa-brain mr-1"></i>LangGraph</span>
                        <span class="tech-pill"><i class="fas fa-memory mr-1"></i>Memory Layer</span>
                        <span class="tech-pill"><i class="fas fa-chart-line mr-1"></i>Adaptive</span>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">AI learning is fragmented: tools-first instead of concept-first, no structured progression, and low retention after tutorials.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">AI-native learning app that breaks AI into progressive paths, uses agents to simulate mentors/reviewers/explainers, and adapts difficulty dynamically.</p>
                        </div>
                    </div>
                    
                    <div class="architecture-block mt-6">
                        <div class="flex items-center gap-2 mb-3">
                            <i class="fas fa-sitemap text-orange-500"></i>
                            <span class="font-semibold text-gray-700">Planned Architecture</span>
                        </div>
                        <div class="grid md:grid-cols-4 gap-3">
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-chalkboard-teacher text-indigo-400 text-lg mb-1"></i>
                                <div class="text-xs font-semibold text-gray-700">Tutor Agent</div>
                            </div>
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-clipboard-check text-green-400 text-lg mb-1"></i>
                                <div class="text-xs font-semibold text-gray-700">Practice Evaluator</div>
                            </div>
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-comments text-purple-400 text-lg mb-1"></i>
                                <div class="text-xs font-semibold text-gray-700">Feedback Agent</div>
                            </div>
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-database text-orange-400 text-lg mb-1"></i>
                                <div class="text-xs font-semibold text-gray-700">Memory Layer</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">AI PM Focus</span>
                        </div>
                        <p class="text-gray-600 text-sm">Designing <strong>learning systems</strong>, not just AI features. Focus on progressive task scaffolding and concept retention across sessions.</p>
                    </div>
                </div>

                <!-- AI Project 3: TrendRadar (Detailed) -->
                <div class="ai-card" style="border-left-color: #9F7AEA;">
                    <div class="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-xl">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">TrendRadar — Holistic Fashion Trend Intelligence</h3>
                                <p class="text-indigo-500">Retail | AI | Demand Sensing</p>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <span class="status-badge active"><i class="fas fa-check-circle mr-1"></i>Active</span>
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Identifying high-conviction fashion trends before they hit mass adoption</p>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="tech-pill"><i class="fas fa-eye mr-1"></i>Gemini Vision</span>
                        <span class="tech-pill"><i class="fas fa-spider mr-1"></i>Apify</span>
                        <span class="tech-pill"><i class="fas fa-database mr-1"></i>Supabase</span>
                        <span class="tech-pill"><i class="fas fa-project-diagram mr-1"></i>n8n</span>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Fashion decisions are reactive: brands chase trends too late, search data alone is noisy, and inventory risk is high.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">Holistic Trend Intelligence System that correlates signals across the full trend lifecycle — only trends validated across multiple layers are promoted.</p>
                        </div>
                    </div>
                    
                    <div class="architecture-block mt-6">
                        <div class="flex items-center gap-2 mb-3">
                            <i class="fas fa-layer-group text-purple-500"></i>
                            <span class="font-semibold text-gray-700">Signal Correlation Strategy</span>
                        </div>
                        <div class="grid md:grid-cols-4 gap-3">
                            <div class="bg-white p-3 rounded-lg">
                                <div class="text-xs font-semibold text-pink-500 mb-1"><i class="fas fa-heart mr-1"></i>Social (Spark)</div>
                                <p class="text-xs text-gray-600">Visual pattern detection from Instagram & Pinterest</p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                                <div class="text-xs font-semibold text-blue-500 mb-1"><i class="fas fa-search mr-1"></i>Search (Intent)</div>
                                <p class="text-xs text-gray-600">Keyword velocity from Myntra + Google Trends</p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                                <div class="text-xs font-semibold text-green-500 mb-1"><i class="fas fa-boxes mr-1"></i>Inventory (Reality)</div>
                                <p class="text-xs text-gray-600">Sell-out tracking in New Arrivals within 48hrs</p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                                <div class="text-xs font-semibold text-orange-500 mb-1"><i class="fas fa-film mr-1"></i>Culture (Multiplier)</div>
                                <p class="text-xs text-gray-600">Bollywood & OTT releases as demand amplifiers</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-dna text-purple-400"></i>
                            <span class="font-semibold text-gray-700">Pattern DNA Logic</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Each product/image is decomposed into structured attributes creating a standardized Trend DNA for comparison:</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="skill-tag text-xs">Category</span>
                            <span class="skill-tag text-xs">Neckline</span>
                            <span class="skill-tag text-xs">Sleeves</span>
                            <span class="skill-tag text-xs">Length</span>
                            <span class="skill-tag text-xs">Fabric</span>
                            <span class="skill-tag text-xs">Print</span>
                        </div>
                    </div>
                    
                    <div class="mt-4 flex flex-wrap gap-4 text-sm">
                        <div><span class="text-gray-500">Trend Lead Time:</span> <span class="font-semibold text-indigo-600">14-21 days</span></div>
                        <div><span class="text-gray-500">Target Cost:</span> <span class="font-semibold text-green-600">$100-150/month</span></div>
                        <div><span class="text-gray-500">Inventory Target:</span> <span class="font-semibold text-orange-600">+20% turnover</span></div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">AI PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Avoided single-signal trend detection; prioritized <strong>correlated confidence</strong> over raw volume for higher conviction predictions.</p>
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
                        <div class="flex gap-2">
                            <span class="status-badge active"><i class="fas fa-check-circle mr-1"></i>Completed</span>
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Collaborative AI agents for market research and signal synthesis</p>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="tech-pill"><i class="fas fa-users-cog mr-1"></i>CrewAI</span>
                        <span class="tech-pill"><i class="fab fa-python mr-1"></i>Python</span>
                        <span class="tech-pill"><i class="fas fa-chart-line mr-1"></i>Financial APIs</span>
                        <span class="tech-pill"><i class="fas fa-robot mr-1"></i>LLMs</span>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Single-model analysis often lacks diverse viewpoints, structured reasoning, and cross-validation needed for reliable market insights.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">CrewAI-based multi-agent system where agents analyze fundamentals, track technical indicators, summarize news, and debate signals before final output.</p>
                        </div>
                    </div>
                    
                    <div class="architecture-block mt-6">
                        <div class="flex items-center gap-2 mb-3">
                            <i class="fas fa-users text-green-500"></i>
                            <span class="font-semibold text-gray-700">Agent Roles</span>
                        </div>
                        <div class="grid md:grid-cols-4 gap-3">
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-balance-scale text-blue-400 text-lg mb-1"></i>
                                <div class="text-xs font-semibold text-gray-700">Fundamentals</div>
                            </div>
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-chart-area text-green-400 text-lg mb-1"></i>
                                <div class="text-xs font-semibold text-gray-700">Technical</div>
                            </div>
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-newspaper text-orange-400 text-lg mb-1"></i>
                                <div class="text-xs font-semibold text-gray-700">News Summary</div>
                            </div>
                            <div class="bg-white p-3 rounded-lg text-center">
                                <i class="fas fa-gavel text-purple-400 text-lg mb-1"></i>
                                <div class="text-xs font-semibold text-gray-700">Signal Debate</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">AI PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Used agents to <strong>simulate analyst diversity</strong>, not to chase prediction accuracy. Role isolation prevents overfitting.</p>
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
                        <div class="flex gap-2">
                            <span class="status-badge active"><i class="fas fa-check-circle mr-1"></i>Completed</span>
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4">Automating analytics queries and insights via agent workflows</p>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="tech-pill"><i class="fas fa-project-diagram mr-1"></i>LangGraph</span>
                        <span class="tech-pill"><i class="fab fa-python mr-1"></i>Python</span>
                        <span class="tech-pill"><i class="fas fa-database mr-1"></i>SQL</span>
                        <span class="tech-pill"><i class="fas fa-robot mr-1"></i>LLMs</span>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-question-circle text-purple-400"></i>
                                <span class="font-semibold text-gray-700">Why</span>
                            </div>
                            <p class="text-gray-600 text-sm">Analytics teams spend disproportionate time on repetitive questions that could be automated with proper guardrails.</p>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                <span class="font-semibold text-gray-700">What</span>
                            </div>
                            <p class="text-gray-600 text-sm">LangGraph-based BI agent capable of interpreting natural language queries, routing tasks to SQL/metrics/explanation agents, and returning structured insights.</p>
                        </div>
                    </div>
                    
                    <div class="architecture-block mt-6">
                        <div class="flex items-center gap-2 mb-3">
                            <i class="fas fa-sitemap text-blue-500"></i>
                            <span class="font-semibold text-gray-700">Stateful Agent Graph</span>
                        </div>
                        <div class="flex items-center justify-center gap-2 flex-wrap">
                            <div class="bg-white px-4 py-2 rounded-lg text-xs font-semibold text-gray-700">Query Parsing</div>
                            <i class="fas fa-arrow-right text-gray-400"></i>
                            <div class="bg-white px-4 py-2 rounded-lg text-xs font-semibold text-gray-700">Tool Routing</div>
                            <i class="fas fa-arrow-right text-gray-400"></i>
                            <div class="bg-white px-4 py-2 rounded-lg text-xs font-semibold text-gray-700">Execution</div>
                            <i class="fas fa-arrow-right text-gray-400"></i>
                            <div class="bg-white px-4 py-2 rounded-lg text-xs font-semibold text-gray-700">Validation</div>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-tasks text-blue-400"></i>
                            <span class="font-semibold text-gray-700">Evaluation Metrics</span>
                        </div>
                        <div class="flex flex-wrap gap-4 text-sm">
                            <div><span class="text-gray-500">Query Routing:</span> <span class="text-gray-700">Accuracy</span></div>
                            <div><span class="text-gray-500">Metrics:</span> <span class="text-gray-700">Correctness</span></div>
                            <div><span class="text-gray-500">Trade-offs:</span> <span class="text-gray-700">Latency vs Accuracy</span></div>
                        </div>
                    </div>
                    
                    <div class="judgment-box">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-brain text-purple-500"></i>
                            <span class="font-semibold text-gray-700">AI PM Judgment</span>
                        </div>
                        <p class="text-gray-600 text-sm">Chose <strong>agent orchestration</strong> over monolithic prompts to improve reliability and enable better debugging/iteration.</p>
                    </div>
                </div>

            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="tab-content">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="text-3xl font-bold text-gray-800">Skills & Expertise</h2>
                <svg class="section-illustration" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="40" width="90" height="60" rx="8" fill="#E9D8FD"/>
                    <circle cx="55" cy="60" r="12" fill="#667EEA"/>
                    <circle cx="75" cy="75" r="10" fill="#9AE6B4"/>
                    <circle cx="95" cy="55" r="14" fill="#F6AD7B"/>
                    <path d="M45 85 L55 75 L70 80 L85 65 L100 70" stroke="#4A5568" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- Product & Strategy -->
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
                        <span class="skill-tag">Stakeholder Management</span>
                    </div>
                </div>

                <!-- AI & Technology -->
                <div class="bg-white p-8 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-500 text-xl">
                            <i class="fas fa-robot"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800">AI & Technology</h3>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span class="skill-tag">Generative AI</span>
                        <span class="skill-tag">Machine Learning</span>
                        <span class="skill-tag">Deep Learning</span>
                        <span class="skill-tag">NLP</span>
                        <span class="skill-tag">Computer Vision</span>
                        <span class="skill-tag">LLMs</span>
                        <span class="skill-tag">Prompt Engineering</span>
                        <span class="skill-tag">RAG Systems</span>
                        <span class="skill-tag">Multi-Agent Systems</span>
                        <span class="skill-tag">LangGraph</span>
                        <span class="skill-tag">CrewAI</span>
                    </div>
                </div>

                <!-- Technical Skills -->
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
                        <span class="skill-tag">Git</span>
                        <span class="skill-tag">APIs</span>
                        <span class="skill-tag">Supabase</span>
                        <span class="skill-tag">Vector DBs</span>
                    </div>
                </div>

                <!-- Tools & Platforms -->
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
                        <span class="skill-tag">Razorpay</span>
                        <span class="skill-tag">Dialogflow</span>
                        <span class="skill-tag">Apify</span>
                    </div>
                </div>
            </div>

            <!-- Domain Expertise -->
            <div class="mt-8">
                <h3 class="text-xl font-bold text-gray-800 mb-6">Domain Expertise</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl text-center">
                        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl text-indigo-500">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <h4 class="font-semibold text-gray-800">E-commerce</h4>
                        <p class="text-sm text-gray-500 mt-1">Amazon, D2C</p>
                    </div>
                    <div class="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl text-center">
                        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl text-green-500">
                            <i class="fas fa-landmark"></i>
                        </div>
                        <h4 class="font-semibold text-gray-800">FinTech</h4>
                        <p class="text-sm text-gray-500 mt-1">Banking, Payments</p>
                    </div>
                    <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl text-center">
                        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl text-blue-500">
                            <i class="fas fa-cloud"></i>
                        </div>
                        <h4 class="font-semibold text-gray-800">SaaS</h4>
                        <p class="text-sm text-gray-500 mt-1">Enterprise Analytics</p>
                    </div>
                    <div class="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl text-center">
                        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl text-orange-500">
                            <i class="fas fa-tshirt"></i>
                        </div>
                        <h4 class="font-semibold text-gray-800">D2C Fashion</h4>
                        <p class="text-sm text-gray-500 mt-1">Trumee</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education Section -->
        <section id="education" class="tab-content">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="text-3xl font-bold text-gray-800">Education & Certifications</h2>
                <svg class="section-illustration" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75 20 L20 50 L75 80 L130 50 Z" fill="#667EEA"/>
                    <rect x="70" y="50" width="10" height="40" fill="#4A5568"/>
                    <ellipse cx="75" cy="95" rx="25" ry="8" fill="#E9D8FD"/>
                    <circle cx="75" cy="35" r="8" fill="#F6AD7B"/>
                </svg>
            </div>

            <!-- Education -->
            <h3 class="text-xl font-bold text-gray-800 mb-6">Education</h3>
            <div class="grid md:grid-cols-3 gap-6 mb-12">
                <div class="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-indigo-400">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                            ISB
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800">Indian School of Business</h4>
                            <p class="text-sm text-gray-500">2019 - 2020</p>
                        </div>
                    </div>
                    <p class="text-indigo-500 font-medium mb-2">PGP in IT & Marketing</p>
                    <p class="text-gray-600 text-sm">Post Graduate Programme focusing on Information Technology and Marketing management.</p>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-purple-400">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                            IIIT
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800">IIIT Bangalore</h4>
                            <p class="text-sm text-gray-500">2020 - 2021</p>
                        </div>
                    </div>
                    <p class="text-purple-500 font-medium mb-2">PG Diploma - Data Science & ML</p>
                    <p class="text-gray-600 text-sm">Advanced program in Data Science and Machine Learning with hands-on projects.</p>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-400">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                            VIT
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800">VIT University</h4>
                            <p class="text-sm text-gray-500">2008 - 2012</p>
                        </div>
                    </div>
                    <p class="text-orange-500 font-medium mb-2">Bachelor of Technology</p>
                    <p class="text-gray-600 text-sm">Undergraduate engineering degree from Vellore Institute of Technology.</p>
                </div>
            </div>

            <!-- Certifications -->
            <h3 class="text-xl font-bold text-gray-800 mb-6">Certifications</h3>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl flex items-start gap-4">
                    <div class="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-indigo-500 text-xl flex-shrink-0">
                        <i class="fas fa-brain"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-800">AI Generalist Bootcamp</h4>
                        <p class="text-indigo-500 text-sm mb-1">Outskill | July 2025 - Aug 2025</p>
                        <p class="text-gray-600 text-sm">Comprehensive training on AI technologies, GenAI applications, and practical implementation.</p>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl flex items-start gap-4">
                    <div class="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-green-500 text-xl flex-shrink-0">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-800">AI & Machine Learning Program</h4>
                        <p class="text-green-500 text-sm mb-1">Scaler | July 2024 - July 2025</p>
                        <p class="text-gray-600 text-sm">Advanced program covering ML algorithms, deep learning, and production ML systems.</p>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl flex items-start gap-4">
                    <div class="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-500 text-xl flex-shrink-0">
                        <i class="fas fa-cubes"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-800">Product Management Certification</h4>
                        <p class="text-orange-500 text-sm mb-1">Duke Corporation + UpGrad | Dec 2019 - June 2020</p>
                        <p class="text-gray-600 text-sm">Comprehensive product management training covering strategy, execution, and leadership.</p>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl flex items-start gap-4">
                    <div class="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-500 text-xl flex-shrink-0">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-800">AI Product Consulting</h4>
                        <p class="text-blue-500 text-sm mb-1">HLSR Technologies | July 2025</p>
                        <p class="text-gray-600 text-sm">EdTech AI project integrating TTS technology and multilingual synthesis for educational content.</p>
                    </div>
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
                    <div class="flex items-center justify-center mb-4">
                        <svg class="section-illustration" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="75" cy="60" rx="50" ry="40" fill="#E9D8FD" opacity="0.5"/>
                            <circle cx="55" cy="50" r="20" fill="#667EEA"/>
                            <circle cx="95" cy="50" r="20" fill="#9AE6B4"/>
                            <circle cx="75" cy="75" r="15" fill="#F6AD7B"/>
                            <path d="M55 50 L75 70 L95 50" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                    </div>
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
        // Tab Navigation
        function switchTab(tabId) {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to selected tab and content
            const tabBtn = document.querySelector(\`[data-tab="\${tabId}"]\`);
            const tabContent = document.getElementById(tabId);
            
            if (tabBtn) tabBtn.classList.add('active');
            if (tabContent) tabContent.classList.add('active');
            
            // Smooth scroll to top of content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Add click handlers to tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                switchTab(btn.dataset.tab);
            });
        });
        
        // Intersection Observer for animations
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
        
        // Observe timeline items and project cards
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

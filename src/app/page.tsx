"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// Story data type definitions
interface StatItem {
  value: string;
  label: string;
}

interface NetworkNode {
  id: string;
  label: string;
  x: number;
  y: number;
  infected?: boolean;
}

interface NetworkConnection {
  from: string;
  to: string;
  attack?: boolean;
}

interface TimelineEvent {
  year: string;
  text: string;
}

interface CodeLine {
  text: string;
  type: string;
}

interface Slide {
  type: string;
  title?: string;
  subtitle?: string;
  content?: string;
  subtext?: string;
  number?: string;
  label?: string;
  items?: StatItem[];
  root?: string;
  phases?: string[][];
  nodes?: NetworkNode[];
  connections?: NetworkConnection[];
  events?: TimelineEvent[];
  lines?: CodeLine[];
  stage?: number;
}

interface Story {
  title: string;
  subtitle: string;
  slides: Slide[];
}

// STUXNET - Rewritten as a THRILLER
const story: Story = {
  title: "Stuxnet",
  subtitle: "The World's First Cyber Weapon",
  slides: [
    // HOOK - Maximum drama
    {
      type: "text",
      content: "Someone just <span class='highlight-red'>blew up</span> a nuclear facility",
      subtext: "Without firing a single shot."
    },
    // IMPACT - Immediate consequence
    {
      type: "bigNumber",
      number: "1,000",
      label: "centrifuges — destroyed"
    },
    // MYSTERY - Build intrigue
    {
      type: "text",
      content: "Iran's <span class='highlight-red'>nuclear program</span>",
      subtext: "was under attack. They had no idea."
    },
    // THE WEAPON
    {
      type: "text",
      content: "The weapon? <span class='highlight'>A USB stick.</span>",
      subtext: ""
    },
    // THE HOW - Attack visualization (simple)
    {
      type: "network",
      title: "It spread like a virus",
      nodes: [
        { id: "usb", label: "USB", x: 8, y: 50 },
        { id: "pc", label: "PC", x: 30, y: 30, infected: true },
        { id: "scada", label: "SCADA", x: 52, y: 50, infected: true },
        { id: "plc", label: "PLC", x: 74, y: 30, infected: true },
        { id: "centrifuge", label: "Target", x: 92, y: 50, infected: true }
      ],
      connections: [
        { from: "usb", to: "pc", attack: true },
        { from: "pc", to: "scada", attack: true },
        { from: "scada", to: "plc", attack: true },
        { from: "plc", to: "centrifuge", attack: true }
      ]
    },
    // ANIMATED ATTACK FLOW - 5 stages
    { type: "attackFlow", stage: 0 },
    { type: "attackFlow", stage: 1 },
    { type: "attackFlow", stage: 2 },
    { type: "attackFlow", stage: 3 },
    { type: "attackFlow", stage: 4 },
    // THE DECEPTION
    {
      type: "text",
      content: "It made centrifuges <span class='highlight-red'>tear themselves apart</span>",
      subtext: "While screens showed: \"All systems normal.\""
    },
    // ARSENAL
    {
      type: "stats",
      items: [
        { value: "5", label: "Zero-Days Used" },
        { value: "14", label: "Months Hidden" }
      ]
    },
    // CLIFFHANGER
    {
      type: "text",
      content: "This wasn't hackers.",
      subtext: ""
    },
    // REVEAL
    {
      type: "text",
      content: "This was <span class='highlight'>governments.</span>",
      subtext: "USA + Israel. Codename: Olympic Games."
    },
    // LEGACY - Dramatic close
    {
      type: "text",
      content: "<span class='highlight-purple'>Code</span> became a <span class='highlight-red'>weapon of war.</span>",
      subtext: "And nothing was ever the same."
    },
    // TITLE CARD
    {
      type: "title",
      title: "STUXNET",
      subtitle: "The world's first cyber weapon • 2010"
    }
  ]
};

// Mobile Attack Stage V2 - Enhanced vertical flow with animations
function MobileAttackStage({ stage }: { stage: number }) {
  const [dataProgress, setDataProgress] = useState(0);
  
  useEffect(() => {
    setDataProgress(0);
    const interval = setInterval(() => {
      setDataProgress(p => (p + 0.02) % 1);
    }, 30);
    return () => clearInterval(interval);
  }, [stage]);
  
  const allNodes = [
    { icon: '💾', label: 'USB' },
    { icon: '💻', label: 'PC' },
    { icon: '🌐', label: 'NETWORK' },
    { icon: '🖥️', label: 'SCADA' },
    { icon: '⚙️', label: 'PLC' },
    { icon: '☢️', label: 'TARGET' },
  ];
  
  const stageInfo = [
    { title: 'USB INSERTION', desc: 'Infected USB planted by contractor' },
    { title: 'INITIAL INFECTION', desc: 'Worm exploits Windows zero-days' },
    { title: 'NETWORK SPREAD', desc: 'Propagates through shared drives' },
    { title: 'SCADA COMPROMISE', desc: 'Targets WinCC/Step 7 software' },
    { title: 'PAYLOAD DELIVERY', desc: 'Malicious code injected into PLCs' },
  ];
  
  const current = stageInfo[stage];
  const sourceNode = allNodes[stage];
  const targetNode = allNodes[stage + 1];
  
  return (
    <div className="mobile-attack-v2">
      {/* Header */}
      <div className="mobile-header-v2">
        <div className="mobile-stage-badge">
          <span className="mobile-stage-num-v2">0{stage + 1}</span>
          <span className="mobile-stage-divider">/</span>
          <span className="mobile-stage-total">05</span>
        </div>
        <h3 className="mobile-title-v2">{current.title}</h3>
      </div>
      
      {/* Infected chain - show previously infected nodes */}
      {stage > 0 && (
        <div className="mobile-infected-chain">
          {allNodes.slice(0, stage).map((node, i) => (
            <div key={i} className="chain-node">
              <span className="chain-icon">{node.icon}</span>
              {i < stage - 1 && <span className="chain-connector">→</span>}
            </div>
          ))}
        </div>
      )}
      
      {/* Main attack visual */}
      <div className="mobile-attack-center">
        {/* Source node */}
        <div className="mobile-node-v2 source">
          <div className="node-glow source-glow" />
          <div className="node-ring" />
          <div className="node-inner">
            <span className="node-emoji">{sourceNode.icon}</span>
          </div>
          <span className="node-name">{sourceNode.label}</span>
          <span className="node-badge infected">⚠ INFECTED</span>
        </div>
        
        {/* Data stream */}
        <div className="mobile-data-stream">
          <div className="stream-line" />
          <div className="stream-glow" />
          {/* Multiple data packets */}
          <div className="data-packet packet-1" style={{ top: `${dataProgress * 100}%` }} />
          <div className="data-packet packet-2" style={{ top: `${((dataProgress + 0.3) % 1) * 100}%` }} />
          <div className="data-packet packet-3" style={{ top: `${((dataProgress + 0.6) % 1) * 100}%` }} />
          <div className="stream-arrow">▼</div>
        </div>
        
        {/* Target node */}
        <div className="mobile-node-v2 target">
          <div className="node-glow target-glow" />
          <div className="scan-effect" />
          <div className="node-inner target-inner">
            <span className="node-emoji">{targetNode.icon}</span>
          </div>
          <span className="node-name">{targetNode.label}</span>
          <span className="node-badge targeting">◉ TARGETING</span>
        </div>
      </div>
      
      {/* Description */}
      <p className="mobile-desc-v2">{current.desc}</p>
      
      {/* Progress indicator */}
      <div className="mobile-progress-v2">
        {stageInfo.map((_, i) => (
          <div key={i} className={`progress-step ${i < stage ? 'complete' : ''} ${i === stage ? 'active' : ''}`}>
            <div className="step-fill" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Desktop Attack Stage - Enhanced network diagram with electric pulses and ripples
function DesktopAttackStage({ stage }: { stage: number }) {
  const [packetProgress, setPacketProgress] = useState(0);
  const [showRipple, setShowRipple] = useState(false);
  const [trailPositions, setTrailPositions] = useState<{x: number, y: number, age: number}[]>([]);
  const prevStageRef = useRef(stage);
  
  // Define nodes and stageInfo FIRST (before useEffect uses them)
  const nodes = [
    { id: 'usb', label: 'USB', x: 10, y: 75, icon: '💾' },
    { id: 'laptop', label: 'PC', x: 27, y: 30, icon: '💻' },
    { id: 'network', label: 'NETWORK', x: 44, y: 75, icon: '🌐' },
    { id: 'scada', label: 'SCADA', x: 61, y: 30, icon: '🖥️' },
    { id: 'plc', label: 'PLC', x: 78, y: 75, icon: '⚙️' },
    { id: 'centrifuge', label: 'TARGET', x: 93, y: 30, icon: '☢️' },
  ];
  
  const stageInfo = [
    { title: "USB INSERTION", desc: "Infected USB planted by contractor", from: 0, to: 1 },
    { title: "INITIAL INFECTION", desc: "Worm exploits Windows zero-days", from: 1, to: 2 },
    { title: "NETWORK SPREAD", desc: "Propagates via shared drives", from: 2, to: 3 },
    { title: "SCADA COMPROMISE", desc: "Targets WinCC/Step 7 software", from: 3, to: 4 },
    { title: "PAYLOAD DELIVERY", desc: "Malicious code injected into PLCs", from: 4, to: 5 },
  ];
  
  useEffect(() => {
    if (prevStageRef.current !== stage) {
      setPacketProgress(0);
      setShowRipple(false);
      setTrailPositions([]);
      prevStageRef.current = stage;
    }
    
    const interval = setInterval(() => {
      setPacketProgress(p => {
        const newP = Math.min(1, p + 0.012);
        // Trigger ripple when packet arrives
        if (newP >= 0.95 && p < 0.95) {
          setShowRipple(true);
        }
        return newP;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [stage]);
  
  // Trail effect
  useEffect(() => {
    const trailInterval = setInterval(() => {
      setTrailPositions(prev => {
        const aged = prev.map(p => ({ ...p, age: p.age + 1 })).filter(p => p.age < 8);
        if (packetProgress < 0.98) {
          const fromNode = nodes[stageInfo[stage]?.from || 0];
          const toNode = nodes[stageInfo[stage]?.to || 1];
          const x = fromNode.x + (toNode.x - fromNode.x) * packetProgress;
          const y = fromNode.y + (toNode.y - fromNode.y) * packetProgress;
          return [...aged, { x, y, age: 0 }];
        }
        return aged;
      });
    }, 50);
    return () => clearInterval(trailInterval);
  }, [packetProgress, stage, nodes, stageInfo]);
  
  const currentStage = stageInfo[stage] || stageInfo[0];
  const fromNode = nodes[currentStage.from];
  const toNode = nodes[currentStage.to];
  
  const packetX = fromNode.x + (toNode.x - fromNode.x) * packetProgress;
  const packetY = fromNode.y + (toNode.y - fromNode.y) * packetProgress;
  
  return (
    <div className="attack-flow-v2">
      <div className="attack-header-v2">
        <div className="stage-badge">
          <span className="stage-num">0{stage + 1}</span>
          <span className="stage-divider">/</span>
          <span className="stage-total">05</span>
        </div>
        <h3 className="stage-title-v2">{currentStage.title}</h3>
        <p className="stage-desc-v2">{currentStage.desc}</p>
      </div>
      
      <div className="attack-diagram-v2">
        {/* SVG for paths and effects */}
        <svg className="attack-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            {/* Glow filter for active paths */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            {/* Electric pulse gradient */}
            <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent"/>
              <stop offset="40%" stopColor="#ff3366"/>
              <stop offset="50%" stopColor="#ffffff"/>
              <stop offset="60%" stopColor="#ff3366"/>
              <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
          </defs>
          
          {/* Background grid lines for cyber effect */}
          <g className="cyber-grid" opacity="0.1">
            {[20, 40, 60, 80].map(y => (
              <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y} stroke="#00f0ff" strokeWidth="0.2"/>
            ))}
            {[20, 40, 60, 80].map(x => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="100" stroke="#00f0ff" strokeWidth="0.2"/>
            ))}
          </g>
          
          {/* Connection paths */}
          {nodes.slice(0, -1).map((node, i) => {
            const next = nodes[i + 1];
            const isActive = i < stage;
            const isCurrent = i === stage;
            const isPending = i > stage;
            return (
              <g key={i}>
                {/* Base path */}
                <line
                  x1={node.x} y1={node.y}
                  x2={next.x} y2={next.y}
                  className={`path-base ${isActive ? 'completed' : ''} ${isCurrent ? 'active' : ''} ${isPending ? 'pending' : ''}`}
                />
                {/* Animated dashes for active path */}
                {isCurrent && (
                  <line
                    x1={node.x} y1={node.y}
                    x2={next.x} y2={next.y}
                    className="path-electric"
                    filter="url(#glow)"
                  />
                )}
                {/* Data flow particles on completed paths */}
                {isActive && (
                  <circle r="0.8" className="data-particle">
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      path={`M${node.x},${node.y} L${next.x},${next.y}`}
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>
        
        {/* Trail particles */}
        {trailPositions.map((pos, i) => (
          <div
            key={i}
            className="packet-trail"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              opacity: 1 - (pos.age / 8),
              transform: `translate(-50%, -50%) scale(${1 - (pos.age / 10)})`,
            }}
          />
        ))}
        
        {/* Main packet */}
        {packetProgress < 0.98 && (
          <div
            className="attack-packet-v2"
            style={{
              left: `${packetX}%`,
              top: `${packetY}%`,
            }}
          >
            <div className="packet-core" />
            <div className="packet-ring packet-ring-1" />
            <div className="packet-ring packet-ring-2" />
            <div className="packet-glow" />
          </div>
        )}
        
        {/* Nodes */}
        {nodes.map((node, i) => {
          const isInfected = i <= stage;
          const isTarget = i === stage + 1;
          const isSource = i === stage;
          const isCurrentTarget = i === stage + 1 && showRipple;
          return (
            <div
              key={node.id}
              className={`node-v2 ${isInfected ? 'infected' : ''} ${isTarget ? 'target' : ''} ${isSource ? 'source' : ''}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
            >
              {/* Ripple effect on infection */}
              {isCurrentTarget && (
                <>
                  <div className="infection-ripple ripple-1" />
                  <div className="infection-ripple ripple-2" />
                  <div className="infection-ripple ripple-3" />
                </>
              )}
              {/* Scanning effect on target */}
              {isTarget && !isCurrentTarget && (
                <div className="scan-ring" />
              )}
              {/* Pulse rings for infected nodes */}
              {isInfected && (
                <div className="infected-pulse" />
              )}
              {/* Node content */}
              <div className="node-icon-wrap">
                <span className="node-icon-v2">{node.icon}</span>
              </div>
              <span className="node-label-v2">{node.label}</span>
            </div>
          );
        })}
      </div>
      
      {/* Progress bar */}
      <div className="attack-progress-bar">
        {stageInfo.map((_, i) => (
          <div key={i} className={`progress-segment ${i < stage ? 'complete' : ''} ${i === stage ? 'active' : ''}`}>
            <div className="segment-fill" style={{ width: i === stage ? `${packetProgress * 100}%` : i < stage ? '100%' : '0%' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Compact Attack Stage for small 16:9 viewports
function CompactAttackStage({ stage }: { stage: number }) {
  const stages = [
    { icon: '💾', label: 'USB → PC', title: 'USB INSERTION' },
    { icon: '💻', label: 'PC → Network', title: 'INITIAL INFECTION' },
    { icon: '🌐', label: 'Network → SCADA', title: 'NETWORK SPREAD' },
    { icon: '🖥️', label: 'SCADA → PLC', title: 'SCADA COMPROMISE' },
    { icon: '⚙️', label: 'PLC → Target', title: 'PAYLOAD DELIVERY' },
  ];
  
  const current = stages[stage];
  
  return (
    <div className="compact-attack">
      <div className="compact-stage-badge">STAGE {stage + 1}/5</div>
      <div className="compact-icon">{current.icon}</div>
      <div className="compact-title">{current.title}</div>
      <div className="compact-flow">{current.label}</div>
      <div className="compact-dots">
        {stages.map((_, i) => (
          <span key={i} className={`compact-dot ${i <= stage ? 'active' : ''} ${i === stage ? 'current' : ''}`} />
        ))}
      </div>
    </div>
  );
}

// Wrapper component that chooses between mobile and desktop layouts
function AttackStage({ stage, isMobile = false, isCompact = false }: { stage: number; isMobile?: boolean; isCompact?: boolean }) {
  if (isMobile) {
    return <MobileAttackStage stage={stage} />;
  }
  if (isCompact) {
    return <CompactAttackStage stage={stage} />;
  }
  return <DesktopAttackStage stage={stage} />;
}

// Particle Network Background Component
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId: number;
    let particles: Array<{x: number, y: number, vx: number, vy: number}> = [];
    
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    const init = () => {
      resize();
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
        ctx.fill();
        
        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    window.addEventListener('resize', init);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', init);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ratio, setRatio] = useState<"16:9" | "9:16">("16:9");
  const [animationKey, setAnimationKey] = useState(0);
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  
  // Detect small viewport for compact mode
  useEffect(() => {
    const checkSize = () => {
      // Use compact mode when viewport width < 500px and in 16:9 mode
      setIsSmallViewport(window.innerWidth < 500);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < story.slides.length) {
      const prevSlide = story.slides[currentSlide];
      const nextSlide = story.slides[index];
      // Only update animation key when changing slide TYPES (not same-type transitions like attackFlow stages)
      if (prevSlide.type !== nextSlide.type) {
        setAnimationKey(prev => prev + 1);
      }
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToSlide(currentSlide - 1);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, goToSlide]);

  const renderSlide = (slide: Slide, index: number) => {
    if (index !== currentSlide) return null;

    switch (slide.type) {
      case "title":
        return (
          <div className="slide-content" key={animationKey}>
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-subtitle">{slide.subtitle}</p>
          </div>
        );

      case "text":
        return (
          <div className="slide-content" key={animationKey}>
            <p className="slide-text" dangerouslySetInnerHTML={{ __html: slide.content || "" }} />
            {slide.subtext && <p className="slide-subtitle mt-5">{slide.subtext}</p>}
          </div>
        );

      case "bigNumber":
        return (
          <div className="slide-content" key={animationKey}>
            <div className="big-number">{slide.number}</div>
            <p className="big-label">{slide.label}</p>
          </div>
        );

      case "stats":
        return (
          <div className="slide-content" key={animationKey}>
            <div className="stat-grid">
              {slide.items?.map((item, i) => (
                <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "attackTree":
        return (
          <div className="slide-content" key={animationKey}>
            <div className="attack-tree">
              <div className="tree-level">
                <div className="tree-node root">{slide.root}</div>
              </div>
              {slide.phases?.map((phase, pi) => (
                <div key={pi}>
                  <div className="tree-connector" />
                  <div className="tree-level">
                    {phase.map((node, ni) => (
                      <div 
                        key={ni} 
                        className="tree-node phase"
                        style={{ animationDelay: `${(pi * 0.3) + (ni * 0.1)}s` }}
                      >
                        {node}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "network":
        // Simple horizontal flow - no complex positioning
        return (
          <div className="slide-content" key={animationKey}>
            <h2 className="slide-subtitle mb-6">{slide.title}</h2>
            <div className="flow-diagram">
              {slide.nodes?.map((node, i) => (
                <div key={i} className="flow-item" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className={`flow-node ${node.infected ? "infected" : ""}`}>
                    {node.label}
                  </div>
                  {i < (slide.nodes?.length || 0) - 1 && (
                    <div className="flow-arrow">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "attackFlow":
        return (
          <div className="slide-content attack-flow-slide" key={animationKey}>
            <AttackStage stage={slide.stage || 0} isMobile={ratio === "9:16"} isCompact={ratio === "16:9" && isSmallViewport} />
          </div>
        );

      case "timeline":
        return (
          <div className="slide-content" key={animationKey}>
            <h2 className="slide-subtitle mb-6">{slide.title}</h2>
            <div className="timeline">
              {slide.events?.map((event, i) => (
                <div 
                  key={i} 
                  className="timeline-item"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="timeline-year">{event.year}</div>
                  <div className="timeline-text">{event.text}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "code":
        return (
          <div className="slide-content" key={animationKey}>
            <h2 className="slide-subtitle mb-5">{slide.title}</h2>
            <div className="code-block">
              {slide.lines?.map((line, i) => (
                <div 
                  key={i} 
                  className="code-line"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {line.type === "comment" ? (
                    <span className="code-comment">{line.text}</span>
                  ) : (
                    line.text || "\u00A0"
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="player-container">
      {/* Ratio Controls */}
      <div className="controls">
        <button
          className={ratio === "16:9" ? "active" : ""}
          onClick={() => setRatio("16:9")}
        >
          16:9
        </button>
        <button
          className={ratio === "9:16" ? "active" : ""}
          onClick={() => setRatio("9:16")}
        >
          9:16
        </button>
      </div>

      {/* Stage */}
      <div className={`stage ${ratio === "16:9" ? "ratio-16-9" : "ratio-9-16"}`}>
        <ParticleNetwork />
        <div className="slide active">
          {renderSlide(story.slides[currentSlide], currentSlide)}
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <button
          className="nav-btn"
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
        >
          ←
        </button>
        <div className="progress">
          <span>{currentSlide + 1}</span> / <span>{story.slides.length}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentSlide + 1) / story.slides.length) * 100}%` }}
          />
        </div>
        <button
          className="nav-btn"
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide === story.slides.length - 1}
        >
          →
        </button>
      </nav>
    </div>
  );
}

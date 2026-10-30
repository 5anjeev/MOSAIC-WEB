/* ============================================================
   MOSAIC ecosystem data — shared by the Ecosystem explorer pages.
   Resource "types" use the mosaic.txt taxonomy:
   "Threat model", "Control model", "Guide: technical",
   "Guide: process", "Training", "Tool", "Other".
   Liaisons are the public leads; liaisonConfirmed is true only
   where a MOSAIC liaison is confirmed (CSA / John Yeoh).
   ============================================================ */
var DATA = [
  {
    key:"aix", name:"OWASP AI Exchange", short:"OWASP AIX", logo:"assets/members/AIX.png",
    url:"https://owaspai.org/", type:"Open-source community", geo:"Global",
    scope:"End-to-end AI security and privacy; threats mapped to controls across the lifecycle.",
    liaison:"Rob van der Veer", liaisonConfirmed:true,
    deliverables:"https://owaspai.org/docs/ai_security_overview/",
    roadmap:"https://owaspai.org/goto/aisecuritymatrix/",
    blurb:"The leading open, vendor-neutral body of AI-security knowledge, mapping threats to controls, and already feeding ISO/IEC and the EU AI Act.",
    resources:[
      {name:"AI Exchange complete guide", url:"https://owaspai.org/docs/ai_security_overview/", types:["Threat model","Control model"], stage:"Published, ongoing", date:"Since 2022", featured:true, desc:"300+ pages mapping AI threats to 50+ controls across the lifecycle; the core deliverable."},
      {name:"Periodic Table of AI Security", url:"https://owaspai.org/go/periodictable/", types:["Threat model","Control model"], stage:"Published", date:"?-?", featured:true, desc:"Every AI threat and its controls organized by asset, attack surface, and category."},
      {name:"AI Security Testing (Section 5)", url:"https://owaspai.org/docs/5_testing/", types:["Guide: technical"], stage:"Published, ongoing", date:"?-?", featured:true, desc:"Testing and red-teaming guidance plus curated open-source tools."},
      {name:"Risk Analysis method", url:"https://owaspai.org/go/riskanalysis/", types:["Guide: process"], stage:"Published", date:"?-?", featured:true, desc:"A ten-step threat-modeling process to select the relevant threats and controls."},
      {name:"AI Security Matrix", url:"https://owaspai.org/goto/aisecuritymatrix/", types:["Threat model"], stage:"Published", date:"?-?", featured:false, desc:"Single-view matrix of assets, impacts, attack surfaces, and lifecycle stage."},
      {name:"AI Privacy (Section 6)", url:"https://owaspai.org/docs/6_privacy/", types:["Guide: process"], stage:"Published", date:"?-?", featured:false, desc:"Privacy guidance for AI: minimization, consent, transparency, and model attacks."}
    ]
  },
  {
    key:"genai", name:"OWASP GenAI Security Project", short:"OWASP GenAI", logo:"assets/members/GenAIP.png",
    url:"https://genai.owasp.org/", type:"Open-source community", geo:"Global",
    scope:"LLM and generative-AI application security, agentic AI, red teaming, and governance.",
    liaison:"Rock Lambros", liaisonConfirmed:true,
    deliverables:"https://genai.owasp.org/resources",
    roadmap:"https://genai.owasp.org/roadmap/",
    blurb:"The most widely adopted open community for generative-AI security, best known for the LLM Top 10, and a natural interoperability hub for the landscape.",
    resources:[
      {name:"Top 10 for LLM Applications (2026)", url:"https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/", types:["Threat model"], stage:"Published", date:"Aug 2026", featured:true, desc:"The flagship list of critical risks for LLM-powered apps, mapped to NIST, ATLAS, and CWE."},
      {name:"Top 10 for Agentic Applications (2026)", url:"https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/", types:["Threat model"], stage:"Published", date:"Dec 2025", featured:true, desc:"Critical risks for autonomous agentic AI systems, from 100+ contributors."},
      {name:"Agent Control Standard (ACS)", url:"https://genai.owasp.org/resource/agent-control-standard-acs/", types:["Control model"], stage:"Published", date:"Sep 2026", featured:true, desc:"A standard to make AI agents inspectable, traceable, and controllable."},
      {name:"AI Security Solutions Landscape", url:"https://genai.owasp.org/resources", types:["Guide: technical"], stage:"Published, ongoing", date:"Since 2024", featured:true, desc:"Vendor-agnostic map of the GenAI and agentic lifecycle; updated quarterly."},
      {name:"AIBOM Generator", url:"https://genai.owasp.org/resource/owasp-aibom-generator/", types:["Tool"], stage:"Published, live", date:"Dec 2025", featured:true, desc:"Open-source tool generating AI bills of materials in CycloneDX format."},
      {name:"GenAI Data Security Risks and Mitigations (2026)", url:"https://genai.owasp.org/resource/owasp-genai-data-security-risks-mitigations-2026/", types:["Threat model","Control model"], stage:"Published", date:"Mar 2026", featured:false, desc:"Securing the GenAI data layer: training data, prompts, and model outputs."},
      {name:"GenAI Red Teaming Manual v1.0", url:"https://genai.owasp.org/resource/genai-red-teaming-manual-version-1-0/", types:["Guide: process"], stage:"Published", date:"Oct 2026", featured:false, desc:"An eight-phase method to test GenAI security, safety, and robustness."},
      {name:"GenAI Incident Response Guide 1.0", url:"https://genai.owasp.org/resource/genai-incident-response-guide-1-0/", types:["Guide: process"], stage:"Published", date:"Jul 2025", featured:false, desc:"Best practices for responding to incidents involving GenAI applications."},
      {name:"Security Framework Crosswalk", url:"https://genai.owasp.org/resource/genai-security-industry-framework-crosswalk/", types:["Control model"], stage:"Published", date:"Sep 2026", featured:false, desc:"Maps 51 GenAI vulnerabilities to security, governance, and compliance controls."}
    ]
  },
  {
    key:"csa", name:"Cloud Security Alliance", short:"CSA", logo:"assets/members/CSA.svg",
    url:"https://cloudsecurityalliance.org/", type:"Standards Development Organization (nonprofit)", geo:"Global",
    scope:"AI controls, assurance and certification, maturity, model-risk scoring, and frontier readiness.",
    liaison:"John Yeoh", liaisonConfirmed:true,
    deliverables:"https://cloudsecurityalliance.org/research/publications?term=artificial-intelligence",
    roadmap:"https://dashboard.csai.foundation",
    blurb:"CSA brings the field's most-adopted AI control framework (AICM) plus a full assurance, certification, maturity, and risk-scoring stack.",
    resources:[
      {name:"AICM — AI Controls Matrix", url:"https://cloudsecurityalliance.org/artifacts/ai-controls-matrix", types:["Control model"], stage:"Published (v1.1)", date:"Jul 2026", featured:true, desc:"243 control objectives across 18 domains, mapped to ISO 42001, NIST AI RMF, and the EU AI Act."},
      {name:"AARM — Autonomous Action Runtime Management", url:"https://cloudsecurityalliance.org/research/working-groups/autonomous-action-runtime-management-aarm", types:["Threat model","Control model"], stage:"In development", date:"Since 2026", featured:true, desc:"Framework to evaluate and govern AI-agent actions at runtime (the ARM / runtime item)."},
      {name:"AI Security Maturity Model (AISMM)", url:"https://cloudsecurityalliance.org/artifacts/ai-security-maturity-model", types:["Guide: process"], stage:"Published", date:"May 2026", featured:true, desc:"Assess and improve an enterprise-wide AI security program; broader than project-level work."},
      {name:"RiskRubric", url:"https://riskrubric.ai", types:["Threat model","Tool"], stage:"v1 live, v2 in dev", date:"v1 Sep 2025", featured:true, desc:"Scores AI model risk across six trust pillars; v2 extends to MCP and orchestration harnesses."},
      {name:"Frontier Ready Cybersecurity", url:"https://cloudsecurityalliance.org/csai-foundation/frontier-ready-cybersecurity", types:["Guide: process","Tool"], stage:"Active", date:"2026", featured:true, desc:"Preparing security for the frontier-model era, with an assessment framework."},
      {name:"STAR for AI Catastrophic Risk Annex", url:"https://cloudsecurityalliance.org/csai-foundation/catastrophic-risk-annex", types:["Control model"], stage:"In development", date:"2026 to 2027", featured:false, desc:"Extends STAR and AICM to extreme, irreversible AI risks, with evidence and testing criteria."},
      {name:"TAISE — Trusted AI Safety Expert", url:"https://cloudsecurityalliance.org/education/taise", types:["Training"], stage:"Published", date:"Oct 2025", featured:false, desc:"AI security training and certificate program, run with Northeastern University."}
    ]
  },
  {
    key:"cosai", name:"Coalition for Secure AI", short:"CoSAI", logo:"assets/members/CoSAI.png",
    url:"https://www.coalitionforsecureai.org/", type:"Industry consortium", geo:"Global",
    scope:"AI supply chain, defender readiness, risk governance, and secure agentic design.",
    liaison:"Omar Santos", liaisonConfirmed:true,
    deliverables:"https://www.coalitionforsecureai.org/resources/",
    roadmap:"",
    blurb:"An OASIS-hosted, vendor-backed consortium producing implementation-ready security guidance across AI supply chain, defenders, governance, and agentic systems.",
    resources:[
      {name:"Risks and Controls for the AI Supply Chain (v1)", url:"https://www.coalitionforsecureai.org/wp-content/uploads/2026/03/risks-and-controls-for-the-ai-supply-chain-v1.pdf", types:["Threat model","Control model"], stage:"Published", date:"2026", featured:true, desc:"Risks and matching controls for the AI supply chain (workstream 1)."},
      {name:"Preparing Defenders of AI Systems", url:"https://www.coalitionforsecureai.org/wp-content/uploads/2026/03/preparing-defenders-of-ai-systems.pdf", types:["Guide: process"], stage:"Published", date:"2026", featured:true, desc:"A defender's framework to prioritize mitigations against AI-enabled threats (workstream 2)."},
      {name:"Principles for Secure-by-Design Agentic Systems", url:"https://www.coalitionforsecureai.org/announcing-the-cosai-principles-for-secure-by-design-agentic-systems/", types:["Guide: technical"], stage:"Published", date:"Jul 2025", featured:true, desc:"Three defense-in-depth principles for autonomous agents (workstream 4)."},
      {name:"MCP Security v2.0", url:"https://www.coalitionforsecureai.org/wp-content/uploads/2026/09/model-context-protocol-security-v2.0.pdf", types:["Threat model","Control model"], stage:"Published", date:"2026", featured:true, desc:"Threat taxonomy and an auditable model for the Model Context Protocol."},
      {name:"Signing ML Artifacts", url:"https://www.coalitionforsecureai.org/wp-content/uploads/2026/03/signing-ml-artifacts-1.pdf", types:["Guide: technical"], stage:"Published", date:"2026", featured:false, desc:"Tamper-evident ML metadata and model signing (workstream 1)."},
      {name:"AI Incident Response Framework", url:"https://www.coalitionforsecureai.org/wp-content/uploads/2026/03/AI-Incident-Response-1.pdf", types:["Guide: process"], stage:"Published", date:"Oct 2025", featured:false, desc:"Incident response tailored to AI systems (workstream 2)."},
      {name:"Agentic Identity and Access Management", url:"https://www.coalitionforsecureai.org/wp-content/uploads/2026/04/agentic-identity-and-access-control.pdf", types:["Control model"], stage:"Published", date:"Apr 2026", featured:false, desc:"Identity and access guidance for AI agents (workstream 4)."},
      {name:"AI Shared Responsibility Framework", url:"https://www.coalitionforsecureai.org/wp-content/uploads/2026/05/CoSAI-Shared-Responsibility-Framework.pdf", types:["Guide: process"], stage:"Published", date:"May 2026", featured:false, desc:"Divides security responsibilities across the parties in an AI system."}
    ]
  },
  {
    key:"nist", name:"NIST", short:"NIST", logo:"assets/members/NIST.png",
    url:"https://www.nist.gov/artificial-intelligence", type:"Government body (US federal)", geo:"US federal, global influence",
    scope:"AI risk management, adversarial ML, and secure development for AI.",
    liaison:"Apostol Vassilev", liaisonConfirmed:true,
    deliverables:"https://airc.nist.gov/",
    roadmap:"https://airc.nist.gov/airmf-resources/roadmap/",
    blurb:"NIST provides the foundational, widely adopted frameworks and taxonomies for AI risk and AI security that other initiatives align to.",
    resources:[
      {name:"AI Risk Management Framework (AI 100-1)", url:"https://www.nist.gov/itl/ai-risk-management-framework", types:["Guide: process"], stage:"Published, in revision", date:"Jan 2023", featured:true, desc:"Voluntary framework to build trustworthiness into AI; Govern, Map, Measure, Manage."},
      {name:"Generative AI Profile (AI 600-1)", url:"https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence", types:["Guide: process"], stage:"Published", date:"Jul 2024", featured:true, desc:"Companion profile for risks unique to or worsened by generative AI."},
      {name:"Adversarial ML Taxonomy (AI 100-2e2025)", url:"https://csrc.nist.gov/pubs/ai/100/2/e2025/final", types:["Threat model"], stage:"Published", date:"Mar 2025", featured:true, desc:"Standard taxonomy of attacks on AI/ML (evasion, poisoning, privacy, abuse) and mitigations."},
      {name:"Secure Software Development for GenAI (SP 800-218A)", url:"https://csrc.nist.gov/pubs/sp/800/218/a/final", types:["Guide: process"], stage:"Published", date:"Jul 2024", featured:true, desc:"Secure-development practices for generative AI and dual-use foundation models."},
      {name:"AI RMF Playbook", url:"https://airc.nist.gov/airmf-resources/playbook/", types:["Guide: process"], stage:"Published, living", date:"Since Jan 2023", featured:false, desc:"Suggested voluntary actions and references to achieve the AI RMF outcomes."},
      {name:"Control Overlays for Securing AI Systems (COSAIS)", url:"https://csrc.nist.gov/Projects/cosais", types:["Control model"], stage:"In development", date:"Concept Aug 2025", featured:false, desc:"Security control overlays built on SP 800-53 for AI use cases (reportedly renamed COSIS)."}
    ]
  },
  {
    key:"cis", name:"Center for Internet Security", short:"CIS", logo:"assets/members/CIS.svg",
    url:"https://www.cisecurity.org/", type:"Nonprofit", geo:"Global, US-rooted",
    scope:"Consensus controls and benchmarks, now extended to LLMs, agents, and MCP.",
    liaison:"Brian Calkin", liaisonConfirmed:true,
    deliverables:"https://www.cisecurity.org/insights",
    roadmap:"",
    blurb:"CIS brings decades of community-consensus best practices (the CIS Controls and Benchmarks) and is now extending them to AI through LLM, agent, and MCP guides.",
    resources:[
      {name:"AI LLM Companion Guide", url:"https://www.cisecurity.org/insights/white-papers/controls-v8-1-ai-llm-companion-guide", types:["Guide: technical"], stage:"Published", date:"Apr 2026", featured:true, desc:"Applies CIS Controls v8.1 to large language models."},
      {name:"AI Agents Companion Guide", url:"https://www.cisecurity.org/insights/white-papers/controls-v8-1-ai-agents-companion-guide", types:["Guide: technical"], stage:"Published", date:"Apr 2026", featured:true, desc:"Interprets CIS safeguards for autonomous and semi-autonomous agents."},
      {name:"MCP Companion Guide", url:"https://www.cisecurity.org/insights/white-papers/controls-v8-1-model-context-protocol-companion-guide", types:["Guide: technical"], stage:"Published", date:"Apr 2026", featured:true, desc:"Applies CIS Controls to Model Context Protocol environments."},
      {name:"CIS Critical Security Controls v8.1", url:"https://www.cisecurity.org/controls", types:["Control model"], stage:"Published", date:"?-?", featured:true, desc:"Prioritized, consensus set of cybersecurity best practices (general IT); the AI guides build on these."},
      {name:"CIS Benchmarks", url:"https://www.cisecurity.org/cis-benchmarks", types:["Control model"], stage:"Published, ongoing", date:"?-?", featured:false, desc:"100+ consensus secure-configuration guides for systems and cloud (general IT)."},
      {name:"CIS Hardened Images", url:"https://www.cisecurity.org/cis-hardened-images", types:["Tool"], stage:"Published, ongoing", date:"?-?", featured:false, desc:"VM images pre-configured to CIS Benchmarks on major cloud marketplaces."}
    ]
  },
  {
    key:"sans", name:"SANS Institute", short:"SANS", logo:"assets/members/SANS.svg",
    url:"https://www.sans.org/", type:"Training & certification body", geo:"Global",
    scope:"Hands-on AI security training and GIAC certification across the lifecycle.",
    liaison:"Lenny Zeltser", liaisonConfirmed:true,
    deliverables:"https://www.sans.org/mlp/ai/",
    roadmap:"https://www.sans.org/engage/ai-security-blueprint",
    blurb:"SANS brings large-scale, hands-on AI-security workforce development and credentialing, plus community-authored standards like the Critical AI Security Guidelines.",
    resources:[
      {name:"Critical AI Security Guidelines", url:"https://www.sans.org/mlp/critical-ai-security-guidelines/", types:["Control model"], stage:"Published, iterating", date:"v1.0 Mar 2025", featured:true, desc:"A control set for securing GenAI across six areas, built as a community effort."},
      {name:"Secure AI Blueprint", url:"https://www.sans.org/engage/ai-security-blueprint", types:["Guide: process"], stage:"Published", date:"Sep 2025", featured:true, desc:"A three-track framework: Protect AI, Utilize AI, Govern AI."},
      {name:"SEC545: GenAI and LLM Application Security", url:"https://www.sans.org/cyber-security-courses/genai-llm-application-security", types:["Training"], stage:"Published, ongoing", date:"?-?", featured:true, desc:"Hands-on course on securing GenAI and LLM apps in production."},
      {name:"GIAC AI certifications", url:"https://www.giac.org/certifications", types:["Training"], stage:"Published, ongoing", date:"?-?", featured:true, desc:"AI credentials including GAIPS, GAIPT, and GMLE."},
      {name:"SEC536: Adversarial AI Penetration Testing", url:"https://www.sans.org/cyber-security-courses/adversarial-ai", types:["Training"], stage:"Published, ongoing", date:"?-?", featured:false, desc:"Attacks on enterprise AI paired with defensive controls."},
      {name:"SEC595: Applied Data Science and ML for Cyber", url:"https://www.sans.org/cyber-security-certifications/machine-learning-engineer-gmle", types:["Training"], stage:"Published, ongoing", date:"?-?", featured:false, desc:"Applying data science and ML to security problems."}
    ]
  },
  {
    key:"biml", name:"Berryville Institute of Machine Learning", short:"BIML", logo:"assets/members/BIML.png",
    url:"https://berryvilleiml.com/", type:"Research institute (nonprofit)", geo:"US (Berryville, VA)",
    scope:"Architectural, design-level risk analysis of ML and LLM systems.",
    liaison:"Katy McMahon", liaisonConfirmed:true,
    deliverables:"https://berryvilleiml.com/results/",
    roadmap:"",
    blurb:"BIML pioneered architectural risk analysis of ML and LLM systems, bringing an engineering-first threat-modeling view that locates risk in system design.",
    resources:[
      {name:"Architectural Risk Analysis of ML Systems", url:"https://berryvilleiml.com/results/ara.pdf", types:["Threat model"], stage:"Published", date:"Jan 2020", featured:true, desc:"Design-level analysis cataloging 78 ML security risks (the BIML-78) and a top 10."},
      {name:"Architectural Risk Analysis of LLMs", url:"https://berryvilleiml.com/results/BIML-LLM24.pdf", types:["Threat model"], stage:"Published", date:"Jan 2024", featured:true, desc:"81 LLM-specific risks with the 10 most important highlighted."},
      {name:"Interactive ML Risk Framework", url:"https://berryvilleiml.com/results/interactive", types:["Threat model","Tool"], stage:"Published, ongoing", date:"2020", featured:true, desc:"A browsable version of the 78 ML risks mapped onto the ML process."},
      {name:"23 Security Risks in Black-Box LLM Foundation Models", url:"https://berryvilleiml.com/results/", types:["Threat model"], stage:"Published", date:"Apr 2024", featured:false, desc:"Peer-reviewed article isolating 23 risks specific to black-box foundation models."},
      {name:"Security Engineering for Machine Learning", url:"https://berryvilleiml.com/results/", types:["Guide: technical"], stage:"Published", date:"Aug 2019", featured:false, desc:"Early article framing the case to engineer security into ML systems."},
      {name:"No Security Meter for AI", url:"https://berryvilleiml.com/results/", types:["Other"], stage:"Published", date:"May 2026", featured:false, desc:"Recent position paper arguing AI security cannot be reduced to a single metric."}
    ]
  }
];

/* ==========================================================================
   Prachi Jain - Portfolio Interactions & Modal Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- Theme Toggle (Dark / Light) ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  // --- Mobile Navigation Menu ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // --- Active Nav Spy on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 150;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove('active'));
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });

  // --- Project Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- Project Modal Data (Tailored to Prachi's Resume) ---
  const projectDetails = {
    'project-capacity': {
      tag: 'Automation & Operations Analytics',
      title: 'Capacity Planning & Workload Forecasting Tool',
      description: 'An enterprise capacity planning tool engineered using Python and MySQL to model fluctuating operational workloads, balance staffing requirements, and eliminate manual scheduling bottlenecks.',
      architecture: `[Operational Workload & Ticket Streams]
                   │
                   ▼
     [Python ETL Pipeline (Pandas / NumPy)] ──> [Forecasting & Allocation Model]
                   │                                          │
                   ▼                                          ▼
     [MySQL Central Analytics Warehouse] <───────── [Calculated Headcount Needs]
                   │
                   ▼
     [Interactive Looker Dashboards] ──> [Real-time Capacity & Utilization Alerts]`,
      keyMetrics: [
        'Automated recurring reporting workflows, drastically reducing manual calculation overhead',
        'Built interactive Looker dashboards visualizing capacity, shift utilization, and KPIs',
        'Enabled data-driven workforce planning and proactive workload balancing for leadership'
      ],
      stack: 'Python (Pandas, NumPy), MySQL, Looker, Workflow Automation'
    },
    'project-migration': {
      tag: 'BI Modernization & Enterprise Migration',
      title: 'Operational Dashboard Migration & Integration',
      description: 'End-to-end migration and system integration initiative transitioning legacy analytics from NICE to Observe.AI, and migrating complex enterprise dashboards from Looker into lightweight, interactive Streamlit apps using Cursor AI.',
      architecture: `[Call & Interaction Data (Observe.AI & NICE)]
                   │
                   ▼
     [ETL Validation & Data Quality Layer]
                   │
                   ▼
     [Looker Legacy Dashboards] ──[Cursor AI Accelerated Migration]──> [Streamlit Application]
                                                                            │
                                                                            ▼
                                                      [Instant Metric Slicing & Stakeholder Reports]`,
      keyMetrics: [
        'Seamless integration of Observe.AI interaction data into business reporting pipelines',
        'Successfully migrated dashboards from Looker to Streamlit with enhanced interactivity',
        'Leveraged Cursor AI to accelerate Python & Streamlit component development by over 50%'
      ],
      stack: 'Streamlit, Looker, Observe.AI, NICE, Python, Cursor AI'
    },
    'project-squash': {
      tag: 'Sports Analytics & Data Quality QA',
      title: 'Squash Player Performance Analytics Dashboard',
      description: 'An end-to-end Power BI analytics solution evaluating squash player match metrics, physical fatigue indicators, and game dynamics. Features a rigorous data validation and cleansing pipeline that slashed data errors by 38%.',
      architecture: `[Raw Performance & Match Tracking Logs]
                   │
                   ▼
     [SQL Extraction & Query Optimization]
                   │
                   ▼
     [Pandas & Advanced Excel Cleansing Layer] ──> [Quality Assurance Check with QA Analysts]
                   │                                          │
                   ▼ (38% Inconsistency Reduction)            ▼
     [Star Schema Data Model in Power BI] <───────────────────┘
                   │
                   ▼
     [Interactive Player Scorecards, Win-Rate Drill-Downs & Executive Visuals]`,
      keyMetrics: [
        'Reduced dataset inconsistencies by 38% through rigorous automated QA checks',
        'Standardized metadata and documentation for reporting pipelines, ensuring audit readiness',
        'Delivered intuitive interactive Power BI dashboards enabling stakeholders to make data-driven decisions'
      ],
      stack: 'Power BI, SQL, Python (Pandas), Advanced Excel, Data Quality QA'
    },
    'project-nlp': {
      tag: 'NLP, Data Cleaning & Preprocessing',
      title: 'Text Data Cleaning & Preparation for NLP Chatbot',
      description: 'Data curation and preprocessing pipeline designed to transform messy, unorganized conversational text into a high-quality structured training corpus for an intelligent AI chatbot.',
      architecture: `[Unstructured Customer Chats & Multi-Source Logs]
                   │
                   ▼
     [Text Normalization, Regex Filtering & Deduplication]
                   │
                   ▼
     [Quality Checks & Sensitive Pattern Scrubbing]
                   │
                   ▼
     [Metadata Standardization & Compliance Tagging]
                   │
                   ▼
     [High-Fidelity Structured Dataset Ready for Conversational NLP Modeling]`,
      keyMetrics: [
        'Guaranteed 100% adherence to organizational data governance and metadata standards',
        'Eliminated duplicate records and noisy customer chat interactions',
        'Delivered pristine, structured datasets ready for direct consumption by NLP algorithms'
      ],
      stack: 'Python, Regular Expressions, Data Cleaning, Metadata Standards, NLP'
    }
  };

  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalTarget = document.getElementById('modal-content-target');
  const modalTriggers = document.querySelectorAll('.modal-trigger');

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const projId = trigger.getAttribute('data-project');
      const data = projectDetails[projId];
      if (!data) return;

      modalTarget.innerHTML = `
        <span class="modal-header-tag">${data.tag}</span>
        <h2 class="modal-title">${data.title}</h2>
        <p style="color: var(--text-muted); line-height: 1.6;">${data.description}</p>
        
        <h4 class="modal-section-title"><i class="fa-solid fa-network-wired"></i> Architecture &amp; Workflow</h4>
        <div class="modal-arch-box">${data.architecture}</div>

        <h4 class="modal-section-title"><i class="fa-solid fa-chart-line"></i> Key Outcomes &amp; Impact</h4>
        <ul style="padding-left: 1.2rem; color: var(--text-muted); font-size: 0.95rem; line-height: 1.8;">
          ${data.keyMetrics.map((m) => `<li>${m}</li>`).join('')}
        </ul>

        <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--card-border); font-size: 0.85rem; color: var(--text-subtle);">
          <strong>Core Technologies:</strong> ${data.stack}
        </div>
      `;

      modalOverlay.classList.add('active');
      modalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // --- Copy Email to Clipboard ---
  const copyBtn = document.getElementById('copy-email-btn');
  const emailSpan = document.getElementById('email-address');
  const toast = document.getElementById('toast');

  if (copyBtn && emailSpan) {
    copyBtn.addEventListener('click', () => {
      const email = emailSpan.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: ' + email);
      }).catch(() => {
        showToast('Press Ctrl+C to copy: ' + email);
      });
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
});

// --- Contact Form Handler ---
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const subject = document.getElementById('form-subject').value;
  const message = document.getElementById('form-message').value;

  // Open default mail client directly to Prachi
  const mailtoUrl = `mailto:prachijain6699@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
  window.location.href = mailtoUrl;

  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = "Opening your email app to message Prachi...";
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

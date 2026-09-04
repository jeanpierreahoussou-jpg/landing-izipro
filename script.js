/**
 * LIVRE EXPRESS ABIDJAN - Interactive Logic
 * Handles calculator, modal booking, mobile menu, scroll effects & dynamic toasts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Theme Toggle (Dark / Light Mode)
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  const sidebarThemeLabel = document.getElementById('sidebar-theme-label');

  function updateThemeLabel(isDark) {
    if (sidebarThemeLabel) {
      sidebarThemeLabel.textContent = isDark ? 'Mode Sombre 🌙' : 'Mode Clair ☀️';
    }
  }

  // Init label
  const initialDark = document.documentElement.getAttribute('data-theme') === 'dark';
  updateThemeLabel(initialDark);

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      updateThemeLabel(true);
    } else {
      document.documentElement.removeAttribute('data-theme');
      updateThemeLabel(false);
    }
    
    localStorage.setItem('theme', newTheme);
    showToast(newTheme === 'dark' ? '🌙 Mode Sombre activé' : '☀️ Mode Clair activé', '🎨');
  }

  themeToggles.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // 1. Navbar Scroll Effect & Active Link Highlight
  const header = document.getElementById('header');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const sections = document.querySelectorAll('section, main > div');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy for navigation
    let currentSection = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.getAttribute('id');
      }
    });

    sidebarLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. Sidebar Drawer (Barre Latérale)
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarClose = document.getElementById('sidebar-close');
  const sidebarDrawer = document.getElementById('sidebar-drawer');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const btnOpenSidebar = document.getElementById('btn-open-modal-sidebar');

  function openSidebar() {
    if (sidebarDrawer && sidebarOverlay) {
      sidebarDrawer.classList.add('active');
      sidebarOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeSidebar() {
    if (sidebarDrawer && sidebarOverlay) {
      sidebarDrawer.classList.remove('active');
      sidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (sidebarToggle) sidebarToggle.addEventListener('click', openSidebar);
  if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeSidebar();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebar();
      if (window.closeOrderModal) window.closeOrderModal();
      if (window.closeCalculatorModal) window.closeCalculatorModal();
    }
  });

  // 3. Pricing Calculator Engine (Abidjan Zones Matrix)
  const pickupSelect = document.getElementById('pickup-commune');
  const dropoffSelect = document.getElementById('dropoff-commune');
  const pkgOptions = document.querySelectorAll('.package-option');
  const calcPriceDisplay = document.getElementById('calc-price-display');
  const calcEtaDisplay = document.getElementById('calc-eta');
  const calcDistanceType = document.getElementById('calc-distance-type');
  const btnCalcOrder = document.getElementById('btn-calc-order');

  // Zones groupings for realistic pricing
  const zones = {
    nord: ['cocody', 'abobo', 'bingerville'],
    centre: ['plateau', 'adjame'],
    sud: ['marcory', 'treichville', 'koumassi', 'port-bouet'],
    ouest: ['yopougon']
  };

  function getZone(commune) {
    for (const [zoneName, communes] of Object.entries(zones)) {
      if (communes.includes(commune)) return zoneName;
    }
    return 'centre';
  }

  function calculatePrice() {
    if (!pickupSelect || !dropoffSelect) return;

    const pickup = pickupSelect.value;
    const dropoff = dropoffSelect.value;
    const selectedPkg = document.querySelector('input[name="pkg_type"]:checked')?.value || 'doc';

    let basePrice = 2000;
    let eta = '35 - 45 min';
    let typeLabel = 'Inter-Communes';

    if (pickup === dropoff) {
      basePrice = 1500;
      eta = '20 - 35 min';
      typeLabel = 'Intra-Commune (Même zone)';
    } else if (pickup === 'bingerville' || dropoff === 'bingerville' || pickup === 'port-bouet' || dropoff === 'port-bouet') {
      basePrice = 3000;
      eta = '50 - 65 min';
      typeLabel = 'Zone Périphérique / Aéroport';
    } else if (pickup === 'yopougon' || dropoff === 'yopougon') {
      basePrice = 2800;
      eta = '45 - 60 min';
      typeLabel = 'Grand Abidjan Ouest (Yopougon)';
    } else {
      const z1 = getZone(pickup);
      const z2 = getZone(dropoff);

      if (z1 === z2) {
        basePrice = 1800;
        eta = '30 - 40 min';
        typeLabel = 'Communes voisines';
      } else if ((z1 === 'nord' && z2 === 'sud') || (z1 === 'sud' && z2 === 'nord')) {
        basePrice = 2500;
        eta = '40 - 55 min';
        typeLabel = 'Traversée Nord-Sud (Pont HKB/Lagune)';
      } else {
        basePrice = 2200;
        eta = '35 - 50 min';
        typeLabel = 'Inter-Communes Standard';
      }
    }

    // Package adjustments
    if (selectedPkg === 'box') {
      basePrice += 500;
    } else if (selectedPkg === 'urgent') {
      basePrice += 1000;
      eta = '< 35 min (Priorité VIP)';
    }

    // Format FCFA
    const formattedPrice = basePrice.toLocaleString('fr-FR');
    if (calcPriceDisplay) {
      calcPriceDisplay.innerHTML = `${formattedPrice} <span class="calc-price-unit">FCFA</span>`;
    }
    if (calcEtaDisplay) calcEtaDisplay.textContent = eta;
    if (calcDistanceType) calcDistanceType.textContent = typeLabel;
  }

  // Bind calculator events
  if (pickupSelect) pickupSelect.addEventListener('change', calculatePrice);
  if (dropoffSelect) dropoffSelect.addEventListener('change', calculatePrice);

  pkgOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      pkgOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      calculatePrice();
    });
  });

  // Calculate initially
  calculatePrice();

  // Booking from Inline Calculator Button
  if (btnCalcOrder) {
    btnCalcOrder.addEventListener('click', () => {
      const pCommune = pickupSelect.options[pickupSelect.selectedIndex].text;
      const dCommune = dropoffSelect.options[dropoffSelect.selectedIndex].text;
      const priceText = calcPriceDisplay ? calcPriceDisplay.innerText : '2 500 FCFA';

      openOrderModalWithCustom(`Course ${pCommune} ➔ ${dCommune} (${priceText})`, pCommune, dCommune);
    });
  }

  // 3b. Modal Calculator Engine (Popup)
  const calcModal = document.getElementById('calculator-modal');
  const calcModalCloseBtn = document.getElementById('calc-modal-close-btn');
  const heroBtnCalc = document.getElementById('hero-btn-calc');
  const modalPickupSelect = document.getElementById('modal-pickup-commune');
  const modalDropoffSelect = document.getElementById('modal-dropoff-commune');
  const modalPkgOptions = document.querySelectorAll('.modal-pkg-option');
  const modalPriceDisplay = document.getElementById('modal-calc-price-display');
  const modalEtaDisplay = document.getElementById('modal-calc-eta');
  const modalDistanceType = document.getElementById('modal-calc-distance-type');
  const modalBtnOrderDirect = document.getElementById('modal-btn-order-direct');
  const modalCalcWaBtn = document.getElementById('modal-calc-wa-btn');

  function openCalculatorModal() {
    if (calcModal) {
      calcModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      calculateModalPrice();
    }
  }

  window.closeCalculatorModal = function() {
    if (calcModal) {
      calcModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (heroBtnCalc) {
    heroBtnCalc.addEventListener('click', (e) => {
      e.preventDefault();
      openCalculatorModal();
    });
  }

  if (calcModalCloseBtn) calcModalCloseBtn.addEventListener('click', closeCalculatorModal);
  if (calcModal) {
    calcModal.addEventListener('click', (e) => {
      if (e.target === calcModal) closeCalculatorModal();
    });
  }

  function calculateModalPrice() {
    if (!modalPickupSelect || !modalDropoffSelect) return;

    const pickup = modalPickupSelect.value;
    const dropoff = modalDropoffSelect.value;
    const selectedPkg = document.querySelector('input[name="modal_pkg_type"]:checked')?.value || 'doc';

    let basePrice = 2000;
    let eta = '35 - 45 min chrono';
    let typeLabel = 'Inter-Communes';

    if (pickup === dropoff) {
      basePrice = 1500;
      eta = '20 - 35 min';
      typeLabel = 'Intra-Commune (Même zone)';
    } else if (pickup === 'bingerville' || dropoff === 'bingerville' || pickup === 'port-bouet' || dropoff === 'port-bouet') {
      basePrice = 3000;
      eta = '50 - 65 min';
      typeLabel = 'Zone Périphérique / Aéroport';
    } else if (pickup === 'yopougon' || dropoff === 'yopougon') {
      basePrice = 2800;
      eta = '45 - 60 min';
      typeLabel = 'Grand Abidjan Ouest (Yopougon)';
    } else {
      const z1 = getZone(pickup);
      const z2 = getZone(dropoff);

      if (z1 === z2) {
        basePrice = 1800;
        eta = '30 - 40 min';
        typeLabel = 'Communes voisines';
      } else if ((z1 === 'nord' && z2 === 'sud') || (z1 === 'sud' && z2 === 'nord')) {
        basePrice = 2500;
        eta = '40 - 55 min';
        typeLabel = 'Traversée Nord-Sud (Pont HKB)';
      } else {
        basePrice = 2200;
        eta = '35 - 50 min';
        typeLabel = 'Inter-Communes Standard';
      }
    }

    if (selectedPkg === 'box') {
      basePrice += 500;
    } else if (selectedPkg === 'urgent') {
      basePrice += 1000;
      eta = '< 35 min (Priorité VIP)';
    }

    const formattedPrice = basePrice.toLocaleString('fr-FR');
    if (modalPriceDisplay) modalPriceDisplay.textContent = formattedPrice;
    if (modalEtaDisplay) modalEtaDisplay.textContent = `⚡ ${eta}`;
    if (modalDistanceType) modalDistanceType.textContent = typeLabel;

    if (modalCalcWaBtn) {
      const pText = modalPickupSelect.options[modalPickupSelect.selectedIndex].text;
      const dText = modalDropoffSelect.options[modalDropoffSelect.selectedIndex].text;
      const waMsg = `Bonjour Livre Express 🇨🇮⚡\n\nJe souhaite estimer une livraison :\n📍 De : ${pText}\n🎯 Vers : ${dText}\n💰 Estimation : ${formattedPrice} FCFA\n⏱️ Délai : ${eta}\n\nPouvez-vous me confirmer la disponibilité d'un coursier ?`;
      modalCalcWaBtn.href = `https://wa.me/2250700001234?text=${encodeURIComponent(waMsg)}`;
    }
  }

  if (modalPickupSelect) modalPickupSelect.addEventListener('change', calculateModalPrice);
  if (modalDropoffSelect) modalDropoffSelect.addEventListener('change', calculateModalPrice);

  modalPkgOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      modalPkgOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      calculateModalPrice();
    });
  });

  if (modalBtnOrderDirect) {
    modalBtnOrderDirect.addEventListener('click', () => {
      const pCommune = modalPickupSelect.options[modalPickupSelect.selectedIndex].text;
      const dCommune = modalDropoffSelect.options[modalDropoffSelect.selectedIndex].text;
      const priceText = modalPriceDisplay ? `${modalPriceDisplay.innerText} FCFA` : '2 500 FCFA';

      closeCalculatorModal();
      openOrderModalWithCustom(`Course ${pCommune} ➔ ${dCommune} (${priceText})`, pCommune, dCommune);
    });
  }

  // 4. Modal Event Handlers
  const modalOverlay = document.getElementById('order-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const btnOpenNav = document.getElementById('btn-open-modal-nav');
  const btnOpenMobile = document.getElementById('btn-open-modal-mobile');
  const heroBtnOrder = document.getElementById('hero-btn-order');
  const btnBannerOrder = document.getElementById('btn-banner-order');

  function openModal() {
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  window.closeOrderModal = function() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
      
      // Reset form after short delay
      setTimeout(() => {
        const form = document.getElementById('express-booking-form');
        const successBox = document.getElementById('order-success-box');
        if (form) form.style.display = 'block';
        if (successBox) successBox.style.display = 'none';
      }, 300);
    }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeOrderModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeOrderModal();
    });
  }

  if (btnOpenNav) btnOpenNav.addEventListener('click', () => openModal());
  if (btnOpenSidebar) btnOpenSidebar.addEventListener('click', () => {
    closeSidebar();
    openModal();
  });
  if (btnOpenMobile) btnOpenMobile.addEventListener('click', () => openModal());
  if (heroBtnOrder) heroBtnOrder.addEventListener('click', () => openModal());
  if (btnBannerOrder) btnBannerOrder.addEventListener('click', () => openModal());

  window.openOrderModalWithPlan = function(planName) {
    const planInput = document.getElementById('order-plan-name');
    if (planInput) planInput.value = `Formule : ${planName}`;
    openModal();
  };

  window.openOrderModalWithCustom = function(planText, pickup, dropoff) {
    const planInput = document.getElementById('order-plan-name');
    const pickupInput = document.getElementById('order-pickup-loc');
    const dropoffInput = document.getElementById('order-dropoff-loc');

    if (planInput) planInput.value = planText;
    if (pickupInput && pickup) pickupInput.value = pickup;
    if (dropoffInput && dropoff) dropoffInput.value = dropoff;

    openModal();
  };

  // 5. Modal Form Submission Simulation
  window.handleOrderSubmit = function(event) {
    event.preventDefault();
    const form = document.getElementById('express-booking-form');
    const successBox = document.getElementById('order-success-box');
    const trackingIdSpan = document.getElementById('success-tracking-id');
    const submitBtn = document.getElementById('submit-order-btn');
    const whatsappBtn = document.getElementById('whatsapp-order-confirm-btn');

    // Gather form values for WhatsApp message
    const planName = document.getElementById('order-plan-name')?.value || 'Course Express Pro';
    const senderName = document.getElementById('order-sender-name')?.value || 'Client';
    const phone = document.getElementById('order-phone')?.value || '';
    const pickupLoc = document.getElementById('order-pickup-loc')?.value || '';
    const dropoffLoc = document.getElementById('order-dropoff-loc')?.value || '';
    const pkgDetails = document.getElementById('order-pkg-details')?.value || 'Non spécifié';
    const paymentSelect = document.getElementById('order-payment');
    const payment = paymentSelect ? paymentSelect.options[paymentSelect.selectedIndex].text : 'Wave / Espèces';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Attribution du coursier moto en cours...';
    }

    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const trackingCode = `LX-${new Date().getFullYear()}-ABJ${randomNum}`;

      if (trackingIdSpan) trackingIdSpan.textContent = trackingCode;
      if (form) form.style.display = 'none';
      if (successBox) successBox.style.display = 'block';

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = '✅ Confirmer et envoyer le coursier';
      }

      // Configure dynamic WhatsApp recap link
      if (whatsappBtn) {
        const waMsg = `Bonjour Livre Express 🇨🇮⚡\n\nJe viens d'enregistrer une course sur le site :\n\n📌 *Code Suivi :* ${trackingCode}\n📋 *${planName}*\n👤 *Client :* ${senderName}\n📞 *Téléphone :* ${phone}\n📍 *Ramassage :* ${pickupLoc}\n🎯 *Livraison :* ${dropoffLoc}\n📦 *Colis :* ${pkgDetails}\n💳 *Paiement :* ${payment}\n\nMerci de m'assigner un coursier rapidement ! 🛵`;
        whatsappBtn.href = `https://wa.me/2250700001234?text=${encodeURIComponent(waMsg)}`;
      }

      // Add dynamic toast
      showToast(`🎉 Course enregistrée avec succès ! Code : ${trackingCode}`);
    }, 900);
  };

  // 6. Dynamic Live Notification / Social Proof Toasts
  const toastContainer = document.getElementById('toast-container');
  const toastMessages = [
    { text: '⚡ Course livrée : Cocody Angré ➔ Plateau (34 min)', icon: '🟢' },
    { text: '📦 Nouveau colis pris en charge à Marcory Zone 4', icon: '🛵' },
    { text: '🚀 Coursier assigné à Yopougon pour Cocody', icon: '⚡' },
    { text: '💳 Encaissement Wave de 45 000 FCFA réussi à Koumassi', icon: '✅' },
    { text: '📍 Course terminée à Treichville en 28 minutes', icon: '🏆' }
  ];

  function showToast(message, icon = '⚡') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="font-size: 1.2rem;">${icon}</span>
      <div>
        <strong>Livre Express Direct</strong>
        <p style="margin: 0; font-size: 0.8rem;">${message}</p>
      </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-30px)';
      toast.style.transition = 'all 0.4s ease-out';
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  // Periodic toast appearance (social proof)
  let toastIndex = 0;
  setInterval(() => {
    const item = toastMessages[toastIndex % toastMessages.length];
    showToast(item.text, item.icon);
    toastIndex++;
  }, 16000);

  // Initial toast after 4s
  setTimeout(() => {
    showToast('🛵 12 coursiers Livre Express en patrouille actuellement à Abidjan', '⚡');
  }, 3500);
});

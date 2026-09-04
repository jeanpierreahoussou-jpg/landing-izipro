# 🎨 PROTOTYPE VISUEL : LIVRE EXPRESS ABIDJAN

Bonjour boss ! Voici le **prototype visuel haute fidélité** de votre landing page, montrant exactement le rendu esthétique, la disposition des éléments et la charte graphique **Vert & Blanc**.

---

## 🖥️ 1. Aperçu de la Navbar & Hero Section

```xml
<svg viewBox="0 0 1000 520" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#FAFCFB; border-radius:12px; border:1px solid #E2E8F0; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
  <!-- Header Bar -->
  <rect x="0" y="0" width="1000" height="70" fill="#FFFFFF" />
  <line x1="0" y1="70" x2="1000" y2="70" stroke="#E2E8F0" stroke-width="1" />
  
  <!-- Logo -->
  <rect x="40" y="15" width="40" height="40" rx="8" fill="#059669" />
  <path d="M 62 23 L 52 35 L 61 35 L 58 47 L 68 33 L 60 33 Z" fill="#FFFFFF" />
  <text x="90" y="42" font-size="20" font-weight="800" fill="#064E3B" font-family="'Outfit', sans-serif">Livre<tspan fill="#059669">Express</tspan></text>
  <rect x="235" y="24" width="85" height="22" rx="11" fill="#ECFDF5" stroke="#10B981" stroke-width="1" />
  <text x="245" y="39" font-size="11" font-weight="700" fill="#059669">Abidjan 🇨🇮</text>

  <!-- Nav Links -->
  <text x="440" y="41" font-size="14" font-weight="700" fill="#059669">Accueil</text>
  <text x="510" y="41" font-size="14" font-weight="500" fill="#64748B">Comment ça marche</text>
  <text x="670" y="41" font-size="14" font-weight="500" fill="#64748B">Tarifs</text>
  <text x="730" y="41" font-size="14" font-weight="500" fill="#64748B">Témoignages</text>

  <!-- Nav Button -->
  <rect x="830" y="16" width="130" height="38" rx="8" fill="#059669" />
  <text x="850" y="40" font-size="12" font-weight="700" fill="#FFFFFF">Commander</text>

  <!-- Hero Left Column -->
  <rect x="40" y="105" width="260" height="28" rx="14" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="1" />
  <circle cx="56" cy="119" r="4" fill="#10B981" />
  <text x="68" y="123" font-size="12" font-weight="700" fill="#059669">⚡ Coursiers disponibles à Abidjan</text>

  <text x="40" y="175" font-size="34" font-weight="800" fill="#064E3B" font-family="'Outfit', sans-serif">Vos livraisons à Abidjan</text>
  <text x="40" y="215" font-size="34" font-weight="800" fill="#059669" font-family="'Outfit', sans-serif">en un éclair ⚡</text>

  <text x="40" y="255" font-size="14" fill="#64748B">Livraison de colis, plis et repas en moins de <tspan font-weight="700" fill="#0F172A">45 minutes</tspan></text>
  <text x="40" y="275" font-size="14" fill="#64748B">partout à Cocody, Plateau, Marcory, Yopougon, etc.</text>

  <!-- CTA Buttons -->
  <rect x="40" y="305" width="180" height="46" rx="10" fill="#059669" />
  <text x="65" y="333" font-size="14" font-weight="700" fill="#FFFFFF">⚡ Commander direct</text>

  <rect x="235" y="305" width="150" height="46" rx="10" fill="transparent" stroke="#059669" stroke-width="2" />
  <text x="255" y="333" font-size="14" font-weight="700" fill="#059669">Calculer un tarif</text>

  <!-- Hero Features -->
  <text x="40" y="385" font-size="12" font-weight="600" fill="#0F172A">✓ &lt; 45 min chrono</text>
  <text x="170" y="385" font-size="12" font-weight="600" fill="#0F172A">✓ Colis 100% assuré</text>
  <text x="310" y="385" font-size="12" font-weight="600" fill="#0F172A">✓ Wave, OM & Cash</text>

  <!-- Hero Right Card (Interactive Tracking Mockup) -->
  <g transform="translate(540, 95)">
    <rect x="0" y="0" width="420" height="295" rx="18" fill="#FFFFFF" stroke="#D1FAE5" stroke-width="1.5" filter="drop-shadow(0 15px 25px rgba(5,150,105,0.12))" />
    
    <!-- Top Pill -->
    <rect x="20" y="16" width="180" height="26" rx="13" fill="#ECFDF5" />
    <circle cx="32" cy="29" r="4" fill="#10B981" />
    <text x="42" y="33" font-size="11" font-weight="700" fill="#059669">Course en cours #LX-8492</text>
    <text x="270" y="33" font-size="11" fill="#64748B">Arrivée : <tspan font-weight="700" fill="#059669">14 min</tspan></text>

    <!-- Map Graphic -->
    <rect x="20" y="55" width="380" height="135" rx="10" fill="#F0FDF4" stroke="#D1E7DD" />
    
    <!-- Lagoon Waterway -->
    <path d="M 20 135 Q 150 110, 260 140 T 400 120" fill="none" stroke="#BAE6FD" stroke-width="16" />
    
    <!-- Trajectory Line -->
    <path d="M 60 85 Q 160 70, 220 110 T 340 150" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round" />
    
    <!-- Points -->
    <circle cx="60" cy="85" r="6" fill="#059669" />
    <rect x="40" y="65" width="85" height="18" rx="4" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
    <text x="45" y="77" font-size="9" font-weight="700" fill="#064E3B">📍 Cocody Angré</text>

    <circle cx="340" cy="150" r="6" fill="#DC2626" />
    <rect x="275" y="158" width="95" height="18" rx="4" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
    <text x="280" y="170" font-size="9" font-weight="700" fill="#DC2626">🎯 Marcory Zone 4</text>

    <!-- Driver Card -->
    <rect x="20" y="205" width="380" height="70" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
    <circle cx="55" cy="240" r="20" fill="#059669" />
    <text x="47" y="246" font-size="14" font-weight="700" fill="#FFFFFF">AK</text>
    <text x="88" y="235" font-size="13" font-weight="700" fill="#0F172A">Amadou Koné</text>
    <text x="88" y="252" font-size="11" fill="#64748B">Coursier Moto Express #104</text>
    <text x="290" y="243" font-size="12" font-weight="700" fill="#EAB308">⭐ 4.95 (1.2k avis)</text>
  </g>

  <!-- Metrics Strip Bar -->
  <rect x="0" y="430" width="1000" height="90" fill="#064E3B" />
  
  <text x="125" y="468" font-size="22" font-weight="800" fill="#10B981" text-anchor="middle" font-family="'Outfit', sans-serif">+15 000</text>
  <text x="125" y="490" font-size="11" fill="#CBD5E1" text-anchor="middle">Colis livrés</text>

  <text x="375" y="468" font-size="22" font-weight="800" fill="#10B981" text-anchor="middle" font-family="'Outfit', sans-serif">&lt; 45 min</text>
  <text x="375" y="490" font-size="11" fill="#CBD5E1" text-anchor="middle">Délai moyen</text>

  <text x="625" y="468" font-size="22" font-weight="800" fill="#10B981" text-anchor="middle" font-family="'Outfit', sans-serif">99.4%</text>
  <text x="625" y="490" font-size="11" fill="#CBD5E1" text-anchor="middle">Satisfaction client</text>

  <text x="875" y="468" font-size="22" font-weight="800" fill="#10B981" text-anchor="middle" font-family="'Outfit', sans-serif">100%</text>
  <text x="875" y="490" font-size="11" fill="#CBD5E1" text-anchor="middle">Communes d'Abidjan</text>
</svg>
```

---

## 🔄 2. Section "Comment ça marche" (3 Étapes)

```xml
<svg viewBox="0 0 1000 320" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#FFFFFF; border-radius:12px; border:1px solid #E2E8F0; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
  <!-- Section Title -->
  <text x="500" y="45" font-size="24" font-weight="800" fill="#064E3B" text-anchor="middle" font-family="'Outfit', sans-serif">Comment ça marche en <tspan fill="#059669">3 étapes</tspan> ?</text>
  <text x="500" y="70" font-size="13" fill="#64748B" text-anchor="middle">Une expérience simple, ultra-rapide et sécurisée partout à Abidjan.</text>

  <!-- Step 1 Card -->
  <g transform="translate(40, 95)">
    <rect x="0" y="0" width="285" height="195" rx="14" fill="#FAFCFB" stroke="#E2E8F0" />
    <rect x="20" y="20" width="44" height="44" rx="8" fill="#ECFDF5" />
    <text x="36" y="48" font-size="18" fill="#059669">📱</text>
    <text x="240" y="48" font-size="28" font-weight="800" fill="#E2E8F0" font-family="'Outfit', sans-serif">01</text>
    
    <text x="20" y="95" font-size="16" font-weight="700" fill="#0F172A">1. Commandez en 1 clic</text>
    <text x="20" y="125" font-size="12" fill="#64748B">Renseignez les adresses de départ</text>
    <text x="20" y="143" font-size="12" fill="#64748B">et d'arrivée via le site ou WhatsApp.</text>
    
    <text x="20" y="175" font-size="11" font-weight="700" fill="#059669">⚡ Prêt en 30 secondes</text>
  </g>

  <!-- Step 2 Card -->
  <g transform="translate(357, 95)">
    <rect x="0" y="0" width="285" height="195" rx="14" fill="#FAFCFB" stroke="#E2E8F0" />
    <rect x="20" y="20" width="44" height="44" rx="8" fill="#ECFDF5" />
    <text x="36" y="48" font-size="18" fill="#059669">🛵</text>
    <text x="240" y="48" font-size="28" font-weight="800" fill="#E2E8F0" font-family="'Outfit', sans-serif">02</text>
    
    <text x="20" y="95" font-size="16" font-weight="700" fill="#0F172A">2. Coursier assigné direct</text>
    <text x="20" y="125" font-size="12" fill="#64748B">Le motard le plus proche récupère</text>
    <text x="20" y="143" font-size="12" fill="#64748B">votre colis en moins de 15 minutes.</text>
    
    <text x="20" y="175" font-size="11" font-weight="700" fill="#059669">📍 Suivi SMS / GPS en direct</text>
  </g>

  <!-- Step 3 Card -->
  <g transform="translate(675, 95)">
    <rect x="0" y="0" width="285" height="195" rx="14" fill="#FAFCFB" stroke="#E2E8F0" />
    <rect x="20" y="20" width="44" height="44" rx="8" fill="#ECFDF5" />
    <text x="36" y="48" font-size="18" fill="#059669">✅</text>
    <text x="240" y="48" font-size="28" font-weight="800" fill="#E2E8F0" font-family="'Outfit', sans-serif">03</text>
    
    <text x="20" y="95" font-size="16" font-weight="700" fill="#0F172A">3. Livraison & Paiement</text>
    <text x="20" y="125" font-size="12" fill="#64748B">Remise sécurisée par code OTP.</text>
    <text x="20" y="143" font-size="12" fill="#64748B">Règlement Wave, Mobile Money ou Cash.</text>
    
    <text x="20" y="175" font-size="11" font-weight="700" fill="#059669">🛡️ Reçu instantané</text>
  </g>
</svg>
```

---

## 💰 3. Section Tarifs (3 Offres en FCFA)

```xml
<svg viewBox="0 0 1000 370" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#FAFCFB; border-radius:12px; border:1px solid #E2E8F0; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
  <!-- Section Title -->
  <text x="500" y="40" font-size="24" font-weight="800" fill="#064E3B" text-anchor="middle" font-family="'Outfit', sans-serif">Nos <tspan fill="#059669">3 Formules</tspan> Transparentes</text>
  
  <!-- Plan 1 : Standard -->
  <g transform="translate(40, 65)">
    <rect x="0" y="0" width="285" height="280" rx="16" fill="#FFFFFF" stroke="#E2E8F0" />
    <text x="20" y="35" font-size="18" font-weight="800" fill="#064E3B">Formule Standard</text>
    <text x="20" y="55" font-size="11" fill="#64748B">Pour vos courses intra-commune</text>
    
    <text x="20" y="105" font-size="32" font-weight="800" fill="#0F172A" font-family="'Outfit', sans-serif">1 500 <tspan font-size="14" fill="#059669">FCFA</tspan></text>
    <line x1="20" y1="125" x2="265" y2="125" stroke="#E2E8F0" />
    
    <text x="20" y="155" font-size="12" fill="#475569">✓ Même commune (ex: Cocody)</text>
    <text x="20" y="180" font-size="12" fill="#475569">✓ Délai : 1h30 à 2h</text>
    <text x="20" y="205" font-size="12" fill="#475569">✓ Notification SMS</text>
    
    <rect x="20" y="225" width="245" height="38" rx="8" fill="transparent" stroke="#059669" stroke-width="1.5" />
    <text x="142" y="249" font-size="12" font-weight="700" fill="#059669" text-anchor="middle">Choisir Standard</text>
  </g>

  <!-- Plan 2 : Express Pro (Featured Card) -->
  <g transform="translate(357, 50)">
    <rect x="0" y="0" width="285" height="300" rx="16" fill="#FFFFFF" stroke="#059669" stroke-width="2.5" filter="drop-shadow(0 10px 20px rgba(5,150,105,0.15))" />
    
    <!-- Popular Ribbon -->
    <rect x="75" y="-12" width="135" height="24" rx="12" fill="#059669" />
    <text x="142" y="4" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">⭐ LE PLUS DEMANDÉ</text>

    <text x="20" y="45" font-size="18" font-weight="800" fill="#059669">Express Pro</text>
    <text x="20" y="65" font-size="11" fill="#64748B">Priorité absolue à travers Abidjan</text>
    
    <text x="20" y="115" font-size="34" font-weight="800" fill="#0F172A" font-family="'Outfit', sans-serif">2 500 <tspan font-size="14" fill="#059669">FCFA</tspan></text>
    <line x1="20" y1="135" x2="265" y2="135" stroke="#E2E8F0" />
    
    <text x="20" y="165" font-size="12" font-weight="700" fill="#064E3B">✓ Inter-communes tout Abidjan</text>
    <text x="20" y="190" font-size="12" font-weight="700" fill="#064E3B">✓ Livré en moins de 45 min</text>
    <text x="20" y="215" font-size="12" fill="#475569">✓ Suivi GPS & Code OTP</text>
    
    <rect x="20" y="240" width="245" height="42" rx="8" fill="#059669" />
    <text x="142" y="266" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">Commander en Express</text>
  </g>

  <!-- Plan 3 : Pack Pro / E-Commerce -->
  <g transform="translate(675, 65)">
    <rect x="0" y="0" width="285" height="280" rx="16" fill="#FFFFFF" stroke="#E2E8F0" />
    <text x="20" y="35" font-size="18" font-weight="800" fill="#064E3B">Pack E-Commerce</text>
    <text x="20" y="55" font-size="11" fill="#64748B">Pour boutiques & commerçants</text>
    
    <text x="20" y="105" font-size="32" font-weight="800" fill="#0F172A" font-family="'Outfit', sans-serif">1 200 <tspan font-size="14" fill="#059669">FCFA</tspan></text>
    <line x1="20" y1="125" x2="265" y2="125" stroke="#E2E8F0" />
    
    <text x="20" y="155" font-size="12" fill="#475569">✓ Encaissement COD à la livraison</text>
    <text x="20" y="180" font-size="12" fill="#475569">✓ Reversement Wave sous 24h</text>
    <text x="20" y="205" font-size="12" fill="#475569">✓ Retours gratuits d'articles</text>
    
    <rect x="20" y="225" width="245" height="38" rx="8" fill="transparent" stroke="#059669" stroke-width="1.5" />
    <text x="142" y="249" font-size="12" font-weight="700" fill="#059669" text-anchor="middle">Pack E-Commerce</text>
  </g>
</svg>
```

---

## 💬 4. Témoignages Clients & Footer

```xml
<svg viewBox="0 0 1000 360" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="background:#091E16; border-radius:12px; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
  <!-- Reviews Title -->
  <text x="500" y="45" font-size="22" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="'Outfit', sans-serif">Témoignages & Avis Clients</text>
  
  <!-- Review 1 -->
  <g transform="translate(40, 70)">
    <rect x="0" y="0" width="285" height="135" rx="12" fill="#132E24" stroke="rgba(16,185,129,0.2)" />
    <text x="20" y="30" font-size="14" fill="#EAB308">★★★★★</text>
    <text x="20" y="55" font-size="11" fill="#CBD5E1">"Mes clientes reçoivent leurs robes</text>
    <text x="20" y="72" font-size="11" fill="#CBD5E1">en moins d'1h. Reversements Wave réguliers !"</text>
    <text x="20" y="105" font-size="12" font-weight="700" fill="#FFFFFF">Marie Koné</text>
    <text x="20" y="120" font-size="10" fill="#10B981">Mode • Cocody Angré</text>
  </g>

  <!-- Review 2 -->
  <g transform="translate(357, 70)">
    <rect x="0" y="0" width="285" height="135" rx="12" fill="#132E24" stroke="rgba(16,185,129,0.2)" />
    <text x="20" y="30" font-size="14" fill="#EAB308">★★★★★</text>
    <text x="20" y="55" font-size="11" fill="#CBD5E1">"Fiabilité absolue pour nos plis</text>
    <text x="20" y="72" font-size="11" fill="#CBD5E1">urgents entre Plateau et Marcory."</text>
    <text x="20" y="105" font-size="12" font-weight="700" fill="#FFFFFF">Dr. I. Coulibaly</text>
    <text x="20" y="120" font-size="10" fill="#10B981">Clinique • Plateau</text>
  </g>

  <!-- Review 3 -->
  <g transform="translate(675, 70)">
    <rect x="0" y="0" width="285" height="135" rx="12" fill="#132E24" stroke="rgba(16,185,129,0.2)" />
    <text x="20" y="30" font-size="14" fill="#EAB308">★★★★★</text>
    <text x="20" y="55" font-size="11" fill="#CBD5E1">"Sacs isothermes nickels, gâteaux</text>
    <text x="20" y="72" font-size="11" fill="#CBD5E1">et repas toujours intacts."</text>
    <text x="20" y="105" font-size="12" font-weight="700" fill="#FFFFFF">Yasmine Bamba</text>
    <text x="20" y="120" font-size="10" fill="#10B981">Pâtisserie • Zone 4 Marcory</text>
  </g>

  <!-- Footer Info Line -->
  <line x1="40" y1="230" x2="960" y2="230" stroke="rgba(255,255,255,0.1)" />
  
  <text x="40" y="270" font-size="16" font-weight="800" fill="#FFFFFF">Livre<tspan fill="#10B981">Express</tspan> Abidjan</text>
  <text x="40" y="295" font-size="11" fill="#94A3B8">Cocody Deux-Plateaux Vallon, Rue des Jardins</text>
  <text x="40" y="315" font-size="11" fill="#94A3B8">📞 +225 07 00 00 12 34 / 05 00 00 56 78</text>

  <!-- Social Media & Payment Badges -->
  <text x="680" y="270" font-size="13" font-weight="700" fill="#FFFFFF">Moyens de paiement acceptés :</text>
  <text x="680" y="295" font-size="11" fill="#10B981">Wave • Orange Money • MTN • Espèces</text>
  <text x="680" y="325" font-size="10" fill="#64748B">© 2026 Livre Express. Tous droits réservés.</text>
</svg>
```

---

## ⚡ 5. Fichiers du Code Source Directement Accessibles

1. 🌐 [index.html](file:///c:/Users/Dell/Nouveau%20dossier%20(2)/index.html)
2. 🎨 [style.css](file:///c:/Users/Dell/Nouveau%20dossier%20(2)/style.css)
3. ⚡ [script.js](file:///c:/Users/Dell/Nouveau%20dossier%20(2)/script.js)

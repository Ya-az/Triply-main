// ملف بيانات الأسعار لمشروع Triply
// الأسعار بالريال السعودي (SAR) مستخرجة من Travel Cost Report

export const travelCosts = {
  london: {
    // 🏨 الفنادق في لندن (4 خيارات لكل فئة)
    hotels: {
      budget: [
        { id: 'lon-hotel-b1', name: 'Premier Inn London', price: 230, stars: 3, location: 'Westminster' },
        { id: 'lon-hotel-b2', name: 'Travelodge Central', price: 248, stars: 3, location: 'Kings Cross' },
        { id: 'lon-hotel-b3', name: 'Hub by Premier Inn', price: 260, stars: 3, location: 'Covent Garden' },
        { id: 'lon-hotel-b4', name: 'Ibis London City', price: 265, stars: 3, location: 'Shoreditch' }
      ],
      midRange: [
        { id: 'lon-hotel-m1', name: 'Hilton London Metropole', price: 450, stars: 4, location: 'Paddington' },
        { id: 'lon-hotel-m2', name: 'Marriott County Hall', price: 477, stars: 4, location: 'South Bank' },
        { id: 'lon-hotel-m3', name: 'Crowne Plaza London', price: 490, stars: 4, location: 'Kensington' },
        { id: 'lon-hotel-m4', name: 'Novotel Tower Bridge', price: 505, stars: 4, location: 'Tower Bridge' }
      ],
      luxury: [
        { id: 'lon-hotel-l1', name: 'The Ritz London', price: 1000, stars: 5, location: 'Piccadilly' },
        { id: 'lon-hotel-l2', name: 'Shangri-La The Shard', price: 1023, stars: 5, location: 'London Bridge' },
        { id: 'lon-hotel-l3', name: 'Claridge\'s Mayfair', price: 1100, stars: 5, location: 'Mayfair' },
        { id: 'lon-hotel-l4', name: 'The Savoy', price: 1150, stars: 5, location: 'Strand' }
      ]
    },

    // 🍽️ المطاعم في لندن (10 خيارات لكل فئة)
    restaurants: {
      budget: [
        { id: 'lon-rest-b1', name: 'Nando\'s Peri-Peri', price: 130, cuisine: 'برتغالي', location: 'Oxford Street' },
        { id: 'lon-rest-b2', name: 'Wagamama', price: 140, cuisine: 'آسيوي', location: 'Covent Garden' },
        { id: 'lon-rest-b3', name: 'Leon Fast Food', price: 145, cuisine: 'صحي سريع', location: 'Liverpool Street' },
        { id: 'lon-rest-b4', name: 'Pret A Manger', price: 149, cuisine: 'ساندويتشات', location: 'Piccadilly' },
        { id: 'lon-rest-b5', name: 'Five Guys Burgers', price: 155, cuisine: 'برغر', location: 'Leicester Square' },
        { id: 'lon-rest-b6', name: 'Pizza Express', price: 160, cuisine: 'إيطالي', location: 'Soho' },
        { id: 'lon-rest-b7', name: 'Zizzi Italian', price: 165, cuisine: 'إيطالي', location: 'Camden' },
        { id: 'lon-rest-b8', name: 'Honest Burgers', price: 170, cuisine: 'برغر', location: 'Brixton' },
        { id: 'lon-rest-b9', name: 'The Breakfast Club', price: 175, cuisine: 'إفطار', location: 'Shoreditch' },
        { id: 'lon-rest-b10', name: 'Busaba Thai', price: 180, cuisine: 'تايلندي', location: 'Westfield' }
      ],
      midRange: [
        { id: 'lon-rest-m1', name: 'Dishoom Bombay', price: 340, cuisine: 'هندي', location: 'Shoreditch' },
        { id: 'lon-rest-m2', name: 'Flat Iron Steak', price: 360, cuisine: 'ستيك هاوس', location: 'Covent Garden' },
        { id: 'lon-rest-m3', name: 'Gaucho Argentinian', price: 372, cuisine: 'أرجنتيني', location: 'Piccadilly' },
        { id: 'lon-rest-m4', name: 'Côte Brasserie', price: 385, cuisine: 'فرنسي', location: 'Marylebone' },
        { id: 'lon-rest-m5', name: 'Hawksmoor Steakhouse', price: 395, cuisine: 'ستيك', location: 'Guildhall' },
        { id: 'lon-rest-m6', name: 'The Ivy Market Grill', price: 410, cuisine: 'بريطاني عصري', location: 'Covent Garden' },
        { id: 'lon-rest-m7', name: 'Sketch Gallery', price: 425, cuisine: 'فرنسي راقي', location: 'Mayfair' },
        { id: 'lon-rest-m8', name: 'Aqua Shard', price: 440, cuisine: 'بريطاني معاصر', location: 'The Shard' },
        { id: 'lon-rest-m9', name: 'Chiltern Firehouse', price: 455, cuisine: 'أمريكي راقي', location: 'Marylebone' },
        { id: 'lon-rest-m10', name: 'Sexy Fish', price: 470, cuisine: 'مأكولات بحرية', location: 'Mayfair' }
      ],
      luxury: [
        { id: 'lon-rest-l1', name: 'Gordon Ramsay Restaurant', price: 700, cuisine: 'فرنسي راقي', location: 'Chelsea', michelin: 3 },
        { id: 'lon-rest-l2', name: 'Alain Ducasse at The Dorchester', price: 745, cuisine: 'فرنسي', location: 'Mayfair', michelin: 3 },
        { id: 'lon-rest-l3', name: 'Core by Clare Smyth', price: 760, cuisine: 'بريطاني حديث', location: 'Notting Hill', michelin: 3 },
        { id: 'lon-rest-l4', name: 'Dinner by Heston Blumenthal', price: 780, cuisine: 'بريطاني تاريخي', location: 'Knightsbridge', michelin: 2 },
        { id: 'lon-rest-l5', name: 'The Ledbury', price: 800, cuisine: 'أوروبي حديث', location: 'Notting Hill', michelin: 2 },
        { id: 'lon-rest-l6', name: 'Restaurant Story', price: 820, cuisine: 'بريطاني مبتكر', location: 'Bermondsey', michelin: 2 },
        { id: 'lon-rest-l7', name: 'Pollen Street Social', price: 840, cuisine: 'أوروبي معاصر', location: 'Mayfair', michelin: 1 },
        { id: 'lon-rest-l8', name: 'Hélène Darroze at The Connaught', price: 860, cuisine: 'فرنسي', location: 'Mayfair', michelin: 2 },
        { id: 'lon-rest-l9', name: 'Club Gascon', price: 880, cuisine: 'فرنسي إقليمي', location: 'Smithfield', michelin: 1 },
        { id: 'lon-rest-l10', name: 'Umu Japanese', price: 900, cuisine: 'ياباني راقي', location: 'Mayfair', michelin: 2 }
      ]
    },

    // 🎡 الأنشطة والجولات في لندن (10 خيارات مقسمة على الفئات)
    activities: [
      { id: 'lon-act-1', name: 'British Museum', price: 0, category: 'budget', duration: '3 ساعات', description: 'متحف عالمي مجاني' },
      { id: 'lon-act-2', name: 'National Gallery', price: 0, category: 'budget', duration: '2-3 ساعات', description: 'معرض فني مجاني' },
      { id: 'lon-act-3', name: 'Hyde Park Walking Tour', price: 25, category: 'budget', duration: '2 ساعة', description: 'جولة مشي في الحديقة' },
      { id: 'lon-act-4', name: 'Tower of London', price: 120, category: 'midRange', duration: '3 ساعات', description: 'قلعة تاريخية + جواهر التاج' },
      { id: 'lon-act-5', name: 'London Eye', price: 150, category: 'midRange', duration: '45 دقيقة', description: 'عجلة لندن الشهيرة' },
      { id: 'lon-act-6', name: 'Westminster Abbey', price: 100, category: 'midRange', duration: '2 ساعة', description: 'كنيسة تاريخية' },
      { id: 'lon-act-7', name: 'Warner Bros Studio Tour (Harry Potter)', price: 200, category: 'midRange', duration: '4 ساعات', description: 'جولة استوديوهات هاري بوتر' },
      { id: 'lon-act-8', name: 'Thames River Luxury Cruise with Dinner', price: 350, category: 'luxury', duration: '3 ساعات', description: 'رحلة نهرية فاخرة + عشاء' },
      { id: 'lon-act-9', name: 'Private Royal London Tour', price: 450, category: 'luxury', duration: '5 ساعات', description: 'جولة خاصة في لندن الملكية' },
      { id: 'lon-act-10', name: 'Helicopter Tour over London', price: 600, category: 'luxury', duration: '30 دقيقة', description: 'جولة هليكوبتر فوق لندن' }
    ],

    // ✈️ رحلات الطيران من/إلى لندن (ذهاب وعودة)
    flights: [
      { id: 'lon-flight-1', airline: 'الخطوط السعودية - اقتصادية', price: 397, category: 'budget', class: 'Economy', baggage: '23 كجم', meals: 'قياسية' },
      { id: 'lon-flight-2', airline: 'الاتحاد للطيران - درجة الأعمال', price: 1341, category: 'midRange', class: 'Business', baggage: '32 كجم', meals: 'مميزة', lounge: true },
      { id: 'lon-flight-3', airline: 'طيران الإمارات - الدرجة الأولى', price: 5959, category: 'luxury', class: 'First Class', baggage: '50 كجم', meals: 'فاخرة', lounge: true, chauffeur: true }
    ]
  },

  paris: {
    // 🏨 الفنادق في باريس (4 خيارات لكل فئة)
    hotels: {
      budget: [
        { id: 'par-hotel-b1', name: 'Ibis Paris Bastille', price: 235, stars: 3, location: 'Bastille' },
        { id: 'par-hotel-b2', name: 'B&B Hotel Paris 17', price: 249, stars: 3, location: 'Batignolles' },
        { id: 'par-hotel-b3', name: 'Campanile Paris Est', price: 255, stars: 3, location: 'Porte de Bagnolet' },
        { id: 'par-hotel-b4', name: 'Hotel de France Invalides', price: 270, stars: 3, location: 'Invalides' }
      ],
      midRange: [
        { id: 'par-hotel-m1', name: 'Citadines Montmartre', price: 640, stars: 4, location: 'Montmartre' },
        { id: 'par-hotel-m2', name: 'Novotel Paris Centre Gare Montparnasse', price: 669, stars: 4, location: 'Montparnasse' },
        { id: 'par-hotel-m3', name: 'Mercure Paris Opera', price: 690, stars: 4, location: 'Opera' },
        { id: 'par-hotel-m4', name: 'Le Pavillon des Lettres', price: 720, stars: 4, location: 'Champs-Élysées' }
      ],
      luxury: [
        { id: 'par-hotel-l1', name: 'Hotel Plaza Athénée', price: 1850, stars: 5, location: 'Avenue Montaigne' },
        { id: 'par-hotel-l2', name: 'Le Meurice', price: 1929, stars: 5, location: 'Rue de Rivoli' },
        { id: 'par-hotel-l3', name: 'Hôtel Ritz Paris', price: 2000, stars: 5, location: 'Place Vendôme' },
        { id: 'par-hotel-l4', name: 'Four Seasons George V', price: 2100, stars: 5, location: 'Avenue George V' }
      ]
    },

    // 🍽️ المطاعم في باريس (10 خيارات لكل فئة)
    restaurants: {
      budget: [
        { id: 'par-rest-b1', name: 'Breizh Café', price: 115, cuisine: 'كريب بريتوني', location: 'Marais' },
        { id: 'par-rest-b2', name: 'L\'As du Fallafel', price: 125, cuisine: 'شرق أوسطي', location: 'Marais' },
        { id: 'par-rest-b3', name: 'Bouillon Chartier', price: 131, cuisine: 'فرنسي تقليدي', location: 'Grands Boulevards' },
        { id: 'par-rest-b4', name: 'Café de Flore', price: 140, cuisine: 'مقهى باريسي', location: 'Saint-Germain' },
        { id: 'par-rest-b5', name: 'Chez Gladines', price: 145, cuisine: 'باسكي فرنسي', location: 'Butte-aux-Cailles' },
        { id: 'par-rest-b6', name: 'Pink Mamma', price: 150, cuisine: 'إيطالي', location: 'Pigalle' },
        { id: 'par-rest-b7', name: 'Bouillon Pigalle', price: 155, cuisine: 'فرنسي اقتصادي', location: 'Pigalle' },
        { id: 'par-rest-b8', name: 'Le Relais de l\'Entrecôte', price: 160, cuisine: 'ستيك فرنسي', location: 'Saint-Germain' },
        { id: 'par-rest-b9', name: 'Blend Hamburger', price: 165, cuisine: 'برغر', location: 'Marais' },
        { id: 'par-rest-b10', name: 'Café des Musées', price: 170, cuisine: 'بيسترو فرنسي', location: 'Marais' }
      ],
      midRange: [
        { id: 'par-rest-m1', name: 'Le Comptoir du Relais', price: 290, cuisine: 'بيسترو فرنسي', location: 'Saint-Germain' },
        { id: 'par-rest-m2', name: 'Septime', price: 315, cuisine: 'فرنسي حديث', location: 'Charonne' },
        { id: 'par-rest-m3', name: 'Frenchie', price: 330, cuisine: 'فرنسي معاصر', location: 'Sentier' },
        { id: 'par-rest-m4', name: 'Le Chateaubriand', price: 350, cuisine: 'فرنسي مبتكر', location: 'Belleville' },
        { id: 'par-rest-m5', name: 'Bistrot Paul Bert', price: 365, cuisine: 'بيسترو كلاسيكي', location: 'Bastille' },
        { id: 'par-rest-m6', name: 'L\'Ami Jean', price: 380, cuisine: 'باسكي فرنسي', location: 'Invalides' },
        { id: 'par-rest-m7', name: 'Le Dôme', price: 400, cuisine: 'مأكولات بحرية', location: 'Montparnasse' },
        { id: 'par-rest-m8', name: 'Le Jules Verne (Eiffel Tower)', price: 420, cuisine: 'فرنسي راقي', location: 'Tour Eiffel' },
        { id: 'par-rest-m9', name: 'Lasserre', price: 440, cuisine: 'فرنسي كلاسيكي', location: 'Champs-Élysées' },
        { id: 'par-rest-m10', name: 'Le Cinq', price: 460, cuisine: 'فرنسي فاخر', location: 'George V' }
      ],
      luxury: [
        { id: 'par-rest-l1', name: 'Alain Ducasse au Plaza Athénée', price: 780, cuisine: 'فرنسي راقي', location: 'Avenue Montaigne', michelin: 3 },
        { id: 'par-rest-l2', name: 'L\'Ambroisie', price: 822, cuisine: 'فرنسي كلاسيكي', location: 'Place des Vosges', michelin: 3 },
        { id: 'par-rest-l3', name: 'Arpège', price: 850, cuisine: 'فرنسي نباتي راقي', location: 'Invalides', michelin: 3 },
        { id: 'par-rest-l4', name: 'Le Pré Catelan', price: 870, cuisine: 'فرنسي راقي', location: 'Bois de Boulogne', michelin: 3 },
        { id: 'par-rest-l5', name: 'Pierre Gagnaire', price: 900, cuisine: 'فرنسي مبتكر', location: 'Champs-Élysées', michelin: 3 },
        { id: 'par-rest-l6', name: 'Le Meurice Alain Ducasse', price: 920, cuisine: 'فرنسي قصري', location: 'Tuileries', michelin: 2 },
        { id: 'par-rest-l7', name: 'Guy Savoy', price: 950, cuisine: 'فرنسي معاصر', location: 'Monnaie de Paris', michelin: 3 },
        { id: 'par-rest-l8', name: 'Epicure (Le Bristol)', price: 980, cuisine: 'فرنسي راقي', location: 'Faubourg Saint-Honoré', michelin: 3 },
        { id: 'par-rest-l9', name: 'Pavillon Ledoyen', price: 1000, cuisine: 'فرنسي تاريخي', location: 'Champs-Élysées', michelin: 3 },
        { id: 'par-rest-l10', name: 'Kei', price: 1050, cuisine: 'فرنسي-ياباني', location: 'Louvre', michelin: 3 }
      ]
    },

    // 🎡 الأنشطة والجولات في باريس (10 خيارات مقسمة على الفئات)
    activities: [
      { id: 'par-act-1', name: 'Louvre Museum', price: 65, category: 'budget', duration: '3-4 ساعات', description: 'متحف اللوفر - الموناليزا' },
      { id: 'par-act-2', name: 'Notre-Dame Cathedral (Exterior)', price: 0, category: 'budget', duration: '1 ساعة', description: 'كاتدرائية نوتردام من الخارج' },
      { id: 'par-act-3', name: 'Sacré-Cœur Basilica', price: 30, category: 'budget', duration: '2 ساعة', description: 'بازيليك القلب المقدس' },
      { id: 'par-act-4', name: 'Eiffel Tower (2nd Floor)', price: 85, category: 'midRange', duration: '2 ساعة', description: 'برج إيفل - الطابق الثاني' },
      { id: 'par-act-5', name: 'Versailles Palace & Gardens', price: 150, category: 'midRange', duration: '5 ساعات', description: 'قصر فيرساي والحدائق' },
      { id: 'par-act-6', name: 'Seine River Cruise', price: 80, category: 'midRange', duration: '1.5 ساعة', description: 'رحلة نهرية في السين' },
      { id: 'par-act-7', name: 'Arc de Triomphe + Champs-Élysées Walk', price: 50, category: 'midRange', duration: '2 ساعة', description: 'قوس النصر والشانزليزيه' },
      { id: 'par-act-8', name: 'Moulin Rouge Cabaret Show with Champagne', price: 450, category: 'luxury', duration: '3 ساعات', description: 'عرض مولان روج + شامبانيا' },
      { id: 'par-act-9', name: 'Private Louvre Tour with Expert Guide', price: 550, category: 'luxury', duration: '3 ساعات', description: 'جولة خاصة في اللوفر' },
      { id: 'par-act-10', name: 'Hot Air Balloon over Versailles', price: 700, category: 'luxury', duration: '1 ساعة', description: 'منطاد فوق فيرساي' }
    ],

    // ✈️ رحلات الطيران من/إلى باريس (ذهاب وعودة)
    flights: [
      { id: 'par-flight-1', airline: 'الخطوط السعودية - اقتصادية', price: 350, category: 'budget', class: 'Economy', baggage: '23 كجم', meals: 'قياسية' },
      { id: 'par-flight-2', airline: 'Air France - درجة الأعمال', price: 1312, category: 'midRange', class: 'Business', baggage: '32 كجم', meals: 'مميزة', lounge: true },
      { id: 'par-flight-3', airline: 'طيران الإمارات - الدرجة الأولى', price: 5249, category: 'luxury', class: 'First Class', baggage: '50 كجم', meals: 'فاخرة', lounge: true, chauffeur: true }
    ]
  }
};

// دالة مساعدة لحساب إجمالي التكلفة
export const calculateTotalCost = (destination, category, days, selectedServices) => {
  if (!destination || !category || days < 1) return 0;

  const cityData = travelCosts[destination];
  if (!cityData) return 0;

  let total = 0;

  // الطيران (مرة واحدة فقط)
  if (selectedServices.flight) {
    const flight = cityData.flights.find(f => f.category === category);
    total += flight?.price || 0;
  }

  // الفندق (يومي)
  if (selectedServices.hotel && selectedServices.hotelChoice) {
    const hotel = cityData.hotels[category]?.find(h => h.id === selectedServices.hotelChoice);
    total += (hotel?.price || 0) * days;
  }

  // المطاعم (يومي)
  if (selectedServices.restaurants && selectedServices.restaurantChoices?.length > 0) {
    selectedServices.restaurantChoices.forEach(restId => {
      const restaurant = cityData.restaurants[category]?.find(r => r.id === restId);
      total += (restaurant?.price || 0) * days;
    });
  }

  // الأنشطة (حسب الاختيار)
  if (selectedServices.activities && selectedServices.activityChoices?.length > 0) {
    selectedServices.activityChoices.forEach(actId => {
      const activity = cityData.activities.find(a => a.id === actId);
      total += activity?.price || 0;
    });
  }

  return total;
};

// دالة لحساب عدد الأيام بين تاريخين
export const calculateDays = (arrivalDate, departureDate) => {
  if (!arrivalDate || !departureDate) return 0;
  const arrival = new Date(arrivalDate);
  const departure = new Date(departureDate);
  const diffTime = Math.abs(departure - arrival);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays || 1;
};

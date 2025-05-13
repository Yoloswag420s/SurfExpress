const surfSpots = [
    { coords: [34.0195, -118.4912], 
      info: "<b>Santa Monica</b><br>Great for beginners. Consistent waves year-round." 
    },
    { coords: [36.6002, -121.8947], 
      info: "<b>Monterey</b><br>Chill vibes and decent waves. Better during fall."
    },
    { coords: [32.7157, -117.1611], 
      info: "<b>San Diego</b><br>Popular for longboarding and sunny days!" 
    },
    {
      coords: [34.0195, -118.4912],
      info: "<b>Santa Monica</b><br>Great for beginners. Consistent waves year-round."
    },
    {
      coords: [36.6002, -121.8947],
      info: "<b>Monterey</b><br>Chill vibes and decent waves. Better during fall."
    },
    {
      coords: [32.7157, -117.1611],
      info: "<b>San Diego</b><br>Popular for longboarding and sunny days!"
    },
    {
      coords: [21.3069, -157.8583],
      info: "<b>Honolulu</b><br>Home of Waikiki Beach. Great waves and culture."
    },
    {
      coords: [-28.0167, 153.4],
      info: "<b>Gold Coast</b><br>Australia's surf capital. Epic barrels!"
    },
    {
      coords: [-34.05, 24.917],
      info: "<b>Jeffreys Bay</b><br>Legendary right-hand point break in South Africa."
    },
    {
      coords: [-8.4095, 115.1889],
      info: "<b>Bali</b><br>Tropical paradise with perfect surf."
    },
    {
      coords: [37.4848, -122.5021],
      info: "<b>Mavericks</b><br>For the pros only. Giant waves near Half Moon Bay."
    },
    {
      coords: [49.153, -125.9066],
      info: "<b>Tofino</b><br>Chill cold-water surf on Vancouver Island."
    },
    {
      coords: [43.663, -1.427],
      info: "<b>Hossegor</b><br>France’s top surf destination."
    },
    {
      coords: [-12.0464, -77.0428],
      info: "<b>Lima</b><br>Reliable Pacific waves in Peru."
    },
    {
      coords: [15.8712, -97.0776],
      info: "<b>Puerto Escondido</b><br>Mexico's pipeline, powerful beach break."
    },
    {
      coords: [-28.6474, 153.602],
      info: "<b>Byron Bay</b><br>Laid-back vibe with amazing surf."
    },
    {
      coords: [50.4155, -5.0737],
      info: "<b>Newquay</b><br>UK's surf central, Fistral Beach is iconic."
    },
    {
      coords: [-37.8, 174.8833],
      info: "<b>Raglan</b><br>Long left-handers in New Zealand."
    },
    {
      coords: [54.48, -8.28],
      info: "<b>Bundoran</b><br>Ireland’s surf capital. Rugged and beautiful."
    },
    {
      coords: [30.5421, -9.706],
      info: "<b>Taghazout</b><br>Moroccan surf village with point breaks."
    },
    {
      coords: [38.9667, -9.4167],
      info: "<b>Ericeira</b><br>Portugal’s surf reserve. Consistent quality."
    },
    {
      coords: [39.6012, -9.0702],
      info: "<b>Nazare</b><br>Record-breaking giant waves."
    },
    {
      coords: [-21.1151, 55.5364],
      info: "<b>Reunion Island</b><br>Sharky but epic waves."
    },
    {
      coords: [33.6631, -118.1618],
      info: "<b>Long Beach</b><br>Perfect for beginners with small, manageable waves."
    },
    {
      coords: [40.6892, -74.0445],
      info: "<b>Coney Island</b><br>Surfing in the heart of New York!"
    },
    {
      coords: [-33.9165, 151.2887],
      info: "<b>Bondi Beach</b><br>Iconic Australian beach with great surf."
    },
    {
      coords: [17.435, -89.1901],
      info: "<b>Playa Zicatela</b><br>Perfect barrels in Puerto Escondido."
    },
    {
      coords: [14.5577, -87.2151],
      info: "<b>La Punta</b><br>Consistent left point breaks in El Salvador."
    },
    {
      coords: [24.2073, -81.7411],
      info: "<b>Key West</b><br>Small waves and beautiful scenery."
    },
    {
      coords: [-22.5193, -42.0261],
      info: "<b>Saquarema</b><br>Brazil’s surfing capital with massive waves."
    },
    {
      coords: [51.5074, -0.1278],
      info: "<b>London</b><br>Surfing near the Thames, a unique experience!"
    },
    {
      coords: [26.1223, -80.1434],
      info: "<b>Fort Lauderdale</b><br>Consistent waves and warm weather."
    },
    {
      coords: [21.3988, -157.9783],
      info: "<b>Sunset Beach</b><br>Famous for big wave season on Oahu."
    },
    {
      coords: [17.7548, -94.5602],
      info: "<b>Costa Rica</b><br>World-class waves and tropical vibes."
    },
    {
      coords: [30.3484, -87.1063],
      info: "<b>Gulf Shores</b><br>Best for beginners, warm waters."
    },
    {
      coords: [-33.8678, 151.2093],
      info: "<b>Sydney</b><br>Bondi Beach and beyond, tons of surf spots."
    },
    {
      coords: [12.9656, 77.6101],
      info: "<b>Varkala</b><br>Popular beach for surfing and cliffside views."
    },
    {
      coords: [41.3884, 2.1925],
      info: "<b>Barcelona</b><br>Great surf and city lifestyle."
    },
    {
      coords: [31.9686, -99.9018],
      info: "<b>Texas Coast</b><br>Nice mix of beach and sandbars."
    },
    {
      coords: [-19.0305, 147.7103],
      info: "<b>Cairns</b><br>Great barrier reef views, fun beach breaks."
    },
    {
      coords: [40.6043, -73.9755],
      info: "<b>Rockaway Beach</b><br>New York surf spot with rising popularity."
    },
    {
      coords: [38.7457, -9.3232],
      info: "<b>Ericeira</b><br>Top surf town in Portugal."
    },
    {
      coords: [40.748817, -73.985428],
      info: "<b>Manhattan Beach</b><br>Small, playful surf near New York."
    },
    {
      coords: [15.0474, -23.532],
      info: "<b>Cape Verde</b><br>Unique surf with African vibes."
    },
    {
      coords: [45.4305, -75.6893],
      info: "<b>Ottawa</b><br>Freshwater surf in Canada!"
    },
    {
      coords: [-11.9352, 43.5187],
      info: "<b>Comoros Islands</b><br>Unknown gem for remote surf."
    },
    {
      coords: [5.9863, -75.105],
      info: "<b>Colombia</b><br>Consistent waves in the tropical paradise."
    },
    {
      coords: [23.542, 52.146],
      info: "<b>Yemen</b><br>Hidden surf spots waiting for exploration."
    },
    {
      coords: [50.0614, 19.9403],
      info: "<b>Krakow</b><br>European landlocked surf destination."
    }
      ];
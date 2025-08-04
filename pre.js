window.addEventListener("load", () => {
  const images = [
    "public/anushka.jpg",
    "public/yashraj.jpg",
    "public/sikha.jpg",
    "public/shristi.jpg",
    "public/richa.jpeg",
    "public/priyani.jpg",
    "public/prinka.jpg",
    "public/nikhil.jpg",
    "public/mahek.jpg",
    "public/log.jpeg",
    "public/log-removebg-preview.png",
    "public/khushi.jpg",
    "public/IMG_0442.jpg",
    "public/harshit.jpg",
    "public/avi.jpg",
    "public/orientation.png",
    "public/navratri.jpg",
  ];

  const fonts = [
    new FontFace('Salita', 'url(./salita/Salita.ttf)'),
    new FontFace('Carlo', 'url(./carlo/Carlo.ttf)'),
    new FontFace('visoria', 'url(./Visoria/visoria-regular.ttf)'),
    new FontFace('WalkieValkyrie', 'url(./walkievalkyrie/WalkieValkyrie-Regular.ttf)'),
    new FontFace('BebasNeue', 'url(./Bebas_Neue/BebasNeue-Regular.ttf)'),
  ];

  const preloadImages = images.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  const preloadFonts = fonts.map(font => {
    return font.load().then(loadedFont => {
      document.fonts.add(loadedFont);
    });
  });

  Promise.all([...preloadImages, ...preloadFonts])
    .then(() => {
      // All done
      document.getElementById('loader').style.display = 'none';
      document.getElementById('mainContent').style.display = 'block';
    })
    .catch(err => {
      console.error("Error loading assets:", err);
    });
});

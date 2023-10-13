tailwind.config = {
    theme: {
      extend: {
        colors: {
          blog: '#282828',
          'yellow':'#FFB800',
        },
        maxWidth: {
          container: "1140px",
        },
       backgroundImage: {
          'banner': "url('images/banner.jpg')",
          'car_img': "url('images/img1.jpg')",
           'maps' : "url('images/maps.png')",
          overlay: 'linear-gradient(60deg, #060606 16.68%, rgba(0,0,0,0.2) 96.44%);',
        }
      }
    }
  }
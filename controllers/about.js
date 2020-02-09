const getAboutPage = (req, res) => {
  res.render('about', {
    title: 'About Page',
    path: '/about',
    cardTitle: 'About',
  });
};

exports.getAboutPage = getAboutPage;

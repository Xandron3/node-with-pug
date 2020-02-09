const get404Page = (req, res) => {
  res.status(404).render('404', {
    title: 'Error 404',
    cardTitle: '404 - Page not found'
  });
};

exports.get404Page = get404Page;

const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
<<<<<<< HEAD
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
=======
    post_body: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
>>>>>>> develop
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
<<<<<<< HEAD
    post_url: 'https://nasa.gov/donec.json',
=======
    post_body: 'https://nasa.gov/donec.json',
>>>>>>> develop
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
<<<<<<< HEAD
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
=======
    post_body: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
>>>>>>> develop
    user_id: 1
  },
  {
    title: 'Nunc purus.',
<<<<<<< HEAD
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
=======
    post_body: 'http://desdev.cn/enim/blandit/mi.jpg',
>>>>>>> develop
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
<<<<<<< HEAD
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
=======
    post_body: 'http://google.ca/nam/nulla/integer.aspx',
>>>>>>> develop
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
<<<<<<< HEAD
    post_url: 'https://stanford.edu/consequat.png',
=======
    post_body: 'https://stanford.edu/consequat.png',
>>>>>>> develop
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
<<<<<<< HEAD
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
=======
    post_body: 'http://edublogs.org/non/ligula/pellentesque.js',
>>>>>>> develop
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
<<<<<<< HEAD
    post_url: 'http://ucla.edu/consequat/nulla.html',
=======
    post_body: 'http://ucla.edu/consequat/nulla.html',
>>>>>>> develop
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
<<<<<<< HEAD
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
=======
    post_body: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
>>>>>>> develop
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
<<<<<<< HEAD
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
=======
    post_body: 'https://reverbnation.com/ligula/sit.jpg',
>>>>>>> develop
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
<<<<<<< HEAD
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
=======
    post_body: 'http://china.com.cn/lectus/vestibulum.json',
>>>>>>> develop
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
<<<<<<< HEAD
    post_url: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
=======
    post_body: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
>>>>>>> develop
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
<<<<<<< HEAD
    post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
=======
    post_body: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
>>>>>>> develop
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
<<<<<<< HEAD
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
=======
    post_body: 'https://lycos.com/natoque/penatibus/et.html',
>>>>>>> develop
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
<<<<<<< HEAD
    post_url: 'https://gmpg.org/lorem.jpg',
=======
    post_body: 'https://gmpg.org/lorem.jpg',
>>>>>>> develop
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
<<<<<<< HEAD
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
=======
    post_body: 'https://paginegialle.it/mattis/egestas.jsp',
>>>>>>> develop
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
<<<<<<< HEAD
    post_url: 'http://wikia.com/turpis/eget.jpg',
=======
    post_body: 'http://wikia.com/turpis/eget.jpg',
>>>>>>> develop
    user_id: 6
  },
  {
    title: 'Etiam justo.',
<<<<<<< HEAD
    post_url: 'https://shareasale.com/quis.json',
=======
    post_body: 'https://shareasale.com/quis.json',
>>>>>>> develop
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
<<<<<<< HEAD
    post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
=======
    post_body: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
>>>>>>> develop
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
<<<<<<< HEAD
    post_url: 'https://java.com/at/nibh/in.png',
=======
    post_body: 'https://java.com/at/nibh/in.png',
>>>>>>> develop
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

const { getRandomFutureDate, getRandomPastDate } = require('./dateUtils');

const events = [
    {
      id: 123,
      name: 'Sesame Street Live - Elmo Makes Music',
      date: getRandomPastDate(),
      venue: {
        id: 111,
        name: 'Marriott Theatre',
        city: 'Lincolnshire',
        state: 'IL'
      }
    },
    {
      id: 124,
      name: '2017 Australian Open',
      date: getRandomPastDate(),
      venue: {
        name: 'Royal Alexandra Theatre',
        city: 'Toronto',
        state: 'CA - ON'
      }
    },
    {
      id: 125,
      name: 'Mac King Comedy Magic Show',
      date: getRandomFutureDate(),
      venue: {
        id: 300,
        name: 'Harrah\'s Las Vegas Casino',
        city: 'Las Vegas',
        state: 'NV'
      }
    },
    {
      id: 126,
      name: '42nd Street',
      date: getRandomPastDate(),
      venue: {
        id: 1200,
        name: 'Centrepointe Theatre',
        city: 'Toronto',
        state: 'CA - ON'
      }
    },
    {
      id: 127,
      name: 'Million Dollar Quartet',
      date: getRandomPastDate(),
      venue: {
        id: 712,
        name: 'Apollo Theater',
        city: 'Chicago',
        state: 'IL'

      }
    },
    {
      id: 128,
      name: 'Twelfth Night',
      date: getRandomFutureDate(),
      venue: {
        id: 1665,
        name: 'Venetian Hotel and Casino',
        city: 'Las Vegas',
        state: 'NV'
      }
    },
    {
      id: 129,
      name: 'The Glass Menagerie',
      date: getRandomFutureDate(),
      venue: {
        id: 2411,
        name: 'National Arts Centre',
        city: 'Ottawa',
        state: 'CA - ON'
      }
    },
    {
      id: 130,
      name: 'Cinderella - The Musical',
      date: getRandomPastDate(),
      venue: {
        id: 2332,
        name: 'Broadway Theatre',
        city: 'New York',
        state: 'NY'

      }

    },
    {
      id: 131,
      name: 'After Midnight',
      date: getRandomFutureDate(),
      venue: {
        id: 2372,
        name: 'Brooks Atkinson Theatre',
        city: 'New York',
        state: 'NY'
      }
    },
    {
      id: 132,
      name: 'Die Fledermaus',
      date: getRandomPastDate(),
      venue: {
        id: 3244,
        name: 'Civic Opera House',
        city: 'Chicago',
        state: 'IL'
      }
    }
];

module.exports = events;

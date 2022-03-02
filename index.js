// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("174.95.15.118", (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:' , data);
// });

// fetchISSFlyOverTimes({ latitude: 43.6655, longitude: -79.4204 }, (error, times) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Fly over times:' , times);
// });

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (const element of passTimes) {
    let newDate = new Date(element.risetime).toUTCString();
    let duration = element.duration;
    console.log(`Next pass at ${newDate} for ${duration} seconds!`);
  }
});


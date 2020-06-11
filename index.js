let username = process.argv[2]
console.log('Profile Showing for '+ username)
let insta_url = `https://www.instagram.com/${username}/`;
let profile_url = `https://www.instadp.com/fullsize/${username}`;
// var fs = require("fs");
var Xray = require("x-ray");
var x = Xray();

// axios
//   .all([axios.get(insta_url), axios.get(profile_url)])
//   .then(
//     axios.spread((profile, dp) => {
//       let user = {};
//       x(profile, ["script"])(function (err, title) {
//         let data = JSON.parse(title[3]);
//         // console.log(JSON.parse(title[3])); // Google
//         user = {
//           name: data.name,
//           username: data.alternateName,
//           description: data.description.replace("&quot;", '"').trim(),
//         };
//       });
//       x(dp, [".download-btn@href"])(function (err, title) {
//         // console.log(title);
//         user.image = title[0];
//       });
//       console.log(user);
//     })
//   )
//   .catch((err) => {
//     console.log(err);
//   });

var request = require("request");
var options1 = {
  method: "GET",
  url: insta_url,
  headers: {},
};
var options2 = {
  method: "GET",
  url: profile_url,
  headers: {},
};
let user = {};
request(options1, function (error, response) {
  if (error) throw new Error(error);
  //   console.log(response.body);

  x(response.body, ["script"])(function (err, title) {
    let data = JSON.parse(title[3]);
    // console.log(JSON.parse(title[3])); // Google
    user = {
      name: data.name,
      username: data.alternateName,
      description: data.description.replace("&quot;", '"').trim(),
    };
    request(options2, function (err, res) {
      if (err) throw new Error(err);
      x(res.body, [".download-btn@href"])(function (err, resdata) {
        // console.log(resdata);
        user.image = resdata[0];
        console.log(user);
      });
    });
  });
});

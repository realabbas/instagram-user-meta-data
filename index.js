let username = process.argv[2]
console.log('Profile Showing for ' + username)
let insta_url = `https://www.instagram.com/${username}/`;
let profile_url = `https://www.instadp.com/fullsize/${username}`;
var Xray = require("x-ray");
var x = Xray();

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
      description: data.description
      //.replace("&quot;", '"').trim(),
    };
    request(options2, function (err, res) {
      if (err) throw new Error(err);
      x(res.body, ".download-btn@href")(function (err, resdata) {
        // console.log(resdata);
        user.image = resdata;
        console.log(user);
      });
    });
  });
});

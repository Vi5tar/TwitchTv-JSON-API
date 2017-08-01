var streamers = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
  "brunofin",
  "comster404"
];
var streamArray = [];
var url = "https://wind-bow.glitch.me/twitch-api/";
var users = "users/";
var stream = "streams/";
var number = "";

//collects streamers data from twitch api and stores data in streamArray when page is loaded
$(document).ready(function() {
  for (var i = 0; i < streamers.length; i++) {
    $.getJSON(url + stream + streamers[i], function(object) {
      streamArray.push(object);
      allStreamers();
    });
  }
});

//displays all streamers and their online status
function allStreamers() {
  document.getElementById("list").style.backgroundColor = "#428bca";
  document.getElementById("list").style.paddingTop = "2%";
  document.getElementById("list").style.marginBottom = "2%";
  onlineStreamers();
  offlineStreamers();
}

//displays online streamers
function onlineStreamers() {
  for (var i = 0; i < streamArray.length; i++) {
    if (streamArray[i].stream != null) {
      $("#" + streamArray[i].stream.channel.display_name).html(
        "<div class='well'><img src='" +
        streamArray[i].stream.channel.logo +
        "' alt='Logo Unavailable.' class='img-rounded img-responsive' width='10%' style='display:inline'><div class='name'><a href='https://www.twitch.tv/" +
        streamArray[i].stream.channel.display_name +
        "'>" +
        streamArray[i].stream.channel.display_name +
        "</a></div><div class='game'>" +
        streamArray[i].stream.channel.game +
        "</div><div class='description'>" +
        streamArray[i].stream.channel.status +
        "</div></div>"
      );
    }
  }
}

//displays offline streamers
function offlineStreamers() {
  for (var i = 0; i < streamArray.length; i++) {
    if (streamArray[i].stream == null) {
      number = i;
      switchApi();
    }
  }
}

//displays online streamers only
function onlineOnly() {
  document.getElementById("list").style.backgroundColor = "#5cb85c";
  document.getElementById("list").style.paddingTop = "2%";
  document.getElementById("list").style.marginBottom = "2%";
  emptyStreamers();
  onlineStreamers();
}

//displays offline streamers only
function offlineOnly() {
  document.getElementById("list").style.backgroundColor = "#d9534f";
  document.getElementById("list").style.paddingTop = "2%";
  document.getElementById("list").style.marginBottom = "2%";
  emptyStreamers();
  offlineStreamers();
}

//clears listed streamers from web page
function emptyStreamers() {
  for (var k = 0; k < streamers.length; k++) {
    $("#" + streamers[k]).empty();
  }
}

//switches default twitch api and utilizes modified api
function switchApi() {
  switch (streamArray[number]._links.channel) {
    case "https://api.twitch.tv/kraken/channels/ESL_SC2":
      $.getJSON(url + users + "ESL_SC2", function(data) {
        switch (data.error) {
          case "Not Found":
            $("#ESL_SC2").html("<div class ='well'>" + data.message +
              "</div>");
            break;
          case "Unprocessable Entity":
            $("#ESL_SC2").html("<div class ='well'>" + data.message +
              "</div>");
            break;
          default:
            $("#ESL_SC2").html(
              "<div class='well'><img src='" +
              data.logo +
              "' alt='Logo Unavailable.' class ='img-rounded img-responsive' style='display:inline' width='10%'><div class='name'>" +
              data.display_name +
              "</div><div class='description'>Offline</div></div"
            );
        }
      });
      break;
    case "https://api.twitch.tv/kraken/channels/OgamingSC2":
      $.getJSON(url + users + "OgamingSC2", function(data) {
        switch (data.error) {
          case "Not Found":
            $("#OgamingSC2").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          case "Unprocessable Entity":
            $("#OgamingSC2").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          default:
            $("#OgamingSC2").html(
              "<div class='well'><img src='" +
              data.logo +
              "' alt='Logo Unavailable.' class ='img-rounded img-responsive' style='display:inline' width='10%'><div class='name'>" +
              data.display_name +
              "</div><div class='description'>Offline</div></div"
            );
        }
      });
      break;
    case "https://api.twitch.tv/kraken/channels/cretetion":
      $.getJSON(url + users + "cretetion", function(data) {
        switch (data.error) {
          case "Not Found":
            $("#cretetion").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          case "Unprocessable Entity":
            $("#cretetion").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          default:
            $("#cretetion").html(
              "<div class='well'><img src='" +
              data.logo +
              "' alt='Logo Unavailable.' class ='img-rounded img-responsive' style='display:inline' width='10%'><div class='name'>" +
              data.display_name +
              "</div><div class='description'>Offline</div></div"
            );
        }
      });
      break;
    case "https://api.twitch.tv/kraken/channels/freecodecamp":
      $.getJSON(url + users + "freecodecamp", function(data) {
        switch (data.error) {
          case "Not Found":
            $("#freecodecamp").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          case "Unprocessable Entity":
            $("#freecodecamp").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          default:
            $("#freecodecamp").html(
              "<div class='well'><img src='" +
              data.logo +
              "' alt='Logo Unavailable.' class ='img-rounded img-responsive' style='display:inline' width='10%'><div class='name'>" +
              data.display_name +
              "</div><div class='description'>Offline</div></div"
            );
        }
      });
      break;
    case "https://api.twitch.tv/kraken/channels/storbeck":
      $.getJSON(url + users + "storbeck", function(data) {
        switch (data.error) {
          case "Not Found":
            $("#storbeck").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          case "Unprocessable Entity":
            $("#storbeck").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          default:
            $("#storbeck").html(
              "<div class='well'><img src='" +
              data.logo +
              "' alt='Logo Unavailable.' class ='img-rounded img-responsive' style='display:inline' width='10%'><div class='name'>" +
              data.display_name +
              "</div><div class='description'>Offline</div></div"
            );
        }
      });
      break;
    case "https://api.twitch.tv/kraken/channels/habathcx":
      $.getJSON(url + users + "habathcx", function(data) {
        switch (data.error) {
          case "Not Found":
            $("#habathcx").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          case "Unprocessable Entity":
            $("#habathcx").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          default:
            $("#habathcx").html(
              "<div class='well'><img src='" +
              data.logo +
              "' alt='Logo Unavailable.' class ='img-rounded img-responsive' style='display:inline' width='10%'><div class='name'>" +
              data.display_name +
              "</div><div class='description'>Offline</div></div"
            );
        }
      });
      break;
    case "https://api.twitch.tv/kraken/channels/RobotCaleb":
      $.getJSON(url + users + "RobotCaleb", function(data) {
        switch (data.error) {
          case "Not Found":
            $("#RobotCaleb").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          case "Unprocessable Entity":
            $("#RobotCaleb").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          default:
            $("#RobotCaleb").html(
              "<div class='well'><img src='" +
              data.logo +
              "' alt='Logo Unavailable.' class ='img-rounded img-responsive' style='display:inline' width='10%'><div class='name'>" +
              data.display_name +
              "</div><div class='description'>Offline</div></div"
            );
        }
      });
      break;
    case "https://api.twitch.tv/kraken/channels/noobs2ninjas":
      $.getJSON(url + users + "noobs2ninjas", function(data) {
        switch (data.error) {
          case "Not Found":
            $("#noobs2ninjas").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          case "Unprocessable Entity":
            $("#noobs2ninjas").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          default:
            $("#noobs2ninjas").html(
              "<div class='well'><img src='" +
              data.logo +
              "' alt='Logo Unavailable.' class ='img-rounded img-responsive' style='display:inline' width='10%'><div class='name'>" +
              data.display_name +
              "</div><div class='description'>Offline</div></div"
            );
        }
      });
      break;
    case "https://api.twitch.tv/kraken/channels/brunofin":
      $.getJSON(url + users + "brunofin", function(data) {
        switch (data.error) {
          case "Not Found":
            $("#brunofin").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          case "Unprocessable Entity":
            $("#brunofin").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          default:
            $("#brunofin").html(
              "<div class='well'><img src='" +
              data.logo +
              "' alt='Logo Unavailable.' class ='img-rounded img-responsive' style='display:inline' width='10%'><div class='name'>" +
              data.display_name +
              "</div><div class='description'>Offline</div></div"
            );
        }
      });
      break;
    case "https://api.twitch.tv/kraken/channels/comster404":
      $.getJSON(url + users + "comster404", function(data) {
        switch (data.error) {
          case "Not Found":
            $("#comster404").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          case "Unprocessable Entity":
            $("#comster404").html(
              "<div class ='well'>" + data.message + "</div>"
            );
            break;
          default:
            $("#comster404").html(
              "<div class='well'><img src='" +
              data.logo +
              "' alt='Logo Unavailable.' class ='img-rounded img-responsive' style='display:inline' width='10%'><div class='name'>" +
              data.display_name +
              "</div><div class='description'>Offline</div></div"
            );
        }
      });
      break;
  }
}

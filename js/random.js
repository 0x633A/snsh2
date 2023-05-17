function generateRandomVideoId() {
  // array of YouTube video IDs
  var videoIds = ["sQTk4eK2fP4", "4aQBkCrpWOg", "gGGPMTvfYb4", "eAC-XiRyZHA", "VuG-B35IOvA"];

  // generate a random index based on the length of the array
  var randomIndex = Math.floor(Math.random() * videoIds.length);

  // return the video ID at the random index
  return videoIds[randomIndex];
}

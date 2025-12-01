const target = document.getElementById("target-entity");
const avatar = document.getElementById("avatar");

target.addEventListener("targetFound", () => {
  if (avatar.components["animation-mixer"]) {
    avatar.components["animation-mixer"].stopAction();
    avatar.components["animation-mixer"].playAction();
  }
});

target.addEventListener("targetLost", () => {
  // Let MindAR freeze it automatically
});

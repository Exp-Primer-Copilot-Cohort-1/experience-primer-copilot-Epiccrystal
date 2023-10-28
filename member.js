function skillsMember() {
  var skills = document.querySelectorAll(".skill");
  skills.forEach(function(skill) {
    var skillValue = skill.dataset.skill;
    var skillBar = skill.querySelector(".skill-bar");
    skillBar.style.width = skillValue + "%";
  });
}
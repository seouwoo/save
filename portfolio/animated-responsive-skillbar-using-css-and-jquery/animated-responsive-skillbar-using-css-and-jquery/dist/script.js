console.log("JavaScript file loaded");

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  
  document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

    var skillBarWrapper = document.getElementById('skill-bar-wrapper');
    if (skillBarWrapper) {
      var hT = skillBarWrapper.offsetTop;
      var hH = skillBarWrapper.offsetHeight;
      var wH = window.innerHeight;
      var wS = window.scrollY;

      console.log('Element offset top:', hT);
      console.log('Element height:', hH);
      console.log('Window height:', wH);
      console.log('Window scrollY:', wS);

      if (wS > hT + hH - 1.4 * wH) {
        console.log('Condition met. Animating skill bars');
        var skillBarContainers = document.querySelectorAll('.skillbar-container');
        skillBarContainers.forEach(function(container) {
          var skill = container.querySelector('.skills');
          if (skill) {
            var targetWidth = container.getAttribute('data-percent');
            console.log('Animating skill bar to:', targetWidth);

            // 애니메이션 효과
            var startWidth = 0;
            var duration = 5000;
            var startTime = null;

            function animateWidth(timestamp) {
              if (!startTime) startTime = timestamp;
              var progress = timestamp - startTime;
              var newWidth = Math.min((progress / duration) * parseFloat(targetWidth), parseFloat(targetWidth));
              skill.style.width = newWidth + '%';
              console.log('Current width:', newWidth + '%');
              if (progress < duration) {
                requestAnimationFrame(animateWidth);
              }
            }

            requestAnimationFrame(animateWidth);
          } else {
            console.log('No skill element found in container');
          }
        });
      } else {
        console.log('Scroll condition not met');
      }
    } else {
      console.log('Skill bar wrapper not found');
    }
  });
});

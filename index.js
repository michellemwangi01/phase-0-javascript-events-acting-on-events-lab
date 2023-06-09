// Your code here
const dodger = document.getElementById('dodger');
dodger.style.background = "blueviolet";
//dodger.style.left = "0";
dodger.style.right = "0";


document.addEventListener("keydown", function (event) {
    console.log(event.key);
  });
  
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
      dodger.style.left = `${left - 5}px`;
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
      dodger.style.left = `${left + 5}px`;
    }
  });


  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }




//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });



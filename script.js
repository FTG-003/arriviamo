document.addEventListener("DOMContentLoaded", () => {
    const text = "We are setting up the learning environment... stay curious.";
    const speed = 40; // tempo tra i caratteri in ms
    const target = document.getElementById("typing-text");
    let i = 0;
  
    function typeWriter() {
      if (i < text.length) {
        target.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  });
  
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransition() {
  // button clicked active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelector('.active-btn');
      currentBtn.classList.remove('active-btn');

      this.classList.add('active-btn');
    });
  }

  // sections Active
  allSections.forEach((section) => {
    section.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      if (id) {
        // remove selected section from buttons
        sectBtns.forEach((btn) => {
          btn.classList.remove('active');
        });
        e.target.classList.add('active');

        // hide selected section
        sections.forEach((sec) => {
          sec.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
      }
    });
  });


  //theme toggles
  const themeBtn =document.querySelector(".theme-btn");
  themeBtn.addEventListener('click',() => {
    let element = document.body;
  element.classList.toggle('light-mode');
  })
}

pageTransition();

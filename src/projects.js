"use strict";

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

// 카테고리 클릭시 필터링 처리
categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }
  handleActiveSelection(event.target);
  filterProjects(filter);
});

// 선택한 카테고리에 대한 스타일링을 처리하는 함수
function handleActiveSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

// 프로젝트 필터링 처리하는 함수
function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter === "all" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 250);
}

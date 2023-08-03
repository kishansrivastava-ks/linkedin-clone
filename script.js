"use strict";

// ---------PHOTO MODAL--------
const modalPhoto = document.querySelector(".modal-photo");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".closeModalPhoto");
const btnOpenModalPhoto = document.querySelector(".btn--show-modal-photo");
const openModalPhoto = function (e) {
  e.preventDefault();
  modalPhoto.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModalPhoto = function () {
  modalPhoto.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnOpenModalPhoto.addEventListener("click", openModalPhoto);
btnCloseModal.addEventListener("click", closeModalPhoto);
overlay.addEventListener("click", closeModalPhoto);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalPhoto.classList.contains("hidden")) {
    closeModalPhoto();
  }
});
// ---------PHOTO MODAL--------

// ---------VIDEO MODAL------
const modalVideo = document.querySelector(".modal-video");
const btnOpenModalVideo = document.querySelector(".btn--show-modal-video");
const btnCloseModalVideo = document.querySelector(".closeModalVideo");

const openModalVideo = function (e) {
  e.preventDefault();
  modalVideo.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalVideo = function () {
  modalVideo.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnOpenModalVideo.addEventListener("click", openModalVideo);
btnCloseModalVideo.addEventListener("click", closeModalVideo);
overlay.addEventListener("click", closeModalVideo);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalVideo.classList.contains("hidden")) {
    closeModalVideo();
  }
});
// ---------VIDEO MODAL------

// --------JOB MODAL--------
const modalJob = document.querySelector(".modal-job");
const btnOpenModalJob = document.querySelector(".btn--show-modal-job");
const btnCloseModalJob = document.querySelector(".closeModalJob");
const openModalJob = function (e) {
  e.preventDefault();
  modalJob.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModalJob = function () {
  modalJob.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnOpenModalJob.addEventListener("click", openModalJob);
btnCloseModalJob.addEventListener("click", closeModalJob);
overlay.addEventListener("click", closeModalJob);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalJob.classList.contains("hidden")) {
    closeModalJob();
  }
});
// --------JOB MODAL--------

// ------------START POST MODAL---------
const modalStartPost = document.querySelector(".modal-start-post");
const btnOpenModalStartPost = document.querySelector(".openModalStartPost");
const btnCloseModalStartPost = document.querySelector(".closeStartPost");
const openModalStartPost = function (e) {
  e.preventDefault();
  modalStartPost.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModalStartPost = function () {
  modalStartPost.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnOpenModalStartPost.addEventListener("click", openModalStartPost);
btnCloseModalStartPost.addEventListener("click", closeModalStartPost);
overlay.addEventListener("click", closeModalStartPost);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalStartPost.classList.contains("hidden")) {
    closeModalStartPost();
  }
});
// ------------START POST MODAL---------

const grid = document.getElementById("grid");
const slidebar = document.querySelector(".slidebar");
const overlay_slidebar = document.querySelector(".overlay-slidebar");
grid.addEventListener("click", function () {
  slidebar.classList.toggle("slidebar-show");
  overlay_slidebar.classList.toggle("hidden");
});

const close_slidebar = document.getElementById("close-slidebar");
close_slidebar.addEventListener("click", function () {
  slidebar.classList.toggle("slidebar-show");
  overlay_slidebar.classList.toggle("hidden");
});

const home = document.getElementById("home");
const network = document.getElementById("network");
const job = document.getElementById("job");
const notification = document.getElementById("notification");

const homeContainer = document.querySelector(".home-container");
const networkContainer = document.querySelector(".network-container");
const jobsContainer = document.querySelector(".jobs-container");
const notificationContainer = document.querySelector(".notification-container");

// console.log(home, network, job, notification);

home.addEventListener("click", function (e) {
  e.preventDefault();
  homeContainer.classList.remove("hidden--container");
  networkContainer.classList.add("hidden--container");
  jobsContainer.classList.add("hidden--container");
  notificationContainer.classList.add("hidden--container");
});

network.addEventListener("click", function (e) {
  e.preventDefault();
  networkContainer.classList.remove("hidden--container");
  homeContainer.classList.add("hidden--container");
  jobsContainer.classList.add("hidden--container");
  notificationContainer.classList.add("hidden--container");
});

job.addEventListener("click", function (e) {
  e.preventDefault();
  jobsContainer.classList.remove("hidden--container");
  homeContainer.classList.add("hidden--container");
  networkContainer.classList.add("hidden--container");
  notificationContainer.classList.add("hidden--container");
});

notification.addEventListener("click", function (e) {
  e.preventDefault();
  notificationContainer.classList.remove("hidden--container");
  homeContainer.classList.add("hidden--container");
  networkContainer.classList.add("hidden--container");
  jobsContainer.classList.add("hidden--container");
});

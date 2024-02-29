"use strict";var toggle=document.querySelector(".toggle__wrapper"),darkBtn=document.getElementById("dark"),lightBtn=document.getElementById("light"),setDarkMode=function(){document.querySelector("body").classList="dark",localStorage.setItem("colorMode","dark")},setLightMode=function(){document.querySelector("body").classList="light",localStorage.setItem("colorMode","light")},getColorModeFromLocalStorage=function(){return localStorage.getItem("colorMode")},getColorModeFromPreferences=function(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},setColorMode=function(){"dark"===(getColorModeFromLocalStorage()||getColorModeFromPreferences())?darkBtn.click():lightBtn.click()};toggle.addEventListener("click",(function(){darkBtn.checked?setDarkMode():setLightMode()})),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?darkBtn.click():lightBtn.click()})),setColorMode();
//# sourceMappingURL=script.js.map
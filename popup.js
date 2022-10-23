'use strict';

function setAlarm() {
//   let minutes = parseFloat(event.target.value);
  chrome.action.setBadgeText({text: 'ON'});
  chrome.alarms.create({delayInMinutes: 0});
  chrome.storage.sync.set({minutes: 1});
//   window.close();
}

function clearAlarm() {
  chrome.action.setBadgeText({text: ''});
  chrome.alarms.clearAll();
//   window.close();
}

function reddenPage() {
    // document.body.style.backgroundColor = 'red';
    chrome.action.setBadgeText({text: 'ON'});
    chrome.tabs.executeScript({
        file: 'content.js'
      }); 
}

function reddenPage2() {
    // document.body.style.backgroundColor = 'white';
    chrome.action.setBadgeText({ text: '' });
}

document.querySelector('#enabled').onchange = function (e) {
    var check = e.target.checked;

    if(check) {
        reddenPage();
    } else {
        reddenPage2();
    }

};
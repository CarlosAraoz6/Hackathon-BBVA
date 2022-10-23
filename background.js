// chrome.alarms.onAlarm.addListener(() => {
//     chrome.action.setBadgeText({ text: '' });
//     chrome.notifications.create({
//       type: 'basic',
//       iconUrl: 'rainbow-48.png',
//       title: 'Sesgooooo',
//       message: 'se ha detectado un sesgo I\'m Guzzlin\'!',
//       buttons: [
//         { title: 'Keep it Flowing.' }
//       ],
//       priority: 0
//     });
//   });
// chrome.notifications.onButtonClicked.addListener(async () => {
//     const item = await chrome.storage.sync.get(['minutes']);
//     chrome.action.setBadgeText({ text: 'ON' });
//     chrome.alarms.create({ delayInMinutes: 1 });
// });

// function reddenPage() {
//     document.body.style.backgroundColor = 'red';
//   }
  
//   chrome.action.onClicked.addListener((tab) => {
//     if(!tab.url.includes("chrome://")) {
//       chrome.action.setBadgeText({text: 'ON'});
//       chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: reddenPage
//       });
//     }
//   });

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
});


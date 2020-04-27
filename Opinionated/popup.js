document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({currentWindow: true, active: true},
  function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {from: 'popup'}, setOpinionCount)
  })
}, false)

function setOpinionCount (ret) {
  if (!ret) { return; }

  var opinions = ret.opinions;
  var total = ret.total;
  var ratio = total / opinions

  var count = document.querySelector('#opinionCount')
  count.innerHTML = 'Polarizing words on current page: ' + opinions
  count.classList.add('opinion-count')

  if (ratio >= 75 && ratio < 100) {
    count.style.color = '#661414';
    document.getElementsByClassName('slightly')[0].classList.add('big')
  } else if (ratio >= 35 && ratio < 75) {
    count.style.color = '#a62121';
    document.getElementsByClassName('polarized')[0].classList.add('big')
  } else if (ratio < 35) {
    count.style.color = '#fc3232';
    document.getElementsByClassName('very')[0].classList.add('big')
  } else {
    document.getElementsByClassName('unpolarized')[0].classList.add('big')
  }
}

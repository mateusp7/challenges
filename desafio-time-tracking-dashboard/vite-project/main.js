const containerInfo = document.querySelector(".container-info");
const buttonDaily = document.querySelector(".button-daily");
const buttonWeekly = document.querySelector(".button-weekly");
const buttonMonthly = document.querySelector(".button-monthly");
const buttons = document.querySelectorAll('.button')

const createCardWekly = (valueBox, name, current, previous) => {
  const boxContainer = document.createElement('div');
  boxContainer.className = `box-container box-container${valueBox}`;
    const boxBg = document.createElement('div');
    boxBg.className = 'box-bg';
    const imgIcon = document.createElement('img');
    imgIcon.className = 'icon';
    imgIcon.src = `/assets/icon-${name}.svg`;
    const boxContent = document.createElement('div');
    boxContent.className = 'box-content'
      const boxTitle = document.createElement('div');
      boxTitle.className = 'box-title';
        const h3BoxTitle = document.createElement('h3')
        h3BoxTitle.textContent = (name).replace("-", " ");
        const imgBoxTitle = document.createElement('img');
        imgBoxTitle.src = '/assets/icon-ellipsis.svg';
      const boxTitleInfo = document.createElement('div');
      boxTitleInfo.className = 'box-title-info';
        const h1BoxTitleInfo = document.createElement('h1');
        h1BoxTitleInfo.textContent = `${current}hrs`
        const pBoxTitleInfo = document.createElement('p');
        pBoxTitleInfo.textContent = `Last Week - ${previous}hrs`
      
      boxContainer.appendChild(boxBg);
      boxContainer.appendChild(imgIcon);
      boxContainer.appendChild(boxContent);
      boxContent.appendChild(boxTitle);
      boxTitle.appendChild(h3BoxTitle);
      boxTitle.appendChild(imgBoxTitle);
      boxContent.appendChild(boxTitleInfo);
      boxTitleInfo.appendChild(h1BoxTitleInfo);
      boxTitleInfo.appendChild(pBoxTitleInfo);

      return boxContainer;
}

function remove() {
  const boxContainer = document.querySelectorAll('.box-container');
  boxContainer.forEach((item) => {
    containerInfo.removeChild(item)
  })
}

async function getDataDaily() {
  remove();
  const response = await fetch('./data.json');
  const json = await response.json();
  json.forEach((item, index) => {
    containerInfo.appendChild(createCardWekly(index + 1, (item.title).replace(" ", "-"), item.timeframes.daily.current, item.timeframes.daily.previous))
  });
}

async function getDataWeekly() {
  remove();
  const response = await fetch('./data.json');
  const json = await response.json();
  json.forEach((item, index) => {
    containerInfo.appendChild(createCardWekly(index + 1, (item.title).replace(" ", "-"), item.timeframes.weekly.current, item.timeframes.weekly.previous))
  })
}

async function getDataMonthly() {
  remove();
  const response = await fetch('./data.json');
  const json = await response.json();
  json.forEach((item, index) => {
    containerInfo.appendChild(createCardWekly(index + 1, (item.title).replace(" ", "-"), item.timeframes.monthly.current, item.timeframes.monthly.previous))
  })
}

getDataWeekly()

buttonWeekly.addEventListener("click", getDataWeekly);
buttonDaily.addEventListener("click", getDataDaily);
buttonMonthly.addEventListener("click", getDataMonthly);

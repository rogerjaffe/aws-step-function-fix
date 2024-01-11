setInterval(() => {
  let currentURL = document.location.href;
  const startDatePos = currentURL.indexOf("startDate=") + 10;
  const date = currentURL.substring(startDatePos);
  const root = currentURL.substring(0, startDatePos);
  if (date.includes("%20")) {
    let newDateStr = date.replaceAll("%20", " ");
    let pstPos = newDateStr.indexOf("(");
    newDateStr = newDateStr.substring(0, pstPos - 1);
    let newDate = new Date(newDateStr).getTime();
    document.location.href = root + newDate;
    document.location.reload();
  }
}, 1500);

let reportField = document.querySelector('.js-report-field');
let btn = document.querySelector('.js-report-collapse-btn');

const onClickShowReport = () => {
    reportField.style.maxHeight = '390px';
    reportField.style.overflowY = 'auto';
    btn.innerHTML = 'Свернуть';

    btn.removeEventListener('click', onClickShowReport);
    btn.addEventListener('click', onClickHideReport);
}

const onClickHideReport = () => {
    reportField.style.maxHeight = '160px';
    reportField.style.overflowY = 'hidden';
    btn.innerHTML = 'Развернуть';

    btn.removeEventListener('click', onClickHideReport);
    btn.addEventListener('click', onClickShowReport);
}

btn.addEventListener('click', onClickShowReport);
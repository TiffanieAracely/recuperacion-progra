let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let dateObj = new Date();
let month = dateObj.getMonth();
let currMonth = dateObj.getMonth();
let year = dateObj.getFullYear();
let currYear = dateObj.getFullYear();
let table = _('cal');

_('month').innerHTML = months[month];
_('year').innerHTML = year;
_('prev').addEventListener('click', () => trackMonth('prev'));
_('next').addEventListener('click', () => trackMonth('next'));

function _(id) {
  return document.getElementById(id);
}

function trackMonth(dir) {
  if (dir == 'prev') month -= 1;
  if (dir == 'next') month += 1;
  
  if (month > 11) {
    month = 0;
    year += 1;
  }  
  
  if (month < 0) {
    month = 11;
    year -= 1;
  }
  _('month').innerHTML = months[month];
  _('year').innerHTML = year;
  
  calender(month, year);
}

function calender(month, year) {

  let today = dateObj.getDate();
  let firstDay = new Date(year, month, 0);
  let startDay = firstDay.getDay();
  let monthLength = new Date(year, month + 1, 0).getDate();
  let weekDays = ['Lun', 'Mar', 'Mier', 'Jue', 'Vi', 'Sa', 'Dom'];
  let html = ' <tr>';
  
  for (let i = 0; i < weekDays.length; i++) {
    html += '<td>' + weekDays[i] + '</td>';
  }
  html += '</tr>';
  var count = 0;
  
  if (startDay !== 0) {
    html += "<tr><td colspan='" + startDay + "'></td>";
    count = startDay;
  }
  
  for (var day = 1; day <= monthLength; day++) {
    if (count % 7 === 0) {
      html += "<tr>";
    }

    if (day == today && month == currMonth && year == currYear) {
      html += "<td class='closed'>" + day + "</td>";
    } else {
      html += "<td class='normal'>" + day + "</td>";
    }
    count++;
    
    if (count % 7 === 0) {
      html += "</tr>";
    }
  }
  table.innerHTML = html;
}

calender(month, year);
function setHoursOpen() {
  var time = new Date(), // Create a new date
      hours = time.getHours(), // Get the hours of the date (local time)
      offset = time.getTimezoneOffset(), // Get the timezone offset in minutes (distance from UTC)
      hours = hours - (offset/ 60); // Get the timezone offset in hours

  if (hours >= 1 && hours < 15) { // If it's between 7am and 9pm (1:00 and 15:00 UTC)
    $('#hours').css('color', '#4CAF50'); // Make the text green
    $('#hours').html('Open Now!'); // Say it's open
  } else { // If it's between closing times
    $('#hours').css('color', '#F44336'); // Make the text red
    $('#hours').html('Closed until 7am'); // Say it's closed
  }
}
$(document).ready(function() {
  setHoursOpen();

  $('.timeOpen').click(function() {
    var i = document.getElementById('fullHours');

    if (i.style.visibility == 'hidden') { // If the message is hidden, show it
      $('#fullHours').css('visibility', 'visible');
    } else { // If it's shown, hide it
      $('#fullHours').css('visibility', 'hidden');
    }
  })
})

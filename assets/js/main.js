$(document).ready(function () {
  function getTimeDiff(startDate, endDate) {
    const diffMs = Math.abs(endDate - startDate); // difference in milliseconds

    const totalSeconds = Math.floor(diffMs / 1000);

    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  }

  const now = new Date();
  const end = new Date("2028-01-10T12:00:00");

  const { days, hours, minutes, seconds } = getTimeDiff(now, end);

  console.log(days, hours, minutes, seconds);

  $(".timer").countdown100({
    endtimeYear: 0,
    endtimeMonth: 0,
    endtimeDate: days,
    endtimeHours: hours,
    endtimeMinutes: minutes,
    endtimeSeconds: seconds,
    timeZone: "",
  });
});

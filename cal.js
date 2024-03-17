function createCalendar(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const headMonth = new Intl.DateTimeFormat('ja-JP', { month: 'long' }).format(firstDay);
  const week = ['日', '月', '火', '水', '木', '金', '土'];

  console.log(`${headMonth} ${year}`.padStart(13));
  console.log(week.join(' '));

  let space = '   '.repeat(firstDay.getDay());
  process.stdout.write(space);

  let dayCounter = 1;
  for (let day = 1; day <= lastDay.getDate(); day++) {
    process.stdout.write(day.toString().padStart(2) + ' ');
    if ((firstDay.getDay() + dayCounter) % 7 === 0) {
      process.stdout.write('\n');
    }
    dayCounter++;
  }
  console.log();
}

function main() {
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;

  const args = process.argv.slice(2);
  if (args.length > 0 && args[0] === '-m' && args[1] && !isNaN(args[1])) {
    month = parseInt(args[1]);
    if (month < 1 || month > 12) {
      console.log(`${month} は月の数字（1から12）でも月の名前でもありません。`);
      return;
    }
  }

  createCalendar(year, month);
}

main();

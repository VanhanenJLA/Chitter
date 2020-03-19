import moment from 'moment';

export class TimeAgoValueConverter {
  toView(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return moment(date).fromNow();
    // return date.toLocaleString('en-fi');
  }
}

// export class DateValueConverter {
//   toView(date) {
//     if (!(date instanceof Date)) {
//       date = new Date(date);
//     }
//     return date.toLocaleDateString();
//   }
// }

// export class TimeValueConverter {
//   toView(date) {
//     if (!(date instanceof Date)) {
//       date = new Date(date);
//     }
//     return date.toLocaleTimeString();
//   }
// }
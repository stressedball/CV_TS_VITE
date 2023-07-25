export default function dateFormatter(date: Date) {
    const arr = date.toDateString().split(' ');
    const formattedDate = arr[1].concat(' ').concat(arr[3]);
    return formattedDate;
}

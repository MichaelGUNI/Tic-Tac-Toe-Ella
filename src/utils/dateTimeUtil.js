
import moment from 'moment';

const currentDate = moment();

// Format date and time
export function formattedDateTime() {
    return currentDate.format('YYYY-MM-DD HH:mm:ss');
}

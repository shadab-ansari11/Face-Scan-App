/* eslint-disable @typescript-eslint/no-unused-vars */
import moment from 'moment-timezone';

export function formatPhoneNumber(phoneNumberString: string) {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '');
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? '+1 ' : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return phoneNumberString || '';
}

export const dateFormatter = (
  d: any,
  hasDate?: boolean,
  hasFancyFormat?: boolean,
) => {
  if (hasDate) {
    return `${moment(d).format('MM/DD/YYYY')}`;
  }

  if (hasFancyFormat) {
    return `${moment(d).format('MMM DD, YYYY')}`;
  }

  return `${moment(d).format('MM/DD/YYYY, hh:mm A')}`;
};

export const timeDuration = (duration = 15) => {
  const x = duration;
  const times = [];
  let tt = 0;

  for (let i = 0; tt <= 8 * 60; i++) {
    const hh = Math.floor(tt / 60);
    const mm = tt % 60;
    const duration = ('0' + (hh % 12)).slice(-2) + ':' + ('0' + mm).slice(-2);
    times[i] = {id: tt.toString(), value: duration};
    tt += x;
  }

  return times;
};

export function textEllipsis(
  str: string,
  maxLength: number,
  {side = 'end', ellipsis = '...'} = {},
) {
  if (str.length > maxLength) {
    switch (side) {
      case 'start':
        return ellipsis + str.slice(-(maxLength - ellipsis?.length));
      case 'end':
      default:
        return str.slice(0, maxLength - ellipsis?.length) + ellipsis;
    }
  }
  return str;
}

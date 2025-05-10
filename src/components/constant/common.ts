/**
 * @format
 */

import {Dimensions, Platform} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const BILLING_NAME_REGEX = /^(?=.*[a-zA-Z])[a-zA-Z' -]*$/;
export const NAME_REGEX = /^(?=.*[a-zA-Z])[a-zA-Z0-9' -]*$/;
export const NAME_REGEX_WITHOUT_NUMBERS = /^(?=.*[a-zA-Z])[a-zA-Z' -]*$/;

export const PHONE_REGEX =
  /^((\()?[1-9]{1}[0-9]{2}(\))?)[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;
export const PASS_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,128})/;
export const ZIPCODE_REGEX = /^\d{5}(-\d{4})?$/;
export const URL_REGEX =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
export const USERNAME_REGEX = /^[a-zA-Z]{1}[a-zA-Z0-9 -]*$/;
export const ONLY_ALPHABETS_SPACES = /[^a-zA-Z\s]/gi;

export const KEYBOARD_EXTRA_HEIGHT = 200;
export const isAndroid = Platform.OS === 'android';

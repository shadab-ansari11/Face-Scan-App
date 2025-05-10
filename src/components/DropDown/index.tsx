/**
 * @format
 */
import React from 'react';
import {VStack, Select, ISelectProps, Box} from 'native-base';
import {TextStyle} from 'react-native';
import {useAppTheme} from '../../theme/useTheme';
import {Title} from '../Typography';

type Option = {
  id: any;
  label?: string;
  value: string;
};

interface Props extends ISelectProps {
  error?: string | undefined;
  value: string | undefined;
  list: Option[];
  labelStyles?: TextStyle;
  valueStyle?: TextStyle;
  onValueChange?: (event: any) => void;
  onBlur?: () => void;
  hasAllValue?: boolean;
  selectPlaceholder?: string;
}

function Dropdown(props: Props) {
  const theme = useAppTheme();

  const {
    placeholder,
    onValueChange,
    value,
    list,
    labelStyles,
    valueStyle,
    onBlur,
    hasAllValue,
    selectPlaceholder,
    ...rest
  } = props;

  return (
    <VStack>
      {placeholder ? (
        <Title
          color={theme.colors.black[700]}
          fontWeight="500"
          mb={2}
          mt={2}
          style={labelStyles}>
          {placeholder}
        </Title>
      ) : null}
      <Box backgroundColor={'white'}>
        <Select
          onValueChange={onValueChange}
          fontSize="sm"
          height="50px"
          placeholder={placeholder || selectPlaceholder}
          selectedValue={value}
          style={valueStyle}
          onClose={onBlur}
          {...rest}>
          {list.map(l => {
            // console.log('list', l);
            const values = Object.values(l).join(',');
            return (
              <Select.Item
                key={l.id}
                label={l.value}
                value={hasAllValue ? values : l.value}>
                {l.value}
              </Select.Item>
            );
          })}
        </Select>
      </Box>
    </VStack>
  );
}

Dropdown.defaultProps = {
  labelStyles: undefined,
  valueStyle: undefined,
  onBlur: undefined,
};

export {Dropdown};

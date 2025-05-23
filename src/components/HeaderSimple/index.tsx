/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unneeded-ternary */
import {ChevronLeftIcon, Divider, useColorModeValue, View} from 'native-base';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Share, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../../theme';
import {textEllipsis} from '../../utils';
import {Caption, Title} from '../Typography';
import {RootStackParamList} from '../../navigation';

export type RootNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  any
>;

interface IHeader {
  title?: string;
  bg?: string;
  color?: string;
  isShare?: boolean;
  isBack?: boolean;
  profile?: {name: string; profilePic: string; user_id: number};
}
function HeaderSimple(props: IHeader) {
  const {title, bg, color, isShare, profile, isBack} = props;
  const navigation = useNavigation<RootNavigationType>();

  const borderColor = useColorModeValue(
    theme.colors.gray[100],
    theme.colors.black[200],
  );
  const fontColor =
    color ||
    useColorModeValue(theme.colors.black[2000], theme.colors.appWhite[600]);
  const bgcolor =
    bg ||
    useColorModeValue(theme.colors.appWhite[600], theme.colors.black[2000]);
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        height={50}
        width="100%"
        px={3}
        bg={bgcolor}
        borderWidth={bg === 'transparent' ? 0 : 1}
        borderColor={borderColor}>
        <View flexDirection="row" alignItems="center">
          {isBack && (
            <TouchableOpacity
              style={{padding: 10}}
              activeOpacity={0.9}
              onPress={navigation.goBack}>
              <ChevronLeftIcon color={theme.colors.black[2000]} />
            </TouchableOpacity>
          )}
          {profile && (
            <TouchableOpacity activeOpacity={0.9}>
              <View flexDirection="row" alignItems="center">
                <FastImage
                  source={{uri: profile?.profilePic}}
                  style={styles.img}
                />
                <Caption>{textEllipsis(profile?.name || '', 15)}</Caption>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View>
          <Title fontFamily="Satoshi-Regular" fontWeight="600" color={fontColor} fontSize={24}>
            {!isShare ? title : ''}
          </Title>
        </View>
        <View>
          {isShare ? (
            <TouchableOpacity onPress={handleShare}>
              <View
                flexDirection="row"
                mr={5}
                justifyContent="center"
                alignItems="center">
                <Caption
                  mr={1}
                  color={useColorModeValue(
                    theme.colors.black[200],
                    theme.colors.appWhite[600],
                  )}>
                  Share
                </Caption>
                <Feather
                  name="share-2"
                  size={20}
                  color={useColorModeValue(
                    theme.colors.black[200],
                    theme.colors.appWhite[600],
                  )}
                />
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {bg !== 'transparent' && <Divider />}
    </>
  );
}

HeaderSimple.defaultProps = {
  bg: '',
  color: '',
  isShare: false,
  profile: null,
};

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 40,
    borderRadius: 360,
    marginRight: 10,
    marginLeft: 6,
  },
});
export default HeaderSimple;

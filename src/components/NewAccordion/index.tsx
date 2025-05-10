import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import data from './data';

export default function NewAccordion() {
  const [currentIndex, setCurrentIndex] = React.useState<any>(null);
  const ref: any = React.useRef();

  return (
    <View ref={ref} style={styles.container}>
      {data.map(({bg, color, category, subCategories}, index: any) => {
        return (
          <TouchableOpacity
            key={category}
            onPress={() => {
              setCurrentIndex(index === currentIndex ? null : index);
            }}
            style={styles.cardContainer}
            activeOpacity={0.9}>
            <View style={[styles.card, {backgroundColor: bg}]}>
              <Text style={[styles.heading, {color}]}>{category}</Text>
              {index === currentIndex && (
                <View style={styles.subCategoriesList}>
                  {subCategories.map(subCategory => (
                    <Text key={subCategory} style={[styles.body, {color}]}>
                      {subCategory}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 38,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
  },
  subCategoriesList: {
    marginTop: 20,
  },
});

import { StyleSheet } from 'react-native';
import { SIZES, FONTS, COLORS } from './constants';

export const gStyle = StyleSheet.create({
  appContainer: {
    paddingTop: 50, 
    padding: 20,
    width: '100%',
  },

  headerContainer: {
    height: 70,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  headerLogo: {
    height: 45,
    width: 55,
  },

  headerShoping: {
    height: 45,
    width: 45,
  },

  categoriesContainer: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  categoriesHeader1: {
    fontWeight: 'bold',
    ...FONTS.h1,
    marginBottom: 10,
  },

  categoriesHeader2: {
    ...FONTS.body2,
    marginBottom: 20,
  },

  categoriesProductItemContainer: {
    height: 110,
    padding: 10,
    borderRadius: 7,
    marginBottom: 10,
    width: '30%',
  },

  categoriesProductItem: {
    alignItems: 'center',
  },

  categoriesImageContainer: {
    marginBottom: 5,
  },

  categoriesImage: {
    height: 40,
    width: 40,
  },

  categoriesName: {
    textAlign: 'center',
    ...FONTS.body5,
    fontWeight: 'bold',
    color: COLORS.gray,
  },

  popularsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  popularHeader1: {
    fontWeight: 'bold',
    ...FONTS.h1,
    marginBottom: 30,
  },

  popularProductItemContainer: {
    height: 110,
    padding: 10,
    borderRadius: 7,
    marginBottom: 10,
    width: '30%',
  },

  popularProductPrise: {
    ...FONTS.h3,
    color: COLORS.primary,
    fontWeight: "bold",
  },

  popularProductItem: {
    alignItems: 'center',
  },
});
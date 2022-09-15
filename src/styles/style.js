import { StyleSheet } from 'react-native';
import { SIZES, FONTS, COLORS } from './constants';

export const gStyle = StyleSheet.create({
  appContainer: {
    paddingBottom: 50,
    width: '100%',
    backgroundColor: COLORS.primary,
  },

  headerContainer: {
    height: 70,
    padding: 20,
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: COLORS.white,
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
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  categoriesHeader1: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    ...FONTS.h1,
  },

  categoriesHeader2: {
    marginHorizontal: 20,
    ...FONTS.body2,
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
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  popularHeader1: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    ...FONTS.h1,
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

  basketList: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#4d4d4d',
    borderRadius: 10, 
    backgroundColor: COLORS.white,
    marginBottom: 20,
  },

  basketItem: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1, 
    borderColor: '#4d4d4d',
    marginBottom: 5,
  },

  basketItemText: {
    fontSize: 10,
  },

  basketItemPrice: {
    fontSize: 10,
    color: COLORS.primary,
  },

  deleteBasketItemButton: {
    padding: 10,
  },

  deleteBasketItemButtonText: {
    fontSize: 20,
    color: '#4d4d4d',
    fontWeight: 'bold',
  },

  basketItemImage: {
    height: 25,
    width: 25,
  },

  deleteBasketButton: {
    margin: 10,
    padding: 10,
    borderRadius: 7,
    width: '30%',
    margin: 15,
    backgroundColor: COLORS.black,
  },

  deleteBasketButtonText: {
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
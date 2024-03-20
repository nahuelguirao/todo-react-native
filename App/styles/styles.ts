import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    color: '#6f6f6f',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#6f6f6f',
  },
  finishText: {
    fontSize: 16,
    color: '#6f6f6f',
    textDecorationLine: 'line-through',
  },
  centerText: {
    marginTop: 10,
    textAlign: 'center',
  },
  whiteText: {
    fontSize: 16,
    color: 'white',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eeec',
    borderRadius: 16,
    paddingLeft: 20,
    width: Dimensions.get('screen').width * 0.6,
  },
  button: {
    backgroundColor: '#5897fb',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 16,
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    paddingHorizontal: 5,
  },
  card: {
    paddingVertical: 20,
    gap: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eeec',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardDelete: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginRight: 10,
  },
});

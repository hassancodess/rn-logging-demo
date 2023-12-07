import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LOG } from 'utils/logger';
import * as FileSystem from 'expo-file-system';

export default function Page() {
  const listFiles = async () => {
    const files = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory + '/');
    LOG.info('asdasd', files);
  };
  const generateRandomLogs = () => {
    LOG.debug('Debug Log');
    LOG.info('Info Log');
    LOG.warn('Warn Log');
    LOG.error('Error Log');
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Text style={styles.title}>Hello World</Text>
          <Text style={styles.subtitle}>This is the first page of your app.</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button} onPress={generateRandomLogs}>
            <Text style={styles.buttonText}>Generate Random Logs</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={listFiles}>
            <Text style={styles.buttonText}>Log Files</Text>
          </Pressable>
        </View>
        {/* </Link> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    gap: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6366F1',
    borderRadius: 24,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#38434D',
    fontSize: 36,
  },
});

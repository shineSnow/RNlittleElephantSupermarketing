import {Button, Layout, Text} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <>
      <Layout style={{flex: 1}}>
        <SafeAreaView>
          <Text category="h4">Home pages</Text>
          <Button>home pages</Button>
        </SafeAreaView>
      </Layout>
    </>
  );
};

export default HomeScreen;

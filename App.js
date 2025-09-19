import { SafeAreaView } from 'react-native';
import Messenger from './Messenger'
import CommentApp from './CommentApp'

const App = () => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <Messenger/>
      <CommentApp/>
    </SafeAreaView>
  );
};

export default App;
import { View } from 'react-native';

import { Link } from 'expo-router';


export default function Page() {
  return (
    <View>
      <Link href="/myPage">My Page</Link>
      {/* ...other links */}
      <Link href="/navigate">View Navigated</Link>
    </View>
  );
}


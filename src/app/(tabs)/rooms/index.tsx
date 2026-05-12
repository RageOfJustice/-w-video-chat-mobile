import { Link } from 'expo-router'
import { View } from 'react-native'

export default function RoomsScreen() {
  const rooms = ['1', '2', '3']
  return (
    <View style={{ flex: 1 }}>
      {rooms.map((id) => (
        <Link key={id} href={`/rooms/${id}`}>
          Room id {id}
        </Link>
      ))}
    </View>
  )
}

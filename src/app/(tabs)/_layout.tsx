import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs'

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="rooms">
        <Label>Rooms</Label>
        <Icon
          sf={{ default: 'door.french.closed', selected: 'door.french.open' }}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Label>Settings</Label>
        <Icon sf="gear" />
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}

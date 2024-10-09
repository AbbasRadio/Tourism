
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

interface GuideCarouselCardProps {
  title: string;
  content: string;
}
const GuideCarouselCard = ({ title, content }: GuideCarouselCardProps) => {
  return (
    <View style={{ backgroundColor: '#fff', width: 380, minHeight: 190, borderRadius: 10, marginTop: 15 }}>
      <View style={{ flex: 2, flexDirection: 'column' }}>
        <Text style={{ fontSize: 26, paddingLeft: 30, paddingTop: 25, color: '#001A1A', letterSpacing: 2, fontWeight: 600 }}>{title}</Text>
        <Text style={{ fontSize: 17, paddingLeft: 30, paddingTop: 10, color: '#001A1A', letterSpacing: 2 }}>{content}</Text>
        <Image source={require('../../assets/profile.png')} style={{ alignSelf: 'flex-end', marginRight: 25, width: 90, height: 90, marginTop: -62}} />
        <Button mode={'outlined'} style={{width: 150, borderRadius: 10,borderWidth: 2, marginLeft: 30, borderColor: '#008080'}} labelStyle={{color: '#008080', fontSize: 18, padding: 2, letterSpacing: 2, fontWeight: 600}} onPress={() => console.log('contact')}>Contact</Button>
      </View>
    </View>
  );
};

export default GuideCarouselCard;

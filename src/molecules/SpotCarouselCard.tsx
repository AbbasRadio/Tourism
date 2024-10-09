
import * as React from 'react';
import { Image, Text, View } from 'react-native';

interface CarouselCardProps {
  title: string;
  image: any;
}
const SpotCarouselCard = ({ title, image }: CarouselCardProps) => {
  return (
    <View style={{ backgroundColor: '#fff', width: 380, height: 60, borderRadius: 10, marginTop: 15, marginLeft: 15, }}>
      <View style={{ backgroundColor: '#fff', height: 60, borderRadius: 10, marginLeft: 15, padding: 10, flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <Text style={{ fontSize: 18, color: '#008080', letterSpacing: 2, fontWeight: '600', flex: 1, alignItems: 'center' }}>{title}</Text>
        <Image source={image} style={{ height: 60, width: 20, flex: 0.5, justifyContent: 'center', marginRight: -10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} />
      </View>
    </View>
  );
};

export default SpotCarouselCard;

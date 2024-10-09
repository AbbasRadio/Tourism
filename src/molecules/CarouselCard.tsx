
import * as React from 'react';
import { Image, Pressable, Text } from 'react-native';
import { PaperProvider, Card } from 'react-native-paper';

interface CarouselCardProps {
  title: string;
  content: string;
  image: any;
}
const CarouselCard = ({ title, content, image }: CarouselCardProps) => {
  return (
    <PaperProvider>
      <Pressable>
      <Card style={{ margin: 15, width: 315, minHeight: 320, backgroundColor: '#fff' }}>
        <Card.Cover
          source={image}
          style={{ height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderRadius: 0 }}
        />
        <Card.Title
          title={title} titleStyle={{ fontSize: 24, marginHorizontal: 18, marginVertical: 20, color: '#008080', letterSpacing: 2 }}
        />
        <Card.Content>
          <Text style={{ fontSize: 16, marginHorizontal: 20, letterSpacing: 2 }}>{content}</Text>
        </Card.Content>
        <Card.Content>
          <Image source={require('../../assets/arrow.png')} style={{alignSelf: 'flex-end', marginRight: 10}} />
        </Card.Content>
      </Card>
      </Pressable>
    </PaperProvider>
  );
};

export default CarouselCard;

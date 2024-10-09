
import * as React from 'react';
import { Image, Pressable, View } from 'react-native';
import { PaperProvider, Card } from 'react-native-paper';

interface CategoryCarouselCardProps {
  title: string;
}
const CategoryCarouselCard = ({ title }: CategoryCarouselCardProps) => {
  return (
    <PaperProvider>
      <Pressable onPress={() => console.log('go to details page')}>
        <Card style={{ marginTop: 15, width: 380, height: 60, borderRadius: 5, backgroundColor: '#fff' }}>
          <View style={{ flex: 2, flexDirection: 'column' }}>
            <Card.Title
              title={title} titleStyle={{ fontSize: 18, marginHorizontal: 18, marginVertical: 20, letterSpacing: 2 }}
            />
            <Card.Content>
              <Image source={require('../../assets/slider.png')} style={{ alignSelf: 'flex-end', marginRight: 10, marginTop: -28 }} />
            </Card.Content>
          </View>
        </Card>
      </Pressable>
    </PaperProvider>
  );
};

export default CategoryCarouselCard;


import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import Header from '../molecules/Header';
import CarouselCard from '../molecules/CarouselCard';
import CategoryCarouselCard from '../molecules/CategoryCarouselCard';
import GuideCarouselCard from '../molecules/GuideCarouselCard';
const Home = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent' }}>
            <ScrollView>
                <Header />
                <View style={{ height: 'auto' }}>
                    <Image source={require('../../assets/hawaii1.png')} style={{ width: '100%' }} />
                    <Image source={require('../../assets/welcome.png')} style={{ marginTop: -320, position: 'static', alignSelf: 'center' }} />
                </View>
                <View style={{ marginTop: 250, marginLeft: 15 }}>
                    <Text style={{ color: '#001A1A', fontSize: 22, letterSpacing: 2 }}>Highlights</Text>
                </View>
                <ScrollView horizontal={true} style={{ flex: 1, flexDirection: 'row', marginTop: 10 }} showsHorizontalScrollIndicator={false}>
                    <CarouselCard title={'Surfing'} content={'Best Hawaiian islands for surfing.'} image={require('../../assets/surfing.png')} />
                    <CarouselCard title={'Hula'} content={'Try it yourself.'} image={require('../../assets/hula.png')} />
                    <CarouselCard title={'Vulcanoes'} content={'Volcanic conditions can change at any time.'} image={require('../../assets/vulcano.png')} />
                </ScrollView>
                <View style={{ backgroundColor: '#E6F2F2', padding: 15, marginTop: 35 }}>
                    <Text style={{ color: 'black', fontSize: 22, letterSpacing: 2, marginBottom: 5, marginTop: 25, fontWeight: 500 }}>Categories</Text>
                    <CategoryCarouselCard title={'Adventure'} />
                    <CategoryCarouselCard title={'Culinary'} />
                    <CategoryCarouselCard title={'Eco-tourism'} />
                    <CategoryCarouselCard title={'Family'} />
                    <CategoryCarouselCard title={'Sport'} />
                </View>
                <View style={{ backgroundColor: '#E6F2F2', padding: 15, paddingBottom: 90 }}>
                    <Text style={{ color: 'black', fontSize: 22, letterSpacing: 2, marginBottom: 5, marginTop: 25, fontWeight: 500 }}>Travel Guide</Text>
                    <GuideCarouselCard title={'Hadwin Malone'} content={'Guide since 2012'} />
                </View>
            </ScrollView>
            <TouchableOpacity style={{
                //Here is the trick
                position: 'absolute',
                width: 380,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 10,
                marginLeft: 15,
            }}>
                <Text style={{ backgroundColor: '#008080', width: 380, padding: 15, borderRadius: 10, textAlign: 'center', color: '#fff', fontSize: 18, letterSpacing: 2 }}>Book a trip</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Home;


import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import Header from '../molecules/Header';
import GuideCarouselCard from '../molecules/GuideCarouselCard';
import SpotCarouselCard from '../molecules/SpotCarouselCard';
const Hula = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent' }}>
            <ScrollView>
                <Header />
                <View>
                    <Image source={require('../../assets/hula.png')} style={{ width: 'auto', height: 240 }} />
                    <Text style={{fontSize: 18, fontWeight: 400, letterSpacing: 2, padding: 20, lineHeight: 30, color: '#001A1A'}}>
                        Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.
                    </Text>
                </View>
                <View style={{ marginTop: 50, marginLeft: 15 }}>
                    <Text style={{ color: '#001A1A', fontSize: 22, letterSpacing: 2 }}>Top spots</Text>
                </View>
                <ScrollView style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                    <SpotCarouselCard title={'1. Maui'}image={require('../../assets/maui.png')} />
                    <SpotCarouselCard title={'2. Kauai'}image={require('../../assets/kauai.png')} />
                    <SpotCarouselCard title={'3. Honolulu'}image={require('../../assets/honolulu.png')} />
                </ScrollView>
                <View style={{ backgroundColor: '#E6F2F2', padding: 15, paddingBottom: 90, marginTop: 80 }}>
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
export default Hula;

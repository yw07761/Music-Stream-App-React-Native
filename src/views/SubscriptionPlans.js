import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SubscriptionPlans = () => {
  const navigation = useNavigation();
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const plans = [
    {
      title: 'Premium',
      badge: 'Free for 1 month',
      price: '$12.99/ month',
      features: [
        'Ad-free listening',
        'Download to listen offline',
        'Access full catalog Premium',
        'High sound quality',
        'Cancel anytime',
      ],
    },
    {
      title: 'Family Plan',
      badge: 'Free for 1 month',
      price: '$15.99/ month',
      features: [
        'Ad-free listening',
        'Download for 6 accounts',
        'Access full catalog Premium',
        'High sound quality',
        'Cancel anytime',
      ],
    },
    {
      title: 'Student Plan',
      badge: 'Free for 1 month',
      price: '$9.99/ month',
      features: [
        'Ad-free listening',
        'Download to listen offline',
        'Access full catalog Premium',
        'High sound quality',
        'Cancel anytime',
      ],
    },
  ];

  return (
    <ImageBackground
      source={require('../images/image116.png')}
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../images/unlimitedmusic.png')}
            />
          </View>

          {/* Display the selected plan in the center */}
          <View style={styles.cardWrapper}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{plans[selectedPlanIndex].title}</Text>
              <Text style={styles.badge}>{plans[selectedPlanIndex].badge}</Text>
              <Text style={styles.price}>{plans[selectedPlanIndex].price}</Text>
              <View style={styles.featuresList}>
                {plans[selectedPlanIndex].features.map((feature, featureIndex) => (
                  <Text key={featureIndex} style={styles.feature}>
                    • {feature}
                  </Text>
                ))}
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Subscribe Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Dots for selecting plan */}
          <View style={styles.dots}>
            {plans.map((_, index) => (
              <TouchableOpacity key={index} onPress={() => setSelectedPlanIndex(index)}>
                <View
                  style={[
                    styles.dot,
                    selectedPlanIndex === index && styles.activeDot,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Back button to navigate to Music Home */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('LanchScreen')}>
            <Image
              source={require('../images/btn17.png')}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -60,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
  cardWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 30,
    width: 320,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6A0DAD',
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#E0E0FF',
    color: '#6A0DAD',
    borderRadius: 12,
    padding: 6,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  featuresList: {
    marginBottom: 20,
  },
  feature: {
    fontSize: 15,
    color: '#333',
  },
  button: {
    backgroundColor: '#6A0DAD',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dots: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#EC12F7',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonImage: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
});

export default SubscriptionPlans;

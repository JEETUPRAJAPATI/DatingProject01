import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Check, Crown } from 'lucide-react-native';
import { useState } from 'react';

const SUBSCRIPTION_PLANS = [
  {
    id: '1',
    duration: '1 Month',
    price: '$24.99',
    originalPrice: '$34.99/mo',
  },
  {
    id: '2',
    duration: '3 Month',
    price: '$69.99',
    originalPrice: '$24.99/mo',
    popular: true,
  },
  {
    id: '3',
    duration: '6 Month',
    price: '$119.99',
    originalPrice: '$19.99/mo',
  },
];

const PAYMENT_METHODS = [
  {
    id: 'paypal',
    name: 'PayPal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
  },
  {
    id: 'stripe',
    name: 'Stripe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
  },
  {
    id: 'razorpay',
    name: 'Razorpay',
    logo: 'https://razorpay.com/assets/razorpay-logo.svg',
  },
];

const PREMIUM_FEATURES = [
  'See everyone who liked you',
  'Move your profile to the top of the feed',
  'Buy unlimited number of likes',
  'See your matches early',
  'Unlimited likes',
];

export default function SubscriptionScreen() {
  const [selectedPlan, setSelectedPlan] = useState(SUBSCRIPTION_PLANS[1].id);
  const [selectedPayment, setSelectedPayment] = useState('paypal');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <View style={styles.successContainer}>
        <View style={styles.successIcon}>
          <Crown size={48} color="#FF4B6A" />
        </View>
        <Text style={styles.successTitle}>Payment Successful</Text>
        <Text style={styles.successText}>
          We have Received your Membership Request and you have Moved to the Front of the Queue!
        </Text>
        <Text style={styles.successSubtext}>
          You will be notified Push Notification Once you are all set. Welcome!
        </Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Subscription Plan</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Unlimited Likes. Send as many likes as you want.
        </Text>

        <View style={styles.featuresList}>
          {PREMIUM_FEATURES.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Check size={20} color="#FF4B6A" />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        <View style={styles.plansContainer}>
          {SUBSCRIPTION_PLANS.map((plan) => (
            <TouchableOpacity
              key={plan.id}
              style={[
                styles.planCard,
                selectedPlan === plan.id && styles.selectedPlan,
                plan.popular && styles.popularPlan,
              ]}
              onPress={() => setSelectedPlan(plan.id)}
            >
              <View style={styles.planHeader}>
                <Text style={[
                  styles.planDuration,
                  selectedPlan === plan.id && styles.selectedText
                ]}>{plan.duration}</Text>
                {plan.popular && (
                  <View style={styles.popularBadge}>
                    <Text style={styles.popularText}>Popular</Text>
                  </View>
                )}
              </View>
              <Text style={[
                styles.planPrice,
                selectedPlan === plan.id && styles.selectedText
              ]}>{plan.price}</Text>
              <Text style={[
                styles.planOriginalPrice,
                selectedPlan === plan.id && styles.selectedText
              ]}>{plan.originalPrice}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Select Payment Method</Text>
          {PAYMENT_METHODS.map((method) => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.paymentMethod,
                selectedPayment === method.id && styles.selectedPayment
              ]}
              onPress={() => setSelectedPayment(method.id)}
            >
              <Text style={styles.paymentName}>{method.name}</Text>
              {selectedPayment === method.id && (
                <View style={styles.radioSelected} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.subscribeButton}
          onPress={handleSubscribe}
        >
          <Text style={styles.subscribeButtonText}>Process to Pay</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#333',
  },
  content: {
    padding: 20,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  featuresList: {
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  plansContainer: {
    marginBottom: 32,
  },
  planCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  selectedPlan: {
    backgroundColor: '#FF4B6A',
  },
  popularPlan: {
    borderWidth: 2,
    borderColor: '#FF4B6A',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  planDuration: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  popularBadge: {
    backgroundColor: '#FF4B6A',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#fff',
  },
  planPrice: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#333',
    marginBottom: 4,
  },
  planOriginalPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'line-through',
  },
  selectedText: {
    color: '#fff',
  },
  paymentSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 12,
  },
  selectedPayment: {
    backgroundColor: '#FFE5EA',
  },
  paymentName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333',
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF4B6A',
  },
  subscribeButton: {
    backgroundColor: '#FF4B6A',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  subscribeButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  successContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFE5EA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  successTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#333',
    marginBottom: 16,
  },
  successText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  successSubtext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 32,
  },
  backButton: {
    backgroundColor: '#FF4B6A',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },
  backButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});
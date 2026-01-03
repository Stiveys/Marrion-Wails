import React, { useState } from 'react';
import Hero from '@/components/sections/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  User,
  Phone,
  Mail,
  Car,
  Home,
  Heart,
  Briefcase,
  DollarSign,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Send
} from 'lucide-react';

interface FormData {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  idNumber: string;
  dateOfBirth: string;

  // Step 2: Insurance Type
  insuranceType: string;
  coverageAmount: string;

  // Step 3: Specific Details
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  vehicleValue?: string;
  propertyType?: string;
  propertyValue?: string;
  healthCoverType?: string;
  businessType?: string;

  // Step 4: Additional Information
  additionalInfo: string;
  preferredContact: string;
  urgency: string;
}

const Quote: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger
  } = useForm<FormData>();

  const insuranceType = watch("insuranceType");

  const steps = [
    { number: 1, title: "Personal Information", icon: User },
    { number: 2, title: "Insurance Type", icon: Briefcase },
    { number: 3, title: "Specific Details", icon: DollarSign },
    { number: 4, title: "Additional Info", icon: CheckCircle }
  ];

  const insuranceTypes = [
    {
      id: "motor",
      title: "Motor Vehicle Insurance",
      icon: Car,
      description: "Protect your vehicle with comprehensive coverage"
    },
    {
      id: "health",
      title: "Health Insurance",
      icon: Heart,
      description: "Access quality healthcare when you need it"
    },
    {
      id: "property",
      title: "Property Insurance",
      icon: Home,
      description: "Safeguard your home and belongings"
    },
    {
      id: "business",
      title: "Business Insurance",
      icon: Briefcase,
      description: "Protect your business assets and operations"
    }
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  const nextStep = async () => {
    let fieldsToValidate: string[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ['firstName', 'lastName', 'email', 'phone', 'idNumber', 'dateOfBirth'];
        break;
      case 2:
        fieldsToValidate = ['insuranceType', 'coverageAmount'];
        break;
      case 3:
        fieldsToValidate = ['vehicleMake', 'vehicleModel', 'vehicleYear', 'vehicleValue'];
        if (insuranceType === 'health') {
          fieldsToValidate = ['healthCoverType'];
        } else if (insuranceType === 'property') {
          fieldsToValidate = ['propertyType', 'propertyValue'];
        } else if (insuranceType === 'business') {
          fieldsToValidate = ['businessType'];
        }
        break;
    }

    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  {...register("firstName", { required: "First name is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  {...register("lastName", { required: "Last name is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email address"
                  }
                })}
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                {...register("phone", { required: "Phone number is required" })}
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="+254 700 000 000"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID Number *
                </label>
                <input
                  {...register("idNumber", { required: "ID number is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your ID number"
                />
                {errors.idNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.idNumber.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  {...register("dateOfBirth", { required: "Date of birth is required" })}
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
                )}
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Insurance Type *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {insuranceTypes.map((type) => (
                  <label
                    key={type.id}
                    className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      insuranceType === type.id
                        ? 'border-cyan-500 bg-cyan-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      {...register("insuranceType", { required: "Please select an insurance type" })}
                      type="radio"
                      value={type.id}
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-3">
                      <type.icon className={`w-8 h-8 ${
                        insuranceType === type.id ? 'text-cyan-600' : 'text-gray-400'
                      }`} />
                      <div>
                        <h3 className="font-semibold text-gray-900">{type.title}</h3>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              {errors.insuranceType && (
                <p className="text-red-500 text-sm mt-2">{errors.insuranceType.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estimated Coverage Amount (KES) *
              </label>
              <select
                {...register("coverageAmount", { required: "Please select coverage amount" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="">Select coverage amount</option>
                <option value="100000-500000">KES 100,000 - 500,000</option>
                <option value="500000-1000000">KES 500,000 - 1,000,000</option>
                <option value="1000000-5000000">KES 1,000,000 - 5,000,000</option>
                <option value="5000000+">KES 5,000,000+</option>
              </select>
              {errors.coverageAmount && (
                <p className="text-red-500 text-sm mt-1">{errors.coverageAmount.message}</p>
              )}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {insuranceType === 'motor' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Make *
                  </label>
                  <input
                    {...register("vehicleMake", { required: "Vehicle make is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="e.g., Toyota, Honda, BMW"
                  />
                  {errors.vehicleMake && (
                    <p className="text-red-500 text-sm mt-1">{errors.vehicleMake.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Model *
                  </label>
                  <input
                    {...register("vehicleModel", { required: "Vehicle model is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="e.g., Corolla, Civic, X5"
                  />
                  {errors.vehicleModel && (
                    <p className="text-red-500 text-sm mt-1">{errors.vehicleModel.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year of Manufacture *
                  </label>
                  <input
                    {...register("vehicleYear", { required: "Year is required" })}
                    type="number"
                    min="1900"
                    max="2024"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="2020"
                  />
                  {errors.vehicleYear && (
                    <p className="text-red-500 text-sm mt-1">{errors.vehicleYear.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Vehicle Value (KES) *
                  </label>
                  <input
                    {...register("vehicleValue", { required: "Vehicle value is required" })}
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="1500000"
                  />
                  {errors.vehicleValue && (
                    <p className="text-red-500 text-sm mt-1">{errors.vehicleValue.message}</p>
                  )}
                </div>
              </div>
            )}

            {insuranceType === 'health' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Health Cover Type *
                </label>
                <select
                  {...register("healthCoverType", { required: "Health cover type is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select cover type</option>
                  <option value="individual">Individual Cover</option>
                  <option value="family">Family Cover</option>
                  <option value="corporate">Corporate Cover</option>
                </select>
                {errors.healthCoverType && (
                  <p className="text-red-500 text-sm mt-1">{errors.healthCoverType.message}</p>
                )}
              </div>
            )}

            {insuranceType === 'property' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    {...register("propertyType", { required: "Property type is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select property type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="mixed">Mixed Use</option>
                  </select>
                  {errors.propertyType && (
                    <p className="text-red-500 text-sm mt-1">{errors.propertyType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Value (KES) *
                  </label>
                  <input
                    {...register("propertyValue", { required: "Property value is required" })}
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="5000000"
                  />
                  {errors.propertyValue && (
                    <p className="text-red-500 text-sm mt-1">{errors.propertyValue.message}</p>
                  )}
                </div>
              </div>
            )}

            {insuranceType === 'business' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  {...register("businessType", { required: "Business type is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select business type</option>
                  <option value="retail">Retail</option>
                  <option value="service">Service</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="consulting">Consulting</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="other">Other</option>
                </select>
                {errors.businessType && (
                  <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>
                )}
              </div>
            )}
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                {...register("additionalInfo")}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Please provide any additional information about your insurance needs..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method *
              </label>
              <div className="space-y-2">
                {['email', 'phone', 'sms'].map((method) => (
                  <label key={method} className="flex items-center space-x-3">
                    <input
                      {...register("preferredContact", { required: "Please select contact method" })}
                      type="radio"
                      value={method}
                      className="text-cyan-600 focus:ring-cyan-500"
                    />
                    <span className="text-gray-700 capitalize">{method}</span>
                  </label>
                ))}
              </div>
              {errors.preferredContact && (
                <p className="text-red-500 text-sm mt-1">{errors.preferredContact.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How urgent is your need for insurance? *
              </label>
              <select
                {...register("urgency", { required: "Please select urgency level" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="">Select urgency</option>
                <option value="immediate">Immediate (Within 1 week)</option>
                <option value="soon">Soon (Within 1 month)</option>
                <option value="planning">Planning (Within 3 months)</option>
                <option value="research">Just Researching</option>
              </select>
              {errors.urgency && (
                <p className="text-red-500 text-sm mt-1">{errors.urgency.message}</p>
              )}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen">
        <Hero
          title="Quote Request Submitted Successfully!"
          subtitle="Thank You for Choosing Marrion Wails"
          description="Our team will review your request and get back to you within 24 hours with a personalized quote tailored to your needs."
          primaryButtonText="Back to Home"
          secondaryButtonText="View Other Services"
          showStats={false}
        />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto space-y-8"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="text-green-600" size={40} />
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                What Happens Next?
              </h2>

              <div className="text-left space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Review & Assessment</h3>
                    <p className="text-gray-600">Our insurance experts will review your application and assess your specific needs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Quote</h3>
                    <p className="text-gray-600">We'll prepare a customized quote with the best coverage options for you.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Contact & Consultation</h3>
                    <p className="text-gray-600">Our team will contact you within 24 hours to discuss your quote and answer any questions.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a
                  href="/"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all"
                >
                  <span>Back to Home</span>
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-cyan-600 text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white transition-all"
                >
                  <span>View Other Services</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero
        title="Get Your Free Insurance Quote"
        subtitle="Quick & Easy Process"
        description="Fill out our simple form to receive a personalized insurance quote tailored to your specific needs within 24 hours."
        primaryButtonText="Start Your Quote"
        secondaryButtonText="Learn More"
        showStats={false}
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.number} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                            currentStep >= step.number
                              ? 'bg-cyan-600 text-white'
                              : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          <Icon size={20} />
                        </div>
                        <span className="text-xs mt-2 text-center font-medium">
                          {step.title}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`w-24 h-1 mx-2 transition-all ${
                            currentStep > step.number
                              ? 'bg-cyan-600'
                              : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {steps[currentStep - 1].title}
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    {renderStepContent()}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                      <button
                        type="button"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                          currentStep === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <ArrowLeft size={20} />
                        <span>Previous</span>
                      </button>

                      {currentStep < 4 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all"
                        >
                          <span>Next</span>
                          <ArrowRight size={20} />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Quote Request</span>
                              <Send size={20} />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Your information is secure and will only be used to provide your quote.
              </p>
              <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} />
                  <span>Free, no obligation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} />
                  <span>Response within 24 hours</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;

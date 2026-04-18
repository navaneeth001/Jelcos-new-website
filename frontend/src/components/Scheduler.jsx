import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar as CalendarComponent } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { format } from 'date-fns';
import { timeSlots, services } from '../mockData';
import { useToast } from '../hooks/use-toast';

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://services--jelcos-d7704.us-east4.hosted.app' 
  : 'http://localhost:3000';

const Scheduler = () => {
  const [date, setDate] = useState();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    timeSlot: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!date) newErrors.date = "Please pick a date";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast({
        title: "Validation Error",
        description: "Please correct the highlighted fields.",
        variant: "destructive"
      });
      return;
    }
    
    const booking = {
      ...formData,
      date: date ? format(date, 'PPP') : ''
    };
    
    try {
      const response = await fetch(`${API_URL}/website-enquiries/schedule`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
      toast({
        title: "Appointment Scheduled!",
        description: `Your appointment for ${formData.service} on ${date ? format(date, 'PPP') : ''} has been scheduled.`,
      });
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', service: '', timeSlot: '' });
        setDate(undefined);
      }, 5000);
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      toast({
        title: "Error",
        description: "Failed to schedule appointment. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (submitted) {
    return (
      <section id="scheduler" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-jelcos-light to-orange-50 rounded-3xl p-12 shadow-xl text-center">
            <div className="w-20 h-20 bg-jelcos-dark/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-jelcos-dark" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Scheduled!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for choosing Jelcos. Your appointment for <span className="font-bold text-jelcos-dark">{formData.service}</span> has been successfully scheduled for <span className="font-bold">{date ? format(date, 'PPP') : ''}</span>.
            </p>
            <p className="text-gray-500 italic">Our care team will call you shortly to confirm the details.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="scheduler" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Schedule an <span className="text-jelcos-dark">Appointment</span>
          </h2>
          <p className="text-lg text-gray-600">
            Book your service appointment and we'll get back to you shortly
          </p>
        </div>

        <div className="bg-gradient-to-br from-jelcos-light to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center text-gray-700">
                <User size={16} className="mr-2" />
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                className={`bg-white border-2 ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-jelcos-dark rounded-xl py-6`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Phone & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center text-gray-700">
                  <Phone size={16} className="mr-2" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="10-digit phone number"
                  className={`bg-white border-2 ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-jelcos-dark rounded-xl py-6`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center text-gray-700">
                  <Mail size={16} className="mr-2" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-white border-2 border-gray-200 focus:border-jelcos-dark rounded-xl py-6"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <Label className="flex items-center text-gray-700">
                Service Type *
              </Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                <SelectTrigger className={`bg-white border-2 ${errors.service ? 'border-red-500' : 'border-gray-200'} focus:border-jelcos-dark rounded-xl py-6`}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.title}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="flex items-center text-gray-700">
                  <Calendar size={16} className="mr-2" />
                  Preferred Date *
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal bg-white border-2 ${errors.date ? 'border-red-500' : 'border-gray-200'} hover:border-jelcos-dark rounded-xl py-6`}
                    >
                      {date ? format(date, 'PPP') : <span className="text-gray-500">Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                  </Popover>
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

              <div className="space-y-2">
                <Label className="flex items-center text-gray-700">
                  <Clock size={16} className="mr-2" />
                  Preferred Time
                </Label>
                <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange('timeSlot', value)}>
                  <SelectTrigger className="bg-white border-2 border-gray-200 focus:border-jelcos-dark rounded-xl py-6">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-full bg-jelcos-dark hover:bg-jelcos-darker text-white py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Schedule Appointment
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Scheduler;

import React, { useState } from 'react';
import { ClipboardList, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { questionnaireQuestions } from '../mockData';
import { useToast } from '../hooks/use-toast';

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://services--jelcos-d7704.us-east4.hosted.app' 
  : 'http://localhost:3000';

const Questionnaire = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const validateField = (questionId, value) => {
    const question = questionnaireQuestions.find(q => q.id === questionId);
    if (!question) return "";

    const isEmpty = !value || (typeof value === 'string' && value.trim() === '');

    if (isEmpty) {
      return question.optional ? "" : "This field is required";
    }

    if (question.type === 'tel' && question.pattern) {
      const regex = new RegExp(`^${question.pattern}$`);
      if (!regex.test(value)) return question.title || "Invalid format";
    }

    if (question.type === 'number') {
      const num = Number(value);
      if (question.min !== undefined && num < question.min) return `Minimum value is ${question.min}`;
      if (question.max !== undefined && num > question.max) return `Maximum value is ${question.max}`;
    }

    if (question.type === 'textarea' && question.minLength) {
      if (value.length < question.minLength) return `Minimum ${question.minLength} characters required`;
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    let hasErrors = false;

    questionnaireQuestions.forEach(q => {
      const error = validateField(q.id, formData[q.id]);
      if (error) {
        newErrors[q.id] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      toast({
        title: "Validation Error",
        description: "Please check the highlighted fields.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      const response = await fetch(`${API_URL}/website-enquiries/questionnaire`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
      toast({
        title: "Questionnaire Submitted!",
        description: "Thank you for providing the information. Our team will contact you soon.",
      });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({});
      }, 3000);
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      toast({
        title: "Error",
        description: "Failed to submit questionnaire. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (questionId, value) => {
    setFormData(prev => ({ ...prev, [questionId]: value }));
    // Clear error when user starts typing/selecting
    if (errors[questionId]) {
      setErrors(prev => ({ ...prev, [questionId]: "" }));
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-jelcos-light to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-jelcos-bright/30 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-jelcos-bright/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClipboardList className="text-jelcos-bright" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600">Your information has been submitted successfully. Our care team will review it and contact you shortly.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-jelcos-light to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient <span className="text-jelcos-dark">Assessment</span>
          </h2>
          <p className="text-lg text-gray-600">
            Help us understand your care needs better by answering a few questions
          </p>
        </div>

        <Card className="border-2 border-gray-200 shadow-xl">
          <CardHeader className="bg-white">
            <CardTitle className="flex items-center text-2xl">
              <ClipboardList className="text-jelcos-dark mr-3" size={28} />
              Patient Condition Questionnaire
            </CardTitle>
            <CardDescription>
              Please provide accurate information to help us serve you better
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-white p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {questionnaireQuestions.map((question) => (
                <div key={question.id} className="space-y-3">
                  <Label htmlFor={`question-${question.id}`} className="text-base font-medium text-gray-800">
                    {question.id}. {question.question} {question.optional && <span className="text-gray-400 font-normal text-sm ml-1">(Optional)</span>}
                  </Label>
                  
                  {question.type === 'select' && (
                    <Select 
                      value={formData[question.id] || ''} 
                      onValueChange={(value) => handleInputChange(question.id, value)}
                    >
                      <SelectTrigger className={`bg-gray-50 border-2 ${errors[question.id] ? 'border-red-500' : 'border-gray-200'} focus:border-jelcos-dark rounded-xl py-6`}>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {question.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  
                  {question.type === 'number' && (
                    <Input
                      id={`question-${question.id}`}
                      type="number"
                      value={formData[question.id] || ''}
                      onChange={(e) => handleInputChange(question.id, e.target.value)}
                      placeholder={question.placeholder || "Enter age"}
                      className={`bg-gray-50 border-2 ${errors[question.id] ? 'border-red-500' : 'border-gray-200'} focus:border-jelcos-dark rounded-xl py-6`}
                    />
                  )}

                  {question.type === 'tel' && (
                    <Input
                      id={`question-${question.id}`}
                      type="tel"
                      value={formData[question.id] || ''}
                      onChange={(e) => handleInputChange(question.id, e.target.value)}
                      placeholder={question.placeholder || "Enter phone number"}
                      className={`bg-gray-50 border-2 ${errors[question.id] ? 'border-red-500' : 'border-gray-200'} focus:border-jelcos-dark rounded-xl py-6`}
                    />
                  )}
                  
                  {question.type === 'textarea' && (
                    <Textarea
                      id={`question-${question.id}`}
                      value={formData[question.id] || ''}
                      onChange={(e) => handleInputChange(question.id, e.target.value)}
                      placeholder={question.placeholder || "Please provide details..."}
                      rows={4}
                      className={`bg-gray-50 border-2 ${errors[question.id] ? 'border-red-500' : 'border-gray-200'} focus:border-jelcos-dark rounded-xl resize-none`}
                    />
                  )}
                  
                  {errors[question.id] && (
                    <p className="text-red-500 text-sm mt-1 animate-in fade-in slide-in-from-top-1">
                      {errors[question.id]}
                    </p>
                  )}
                </div>
              ))}

              <Button 
                type="submit"
                className="w-full bg-jelcos-dark hover:bg-jelcos-darker text-white py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Submit Assessment
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Questionnaire;

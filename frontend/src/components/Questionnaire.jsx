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

const Questionnaire = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission - store in localStorage
    const questionnaire = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    };
    
    const existingQuestionnaires = JSON.parse(localStorage.getItem('questionnaires') || '[]');
    localStorage.setItem('questionnaires', JSON.stringify([...existingQuestionnaires, questionnaire]));
    
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
  };

  const handleInputChange = (questionId, value) => {
    setFormData(prev => ({ ...prev, [questionId]: value }));
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
                    {question.id}. {question.question}
                  </Label>
                  
                  {question.type === 'select' && (
                    <Select 
                      value={formData[question.id] || ''} 
                      onValueChange={(value) => handleInputChange(question.id, value)}
                      required
                    >
                      <SelectTrigger className="bg-gray-50 border-2 border-gray-200 focus:border-jelcos-dark rounded-xl py-6">
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
                      required
                      value={formData[question.id] || ''}
                      onChange={(e) => handleInputChange(question.id, e.target.value)}
                      placeholder="Enter age"
                      className="bg-gray-50 border-2 border-gray-200 focus:border-jelcos-dark rounded-xl py-6"
                    />
                  )}
                  
                  {question.type === 'textarea' && (
                    <Textarea
                      id={`question-${question.id}`}
                      required
                      value={formData[question.id] || ''}
                      onChange={(e) => handleInputChange(question.id, e.target.value)}
                      placeholder="Please provide details..."
                      rows={4}
                      className="bg-gray-50 border-2 border-gray-200 focus:border-jelcos-dark rounded-xl resize-none"
                    />
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

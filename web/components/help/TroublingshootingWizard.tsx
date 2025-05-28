// src/components/TroubleshootingWizard.tsx
'use client';

import { useState } from 'react';
import {ContactForm} from '@/components/help/ContactForm'

type Step = {
  id: string;
  question: string;
  options: {
    text: string;
    nextStep: string;
    solution?: string;
  }[];
};

export function TroubleshootingWizard() {
  const [currentStep, setCurrentStep] = useState<string>('start');
  const [history, setHistory] = useState<string[]>(['start']);
  
  const steps: Record<string, Step> = {
    start: {
      id: 'start',
      question: 'What issue are you experiencing?',
      options: [
        { text: 'Login problems', nextStep: 'login' },
        { text: 'Payment issues', nextStep: 'payment' },
        { text: 'Feature not working', nextStep: 'feature' },
      ],
    },
    login: {
      id: 'login',
      question: 'What specifically is happening when you try to log in?',
      options: [
        { text: 'I forgot my password', nextStep: 'login_password', solution: 'Use our password reset tool at /reset-password' },
        { text: 'My account is locked', nextStep: 'login_locked', solution: 'Contact support to unlock your account' },
        { text: 'I get an error message', nextStep: 'login_error' },
      ],
    },
    login_error: {
      id: 'login_error',
      question: 'What error message are you seeing?',
      options: [
        { text: 'Invalid credentials', nextStep: 'login_error_credentials', solution: 'Double-check your username/password. Reset if needed.' },
        { text: 'Account not found', nextStep: 'login_error_notfound', solution: 'You may have registered with a different email. Try signing up.' },
        { text: 'Other error', nextStep: 'contact_support', solution: 'Please contact our support team with screenshot of the error' },
      ],
    },
    contact_support: {
      id: 'contact_support',
      question: 'Need further assistance?',
      options: [
        { text: 'Contact Support', nextStep: 'contact_form' },
        { text: 'Start Over', nextStep: 'start' },
      ],
    },
    // Additional steps would be defined here...
  };

  const handleOptionSelect = (nextStep: string) => {
    setCurrentStep(nextStep);
    setHistory([...history, nextStep]);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentStep(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        {history.length > 1 && (
          <button 
            onClick={goBack}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        )}
      </div>
      
      <h3 className="text-xl font-semibold mb-4">{steps[currentStep].question}</h3>
      
      <div className="space-y-3">
        {steps[currentStep].options.map((option, index) => (
          <div key={index}>
            <button
              onClick={() => handleOptionSelect(option.nextStep)}
              className="w-full text-left p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              {option.text}
            </button>
            {option.solution && currentStep === option.nextStep && (
              <div className="mt-2 p-3 bg-blue-50 text-blue-800 rounded-md">
                <p className="font-medium">Suggested Solution:</p>
                <p>{option.solution}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {currentStep === 'contact_form' && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-lg font-medium mb-3">Contact Support</h4>
          <ContactForm />
        </div>
      )}
    </div>
  );
}
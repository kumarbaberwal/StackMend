// src/components/SupportAvailability.tsx
'use client';

import { useEffect, useState } from 'react';

export function SupportAvailability() {
  const [status, setStatus] = useState<'online' | 'offline' | 'checking'>('checking');
  const [waitTime, setWaitTime] = useState<number | null>(null);
  const [agentsAvailable, setAgentsAvailable] = useState<number | null>(null);

  useEffect(() => {
    // Simulate API call to get support status
    const fetchStatus = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data - in a real app this would come from your API
        const now = new Date();
        const hours = now.getHours();
        const isOnline = hours >= 9 && hours < 17; // 9AM-5PM
        
        setStatus(isOnline ? 'online' : 'offline');
        setWaitTime(isOnline ? Math.floor(Math.random() * 10) + 1 : null);
        setAgentsAvailable(isOnline ? Math.floor(Math.random() * 5) + 1 : 0);
      } catch (error) {
        console.error('Failed to fetch support status:', error);
        setStatus('offline');
      }
    };
    
    fetchStatus();
    
    // Update every minute to refresh wait time
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-medium text-gray-900 mb-2">Support Team Status</h3>
      
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full mr-2 ${
          status === 'online' ? 'bg-green-500' : 
          status === 'offline' ? 'bg-red-500' : 'bg-yellow-500'
        }`}></div>
        
        <span className="font-medium">
          {status === 'online' ? 'Online now' : 
           status === 'offline' ? 'Currently offline' : 'Checking status...'}
        </span>
      </div>
      
      {status === 'online' && (
        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <p>• {agentsAvailable} support agents available</p>
          <p>• Average wait time: {waitTime} minutes</p>
          <p>• Hours: Monday-Friday, 9AM-5PM EST</p>
        </div>
      )}
      
      {status === 'offline' && (
        <div className="mt-3 text-sm text-gray-600">
          <p>Our support team is currently offline. Please submit a ticket and we'll respond within 24 hours.</p>
        </div>
      )}
      
      <div className="mt-4 pt-3 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-2">Contact Options</h4>
        <div className="space-y-2">
          <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Live Chat {status === 'online' ? '(Available)' : '(Offline)'}
          </button>
          <button className="w-full py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
}

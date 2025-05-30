// src/components/AiHelpSearch.tsx
'use client';

import { useState, useCallback } from 'react';
import { FiSearch, FiLoader, FiMessageSquare } from 'react-icons/fi';

type SearchResult = {
  id: string;
  title: string;
  content: string;
  similarity: number;
  type: 'faq' | 'article' | 'tutorial';
};

export function AiHelpSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    try {
      // Simulate API call to semantic search backend
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock results - in a real app, these would come from your search API
      setResults([
        {
          id: '1',
          title: 'Account Setup Process',
          content: 'To set up your account, navigate to the signup page and complete all required fields...',
          similarity: 0.92,
          type: 'faq'
        },
        {
          id: '2',
          title: 'Troubleshooting Login Issues',
          content: 'If you cannot log in, first try resetting your password. If that doesn\'t work...',
          similarity: 0.87,
          type: 'article'
        },
        {
          id: '3',
          title: 'Video: Dashboard Walkthrough',
          content: 'This 5-minute video will show you how to navigate all dashboard features...',
          similarity: 0.79,
          type: 'tutorial'
        }
      ]);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsSearching(false);
    }
  }, [query]);

  return (
    <div className="mb-8">
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Ask a question or describe your issue..."
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button 
          onClick={handleSearch}
          disabled={isSearching}
          className="absolute left-3 top-3 text-gray-500 hover:text-blue-600"
        >
          {isSearching ? <FiLoader className="animate-spin" /> : <FiSearch />}
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          {results.map((result) => (
            <div 
              key={result.id}
              onClick={() => setSelectedResult(result)}
              className={`p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedResult?.id === result.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-blue-600">
                  <FiMessageSquare />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{result.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {result.content}
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span className="capitalize">{result.type}</span>
                    <span className="mx-2">•</span>
                    <span>{(result.similarity * 100).toFixed(0)}% match</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedResult && (
        <div className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-gray-900">{selectedResult.title}</h3>
            <button 
              onClick={() => setSelectedResult(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <div className="prose max-w-none mt-4 text-gray-700">
            <p>{selectedResult.content}</p>
            {/* In a real implementation, you would render full content here */}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">Was this helpful?</p>
            <div className="flex space-x-3 mt-2">
              <button className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-md hover:bg-green-200">
                Yes
              </button>
              <button className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded-md hover:bg-red-200">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
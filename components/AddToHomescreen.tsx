import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface AddToHomeScreenProps {
  onClose: () => void;
}

const AddToHomeScreen: React.FC<AddToHomeScreenProps> = ({ onClose }) => {
  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'desktop'>('desktop');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|ipod/.test(userAgent) && !(window as any).MSStream) {
      setDeviceType('ios');
    } else if (/android/.test(userAgent)) {
      setDeviceType('android');
    }
  }, []);

  const renderInstructions = () => {
    switch (deviceType) {
      case 'ios':
        return (
          <ol className="list-decimal list-inside text-left">
            <li>Tap the Share button at the bottom of the screen</li>
            <li>Scroll down and tap "Add to Home Screen"</li>
            <li>Tap "Add" in the top right corner</li>
          </ol>
        );
      case 'android':
        return (
          <ol className="list-decimal list-inside text-left">
            <li>Tap the menu icon (3 dots) in the top right of the browser</li>
            <li>Tap "Add to Home screen"</li>
            <li>Tap "Add" to confirm</li>
          </ol>
        );
      default:
        return (
          <p className="text-left">
            To add Stack to your home screen, please access this website on a mobile device.
          </p>
        );
    }
  };

  const handleAddToHomeScreen = () => {
    // Here you would implement the logic to add to home screen
    // This might involve using the Web App Manifest and beforeinstallprompt event
    // For now, we'll just close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-auto shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Add Stack to Home Screen
        </h2>
        <p className="mb-4 text-center text-gray-600">
          Install Stack on your home screen for quick and easy access when
          you're on the go.
        </p>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Follow these steps:</h3>
          {renderInstructions()}
        </div>
        {deviceType !== 'desktop' && (
          <div className="flex justify-center">
            <button
              onClick={handleAddToHomeScreen}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Add to Home Screen
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToHomeScreen;

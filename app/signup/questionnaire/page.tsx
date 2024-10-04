'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const questions = [
  {
    question:
      'How familiar are you with cryptocurrencies and blockchain technology?',
    options: [
      'I have extensive knowledge and actively follow industry developments.',
      'I have a basic understanding and occasionally read about them.',
      "I've heard of them but don't know much.",
      "I'm not familiar at all.",
    ],
  },
  {
    question: 'What is your primary investment objective?',
    options: [
      'Aggressive growth through high-risk, high-reward investments.',
      'Moderate growth with a balanced mix of risk and safety.',
      'Preservation of capital with minimal risk exposure.',
      'Generating steady income with low volatility.',
    ],
  },
  {
    question:
      'How would you react if your cryptocurrency investment lost 50% of its value in a short period?',
    options: [
      'I would see it as a buying opportunity and invest more.',
      'I would hold my position and wait for a recovery.',
      'I would feel uneasy and consider reducing my exposure.',
      'I would sell immediately to prevent further losses.',
    ],
  },
  {
    question:
      'What percentage of your total investable assets are you considering allocating to cryptocurrencies?',
    options: [
      'More than 50%',
      'Between 25% and 50%',
      'Between 5% and 25%',
      'Less than 5%',
    ],
  },
  {
    question:
      'How important is liquidity (the ability to quickly sell your investments) to you?',
    options: [
      "Not important; I'm comfortable locking in investments long-term.",
      'Somewhat important; I prefer flexibility but can commit for a while.',
      'Important; I may need access to funds on short notice.',
      'Very important; I require immediate access to my funds.',
    ],
  },
  {
    question: 'What is your investment time horizon for cryptocurrencies?',
    options: [
      'Long-term (5 years or more)',
      'Medium-term (2 to 5 years)',
      'Short-term (6 months to 2 years)',
      'Very short-term (less than 6 months)',
    ],
  },
  {
    question: 'How do you typically handle investment losses?',
    options: [
      'I accept them as part of investing and stay focused on long-term goals.',
      'I feel concerned but usually maintain my investment strategy.',
      'I become anxious and consider changing my approach.',
      'I feel very stressed and may exit investments to prevent further losses.',
    ],
  },
];

const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
  </div>
);

export default function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Simulate API call with a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Answers submitted:', answers);
      // Here you would typically send the answers to your backend
      router.push('/signup/welcome');
    } catch (error) {
      console.error('Error submitting answers:', error);
      alert('There was an error submitting your answers. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkipQuestionnaire = () => {
    router.push('/signup/welcome');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-2xl bg-white shadow-xl rounded-xl overflow-hidden mb-4">
        <CardHeader className="bg-emerald-600 text-white">
          <CardTitle className="text-2xl font-bold">
            {userName ? `${userName}'s Investment Setup` : 'Investment Setup'}
          </CardTitle>
          <CardDescription className="text-emerald-100">
            Question {currentQuestion + 1} of {questions.length}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            {questions[currentQuestion].question}
          </h2>
          <RadioGroup
            value={answers[currentQuestion]}
            onValueChange={handleAnswer}
          >
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem
                  value={option}
                  id={`option-${index}`}
                  className="text-emerald-500"
                />
                <Label htmlFor={`option-${index}`} className="text-gray-700">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>

        <CardFooter className="flex justify-between bg-gray-50 p-4 rounded-b-xl">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={cn(
              'bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full px-6 py-2 transition-colors',
              currentQuestion === 0 && 'opacity-50 cursor-not-allowed'
            )}
          >
            Previous
          </Button>

          {currentQuestion < questions.length - 1 ? (
            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className={cn(
                'bg-emerald-600 text-white hover:bg-emerald-700 rounded-full px-6 py-2 transition-colors',
                !answers[currentQuestion] && 'opacity-50 cursor-not-allowed'
              )}
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={answers.some((answer) => !answer) || isLoading}
              className={cn(
                'bg-emerald-600 text-white hover:bg-emerald-700 rounded-full px-6 py-2 transition-colors',
                (answers.some((answer) => !answer) || isLoading) &&
                  'opacity-50 cursor-not-allowed'
              )}
            >
              {isLoading ? <LoadingSpinner /> : 'Submit'}
            </Button>
          )}
        </CardFooter>
      </Card>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-full px-6 py-2 transition-colors">
            Skip Questionnaire
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-semibold text-gray-900">
              Are you sure you want to skip?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              Skipping the questionnaire may affect our ability to provide you
              with the most suitable investment recommendations.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSkipQuestionnaire}
              className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

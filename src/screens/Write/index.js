import React, {useState, useEffect} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import Container from './container';

const Write = () => {
  const {goBack} = useNavigation();
  const [step, setStep] = useState(0);
  const [canNext, setNext] = useState(false);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (title.length > 0 && category.length > 0 && amount > 0) {
      setNext(true);
    }
  }, [title, category, amount]);

  const goPrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const goNext = currentStep => {
    if (currentStep < 2) {
      setStep(currentStep + 1);
    }
  };

  const closeWrite = () => {
    goBack();
  };

  return (
    <Container
      canNext={canNext}
      step={step}
      goPrevious={goPrevious}
      goNext={goNext}
      closeWrite={closeWrite}
      title={title}
      setTitle={setTitle}
      category={category}
      amount={amount}
      setAmount={setAmount}
    />
  );
};

export default Write;

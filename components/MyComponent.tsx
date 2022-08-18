import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { wait } from '../utils/wait';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);

  // Stage 1
  useEffect(() => {
    const abortController = new AbortController();

    setIsLoading(true);

    wait({ signal: abortController.signal })
      .then(() => {
        setA(true);
      })
      .catch((error) => console.log(error));

    return () => {
      abortController.abort();
    };
  }, []);

  // Stage 2
  useEffect(() => {
    const abortController = new AbortController();

    if (!a) {
      return;
    }

    wait({ signal: abortController.signal })
      .then(() => {
        setB(true);
      })
      .catch((error) => console.log(error));

    return () => {
      abortController.abort();
    };
  }, [a]);

  // Stage 3
  useEffect(() => {
    const abortController = new AbortController();

    if (!b) {
      return;
    }

    wait({ signal: abortController.signal })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => console.log(error));

    return () => {
      abortController.abort();
    };
  }, [b]);

  useEffect(() => {
    return () => {
      console.log('unmounting');
    };
  }, []);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return <Text>Hello world.</Text>;
}

export { MyComponent };

import { act, render, screen } from '@testing-library/react-native';
import { MyComponent } from '../components/MyComponent';
import { wait } from '../utils/wait';

jest.useRealTimers();

test('MyComponent', async () => {
  render(<MyComponent />);

  // Commenting this out makes it work but with `act` warnings...
  // await wait({ ms:5000 });

  await screen.findByText('Hello world.', {}, { timeout: 20000 });
}, 30000);

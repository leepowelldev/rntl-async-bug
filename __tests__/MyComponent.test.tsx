import { render, screen } from '@testing-library/react-native';
import { MyComponent } from '../components/MyComponent';

jest.useRealTimers();

test('MyComponent', async () => {
  render(<MyComponent />);

  await screen.findByText('Hello world.', {}, { timeout: 20000 });
}, 30000);

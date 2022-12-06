import Home from './views/Home';
import { QueryClientProvider ,QueryClient} from 'react-query';
const App = () => {

  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;

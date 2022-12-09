import Home from './views/Home';
import { QueryClientProvider ,QueryClient} from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {BrowserRouter } from 'react-router-dom';
import MainRoute from './config';
const App = () => {
  const queryClient = new QueryClient();
  
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MainRoute />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

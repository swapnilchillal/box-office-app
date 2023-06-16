import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './Pages/Show';
import { GlobalTheme } from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>
            <Route path="/show/:ShowId" element={<Show />} />

            <Route path="*" element={'Not Found'} />

            {/* <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route>
      <Route path="contact-us" element={<Contact />} /> */}
          </Routes>
        </HashRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage/HomePage';
import ResumePage from './ResumePage/ResumePage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import ContactPage from './ContactPage/ContactPage';

const App = () => {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={HomePage}>
          <Layout>
            <HomePage />
          </Layout>
        </Route>

        <Route path="/resume" component={ResumePage}>
          <Layout>
            <ResumePage />
          </Layout>
        </Route>

        <Route path="/projects" component={ProjectsPage}>
          <Layout>
            <ProjectsPage />
          </Layout>
        </Route>

        <Route path="/contact" component={ContactPage}>
          <Layout>
            <ContactPage />
          </Layout>
        </Route>

      </Switch>
    </Router>
  );
};

export default App;

import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        <Header />
        {this.childComponents}
        {this.childPages}
        <Footer />
      </div>
    );
  }
}

export default withModel(App);

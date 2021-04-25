import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonFooter } from '@ionic/react';
import './Home.css';
import MenuContainer from "../components/Menu/MenuContainer";
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="dark">
          <MenuContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;